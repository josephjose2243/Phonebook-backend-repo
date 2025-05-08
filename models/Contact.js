const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true, // or optional based on your logic
  },
  phones: [
    {
      number: {
        type: String,
        required: true,
      },
    },
  ],
  email: String,
  company: String,
  avatar: String,
  trashed: {
    type: Boolean,
    default: false,
  },
});

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;
