const express = require("express");
const router = express.Router();
const Student = require("../models/student");

//setup get method
router.get("/student", (req, res) => {
  Student.find({}).then(student => {
    res.send(student);
  });
});

//setup post method
router.post("/student", (req, res) => {
  Student.create(req.body).then(student => {
    res.send(student);
  });
});

//setup put method
router.put("/student/:id", (req, res) => {
  Student.findByIdAndUpdate({ _id: req.params.id }, req.body).then(() => {
    Student.findOne({ _id: req.params.id }).then(student => {
      res.send(student);
    });
  });
});

//setup delete method
router.delete("/student/:id", (req, res) => {
  Student.findByIdAndRemove({ _id: req.params.id }).then(student => {
    res.send(student);
  });
});

module.exports = router;
