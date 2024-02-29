import { WebhookClient } from '@bloock/sdk';
import bodyParser from 'body-parser';
import express from 'express';

const app = express();
const port = 3000;

const secretKey = 'NHJTAE6ikKBccSaeCSBSWGdp7NmixXy7';

const options = {
  inflate: true,
  limit: '100kb',
  type: 'application/*',
};
app.use(bodyParser.raw(options));

app.post('/verify', async (req, res) => {
  const enforceTolerance = false; // decide if you want to set tolerance when verifying
  const body = req.body;
  const header = req.get('Bloock-Signature');

  const webhookClient = new WebhookClient();
  const ok = await webhookClient.verifyWebhookSignature(
    body,
    header,
    secretKey,
    enforceTolerance
  );
  if (!ok) {
    console.error('Invalid Signature!');
  } else {
    console.log('Valid Signature!');
  }
  return res;
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
