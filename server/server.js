// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/contactDB', { useNewUrlParser: true, useUnifiedTopology: true });

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  attachments: [String]
});

const Contact = mongoose.model('Contact', contactSchema);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const upload = multer({ storage });

app.post('/api/contact', upload.array('attachments'), async (req, res) => {
  const { name, email, message } = req.body;
  const attachments = req.files.map(file => file.path);

  const contact = new Contact({ name, email, message, attachments });
  try {
    await contact.save();
    res.status(200).send('Message saved!');
  } catch (error) {
    res.status(500).send('Something went wrong, please try again later');
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
