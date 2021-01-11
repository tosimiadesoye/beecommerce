const mongoose = require("mongoose");
mongoose.set("debug", true);
const Schema = mongoose.Schema;

const ContactSchema = new Schema(
  {
    name: String,
    email: String,
    message: String,
    date: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const contact = mongoose.model("Contact", ContactSchema, "contact");
module.exports = contact;
