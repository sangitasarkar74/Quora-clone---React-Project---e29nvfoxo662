import React from "react";
import "../styles/App.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddQuestion = () => {
  const [question, setQuestion] = useState("");

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

    // Clear the input field
    setQuestion("");
  };

  return (
    <div className="linkpage">
      <form className="addquestion">
        <label>Enter a question:</label>
        <input
          className="inputs"
          type="text"
          value={question}
          onChange={handleChange}
          placeholder="Enter a question"
        />

        <button type="submit" onClick={handleSubmit}>
          Add Question
        </button>
        <button type="submit" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddQuestion;
