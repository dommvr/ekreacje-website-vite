import Mailjet from 'node-mailjet';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, message, honeypot } = req.body;

  // 1. Honeypot check (Antispam)
  // If the honeypot field is filled, it's likely a bot.
  if (honeypot) {
    console.log('Spam detected via honeypot');
    return res.status(200).json({ success: true, message: 'Message sent successfully (spam filtered)' });
  }

  // 2. Basic validation
  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required' });
  }

  // 3. Mailjet Configuration
  const mailjet = new Mailjet({
    apiKey: process.env.MJ_APIKEY_PUBLIC || '',
    apiSecret: process.env.MJ_APIKEY_PRIVATE || ''
  });

  try {
    const result = await mailjet
      .post("send", { 'version': 'v3.1' })
      .request({
        "Messages": [
          {
            "From": {
              "Email": process.env.MJ_SENDER_EMAIL || '',
              "Name": "E-Kreacje Formularz"
            },
            "To": [
              {
                "Email": process.env.MJ_RECEIVER_EMAIL || '',
                "Name": "Aleksandra Marciniak"
              }
            ],
            "Subject": "Nowa wiadomość z e-kreacje.pl",
            "TextPart": `Od: ${email}\n\nWiadomość:\n${message}`,
            "HTMLPart": `<h3>Nowa wiadomość od: ${email}</h3><p><strong>Treść:</strong></p><p>${message.replace(/\n/g, '<br>')}</p>`,
            "ReplyTo": {
              "Email": email,
              "Name": email
            }
          }
        ]
      });

    console.log('Email sent successfully:', result.body);
    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('Mailjet error:', error.statusCode, error.message);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
