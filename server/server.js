const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB using the connection string from the .env file
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Define the contact schema
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  attachments: [String]
});

// Create the Contact model
const Contact = mongoose.model('Contact', contactSchema);

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const upload = multer({ storage });

// Define the route to handle form submissions
app.post('/jessie-portfolio/api/contact', upload.fields([
  { name: 'attachment1', maxCount: 1 },
  { name: 'attachment2', maxCount: 1 },
  { name: 'attachment3', maxCount: 1 }
]), async (req, res) => {
  const { name, email, message } = req.body;
  const attachments = [];
  
  if (req.files.attachment1) attachments.push(req.files.attachment1[0].path);
  if (req.files.attachment2) attachments.push(req.files.attachment2[0].path);
  if (req.files.attachment3) attachments.push(req.files.attachment3[0].path);

  const contact = new Contact({ name, email, message, attachments });
  try {
    await contact.save();
    res.status(200).send('Message saved!');
  } catch (error) {
    res.status(500).send('Something went wrong, please try again later');
  }
});

// Define the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
