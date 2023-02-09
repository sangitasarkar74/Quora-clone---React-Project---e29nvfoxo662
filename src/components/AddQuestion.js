import React from "react";
import "../styles/App.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddQuestion = () => {
  const [question, setQuestion] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setQuestion(e.target.value);
  };

  const history = useHistory();

  const handleCancel = () => {
    history.push("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let questions = JSON.parse(localStorage.getItem("questions")) || [];

    let newQuestion = {
      id: questions.length + 1,
      text: question,
    };
    // Store the question in local storage
    localStorage.setItem(
      "questions",
      JSON.stringify([...questions, newQuestion])
    );
    setMessage("Question added successfully! ");
    console.log("setmessage", setMessage);
    setQuestion("");
    // history.push("/");
  };

  return (
    <div className="linkpage">
      {message && (
        <div className="message">
          {message}
          <a href="#" onClick={() => history.push("/")}>
            Check your question here..
          </a>
        </div>
      )}
      <form className="addquestion">
        <label>Enter a question: </label>
        <input
          className="inputs"
          type="text"
          value={question}
          onChange={handleChange}
          placeholder="Enter a question"
        />
        <div className="question-container">
          <button type="submit" onClick={handleSubmit}>
            Add Question
          </button>
          <button type="submit" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddQuestion;
