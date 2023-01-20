import React from "react";
import "../styles/App.css";
import { useParams } from "react-router-dom";
import { useState } from "react";

const AddAnswer = () => {
  const [answerText, setAnswerText] = useState("");
  // const { addAnswer } = useContext(QuestionsContext);
  const [questionId, setQuestionId] = useState("");
  const [answer, setAnswer] = useState("");

  const questions = JSON.parse(localStorage.getItem("questions") || "[]");

  const handleQuestionChange = (e) => {
    setQuestionId(e.target.value);
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Find the selected question
    // Fetch the questions from local storage
    let questions = JSON.parse(localStorage.getItem("questions"));
    // Find the selected question
    let selectedQuestion = questions.find((q) => q.id === parseInt(questionId));
    // if the question doesn't have the answers array, we create it
    if (!selectedQuestion.answers) selectedQuestion.answers = [];
    // Add the answer to the selected question
    selectedQuestion.answers.push(answer);
    // Store the updated questions in local storage
    localStorage.setItem("questions", JSON.stringify(questions));
    // Clear the input fields
    setQuestionId("");
    setAnswer("");
  };

  return (
    <div className="linkpage">
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
          <input
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
          <button type="submit">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddAnswer;
