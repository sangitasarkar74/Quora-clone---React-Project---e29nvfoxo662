import React from "react";
import "../styles/App.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddAnswer = () => {
  const [answerText, setAnswerText] = useState("");
  const [questionId, setQuestionId] = useState("");
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");

  const questions = JSON.parse(localStorage.getItem("questions") || "[]");

  const handleQuestionChange = (e) => {
    setQuestionId(e.target.value);
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const history = useHistory();

  const handleCancel = () => {
    history.push("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let questions = JSON.parse(localStorage.getItem("questions"));

    let selectedQuestion = questions.find((q) => q.id === parseInt(questionId));

    if (!selectedQuestion.answers) selectedQuestion.answers = [];
    selectedQuestion.answers.push(answer);

    localStorage.setItem("questions", JSON.stringify(questions));
    setMessage("Answer added successfully! ");
    setQuestionId("");
    setAnswer("");
    // history.push("/");
  };

  return (
    <div className="linkpage">
      {message && (
        <div className="message">
          {message}
          <a href="#" onClick={() => history.push("/")}>
            Check your answer here..
          </a>
        </div>
      )}
      <form className="addAnswer">
        <label>
          Select a question:
          <select value={questionId} onChange={handleQuestionChange}>
            <option value="" disabled>
              Select a question
            </option>
            {questions.map((q) => (
              <option key={q.id} value={q.id}>
                {q.text}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Enter an answer:
          <input className="answerinput"
            type="text"
            value={answer}
            onChange={handleAnswerChange}
            placeholder="Enter an answer"
          />
        </label>
        <br />
        <div id="buttoncontainer">
          <button type="submit" onClick={handleSubmit}>
            Add Answer
          </button>
          <button type="submit" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAnswer;
