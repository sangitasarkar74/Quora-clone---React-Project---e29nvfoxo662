import React, { createContext, useState } from 'react';

export const QuestionsContext = createContext();

export const QuestionsProvider = props => {
    const [questions, setQuestions] = useState([]);

    const addQuestion = question => {
        setQuestions([...questions, question]);
    };

    const addAnswer = (questionId, answer) => {
        const updatedQuestions = questions.map(question => {
            if (question.id === questionId) {
                return { ...question, answer };
            }
            return question;
        });
        setQuestions(updatedQuestions);
    };

    return (
        <QuestionsContext.Provider value={{ questions, addQuestion, addAnswer }}>
            {props.children}
        </QuestionsContext.Provider>
    );
};
export default QuestionsProvider;