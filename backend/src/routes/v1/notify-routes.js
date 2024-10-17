var admin = require("firebase-admin");
const express = require('express');
const router = express.Router();
var serviceAccount = require('C:\\Users\\dlove\\OneDrive\\Desktop\\SIH\\THEpic\\backend\\hazard-7eba2-firebase-adminsdk-1w3tw-9809540628.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

router.post('/send-notifications', (req, res) => {
    try {
      const { deviceIds, title, body } = req.body;
      // Check if deviceIds, title, and body are provided in the request body
      if (!deviceIds || !title || !body) {
        return res.status(400).json({ error: 'Missing required parameters.' });
      }
  
      const messages = deviceIds.map((registrationToken) => ({
        notification: {
          title,
          body,
        },
        token: registrationToken,
      }));
  
      // Send messages to devices
      admin.messaging().sendAll(messages)
        .then((response) => {
          console.log('Successfully sent messages:', response);
          res.status(200).json({ success: true, response });
        })
        .catch((error) => {
          console.error('Error sending messages:', error);
          res.status(500).json({ error: 'Internal server error.' });
        });
    } catch (error) {
      console.error('Unexpected error:', error);
      res.status(500).json({ error: 'Internal server error.' });
    }
  });

module.exports = router;