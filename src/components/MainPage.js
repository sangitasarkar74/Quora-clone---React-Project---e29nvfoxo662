import Header from "./Header";
import Search from "./Search";
import AddAnswer from "./AddAnswer";
import React, { useEffect, useState } from "react";

const MainPage = ({ query }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    setQuestions(JSON.parse(localStorage.getItem("questions")) || []);
  }, []);

  console.log(localStorage.getItem("questions"));
  console.log(",,,,", query);
  console.log("questions in setQuestions:", questions);

  // const filteredQuestions = questions.filter((question) => {
  //   return question.text.toLowerCase().includes(query.toLowerCase());
  // });
  // console.log("questions in setQuestions:", questions);

  return (
    <div className="mainPage">
      <div className="questionAnswerCard">
        {questions.map((q) => (
          <div key={q.id} className="card">
            <ul>
              <li>{q.text}</li>
            </ul>
            <ul>
              {q.answers && q.answers.map((a, index) => <p key={index}>{a}</p>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="questionPage">
        {questions.map((question) => (
          <div key={question.id}>
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
