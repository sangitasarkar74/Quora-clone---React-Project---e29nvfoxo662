import Header from "./Header";
import Search from "./Search";
import AddAnswer from "./AddAnswer";
import React, { useEffect, useState } from "react";

const MainPage = ({ query }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(JSON.parse(localStorage.getItem("questions")) || []);
  }, []);
  console.log("'''", query);
  let questionsToDisplay = questions;
  if (query.trim() !== "") {
    questionsToDisplay = questions.filter((item) =>
      item.text.toLowerCase().includes(query.toLowerCase())
    );
  }

  return (
    <div className="mainPage">
      <div className="questionAnswerCard">
        {questionsToDisplay.map((q) => {
          console.log("query", query);
          console.log("Filtered item: ", q);
          return (
            <div key={q.id} className="card">
              <ul>
                <h3>{q.text}</h3>
              </ul>
              <div>
                <ul>
                  {q.answers &&
                    q.answers.map((a, index) => <li key={index}>{a}</li>)}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
      <div className="questionPage">
        {questions.map((question) => (
          <div key={question.id} className="question-card">
            <ul>
              <li>{question.text}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
