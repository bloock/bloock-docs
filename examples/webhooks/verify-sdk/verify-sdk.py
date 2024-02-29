from flask import Flask
from flask import request
from bloock.client.webhook import WebhookClient

app = Flask(__name__)

SECRET_KEY = "NHJTAE6ikKBccSaeCSBSWGdp7NmixXy7"


@app.route('/verify', methods=['POST'])
def index():
    enforce_tolerance = False  # decide if you want to set tolerance when verifying

    body = request.data
    bloock_signature = request.headers['Bloock-Signature']

    webhook_client = WebhookClient()
    ok = webhook_client.verify_webhook_signature(
        body, bloock_signature, SECRET_KEY, enforce_tolerance)

    if not ok:
        raise ValueError('Invalid Signature!')
    else:
        print('Valid Signature!')

    return 'Finish'


app.run(host='0.0.0.0', port=81)

