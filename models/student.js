const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name Field is required"]
  },
  mobile: {
    type: String,
    required: [true, "Mobile is required"]
  },
  email: {
    type: String
  }
});

const Student = mongoose.model("student", studentSchema);
module.exports = Student;
