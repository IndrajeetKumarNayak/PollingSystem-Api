const { create } = require("../models/questionSchema");
const Question = require("../models/questionSchema");

// create question controller
module.exports.createQuestion = async (req, resp) => {
  console.log("create question");

  try {
    let question = await Question.create(req.body);
    if (question) {
      return resp.json({
        question,
        data: { message: "question created successfully" },
      });
    } else {
      return res.status(500).json({
        message1: "Internal server error",
      });
    }
  } catch (err) {
    console.log(err);
    return;
  }
};

// view question controller
module.exports.viewQuestion = async (req, resp) => {
  console.log("view question");
  try {
    let question = await Question.find();
    return resp.json({ question });
  } catch (err) {
    console.log(err);
    return;
  }
};

// delete question
module.exports.deleteQuestion = async (req, resp) => {
  console.log("delete question");

  try {
    let question = await Question.deleteMany();
    return resp.json({
      message: "all question deleted",
    });
  } catch (err) {
    console.log(err);
  }
};
