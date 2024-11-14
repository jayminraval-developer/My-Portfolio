const twilio = require('twilio');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000; // Port for your server

// Twilio credentials
const client = twilio('your_account_sid', 'your_auth_token');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Endpoint to send message via WhatsApp or SMS
app.post('/send-message', (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  // Sending a WhatsApp message (or SMS)
  client.messages
    .create({
      body: `New message from: \nName: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
      from: 'whatsapp:+1XXXXXX',  // Your Twilio WhatsApp Number
      to: 'whatsapp:+7046957063', // Your WhatsApp number or Mobile
    })
    .then((message) => {
      console.log(message.sid);
      res.status(200).send('Message sent!');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Error sending message.');
    });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
