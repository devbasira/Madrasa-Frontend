import crypto from 'crypto';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const signature = req.headers['x-gumroad-signature'];
        const webhookSecret = process.env.GUMROAD_WEBHOOK_SECRET;  // Set this in your .env file

        // Step 1: Verify the signature to ensure it's from Gumroad
        const computedSignature = crypto
            .createHmac('sha256', webhookSecret)
            .update(JSON.stringify(req.body))
            .digest('hex');

        if (signature !== computedSignature) {
            return res.status(400).json({ error: 'Invalid signature' });
        }

        // Step 2: Process the webhook payload (transaction data)
        const payload = req.body;

        // Example: You can log the webhook payload or store it in your database
        console.log('Received Gumroad webhook:', payload);

        // Step 3: Respond to acknowledge receipt
        res.status(200).json({ success: true });
    } else {
        // Reject any non-POST requests
        res.status(405).json({ error: 'Method Not Allowed' });
    }
}
