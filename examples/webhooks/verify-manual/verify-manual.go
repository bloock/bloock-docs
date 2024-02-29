package main

import (
	"bytes"
	"crypto/hmac"
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"errors"
	"fmt"
	"io"
	"log"
	"net/http"
	"strconv"
	"strings"
	"time"
)

const (
	// SecretKey represents the client secret key associate to your webhook endpoint
	SecretKey = "secret"
	// DefaultTolerance indicates that signatures older than this will be rejected.
	DefaultTolerance = 600 * time.Second
	// signingVersion represents the version of the signature we currently use.
	signingVersion = "v1"
)

var (
	// ErrInvalidHeader invalid header
	ErrInvalidHeader = errors.New("webhook has invalid Bloock-Signature header")
	// ErrNotSigned not signed
	ErrNotSigned = errors.New("webhook has no Bloock-Signature header")
	// ErrNoValidSignature no valid signature
	ErrNoValidSignature = errors.New("webhook had no valid signature")
	// ErrTooOld too olad
	ErrTooOld = errors.New("timestamp wasn't within tolerance")
)

type signedHeader struct {
	timestamp time.Time
	signature []byte
}

func main() {

	verifyHandler := func(w http.ResponseWriter, req *http.Request) {
		enforceTolerance := false // decide if you want to set tolerance when verifying

		body, err := io.ReadAll(req.Body)
		if err != nil {
			log.Fatalf("Cannot read body request: %v", err)
		}
		bloockSignature := req.Header.Get("Bloock-Signature")
		err = verifySignature(body, bloockSignature, SecretKey, enforceTolerance)
		if err != nil {
			log.Fatal(err)
		}
		log.Println("Valid Signature!")
	}

	http.HandleFunc("/verify", verifyHandler)
	log.Println("Listing for requests at http://localhost:8000/verify")
	log.Fatal(http.ListenAndServe(":8000", nil))
}

func verifySignature(payload []byte, sigHeader string, secretKey string, enforceTolerance bool) error {
	header, err := parseSignatureHeader(sigHeader)
	if err != nil {
		return err
	}
	expectedSignature, err := computeSignature(header.timestamp, payload, secretKey)
	if err != nil {
		return err
	}
	expiredTimestamp := time.Since(header.timestamp) > DefaultTolerance
	if enforceTolerance && expiredTimestamp {
		return ErrTooOld
	}

	if hmac.Equal(expectedSignature, header.signature) {
		return nil
	}
	return ErrNoValidSignature
}

func parseSignatureHeader(header string) (*signedHeader, error) {
	sh := &signedHeader{}

	if header == "" {
		return sh, ErrNotSigned
	}

	// Signed header looks like "t=1495999758,v1=ABC"
	pairs := strings.Split(header, ",")
	for _, pair := range pairs {
		parts := strings.Split(pair, "=")
		if len(parts) != 2 {
			return sh, ErrInvalidHeader
		}

		switch parts[0] {
		case "t":
			timestamp, err := strconv.ParseInt(parts[1], 10, 64)
			if err != nil {
				return sh, ErrInvalidHeader
			}
			sh.timestamp = time.Unix(timestamp, 0)

		case signingVersion:
			sig, err := hex.DecodeString(parts[1])
			if err != nil {
				continue
			}
			sh.signature = sig

		default:
			continue
		}
	}

	if len(sh.signature) == 0 {
		return sh, ErrNoValidSignature
	}

	return sh, nil
}

func computeSignature(t time.Time, payload []byte, secretKey string) ([]byte, error) {
	buffer := new(bytes.Buffer)
	if err := json.Compact(buffer, payload); err != nil {
		return nil, err
	}
	mac := hmac.New(sha256.New, []byte(secretKey))
	mac.Write([]byte(fmt.Sprintf("%d", t.Unix())))
	mac.Write([]byte("."))
	mac.Write(buffer.Bytes())

	return mac.Sum(nil), nil
}
