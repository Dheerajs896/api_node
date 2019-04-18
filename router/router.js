const express = require("express");
const router = express.Router();
const Student = require("../models/student");

//setup get method
router.get("/student", (req, res) => {
  res.send({ type: "Get" });
});

//setup post method
router.post("/student", (req, res) => {
  Student.create(req.body).then(student => {
    res.send(student);
  });
});

//setup put method
router.put("/student:id", (req, res) => {
  res.send({ type: "Put" });
});

//setup delete method
router.delete("/student:id", (req, res) => {
  res.send({ type: "Delete" });
});

module.exports = router;
