import React from 'react';
import Header from './Header';
// import { Route } from 'react-router-dom';
import Search from './Search';
import AddAnswer from './AddAnswer';
import { useContext } from 'react';
import { QuestionsContext } from './QuestionsContext';
import { useState } from 'react';

const MainPage = () => {
    // const [questions, setQuestions] = useState([]);
    const { questions } = useContext(QuestionsContext);
    const [search, setSearch] = useState('');

    // useEffect(() => {
    //     // Fetch list of questions and answers here
    // }, []);

    const filteredQuestions = questions.filter(question =>
        question.text.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className='mainPage'>
            <input
                type='text'
                placeholder='Search'
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <ul>
                {filteredQuestions.map(question => (
                    <li key={question.id}>
                        <h2>{question.text}</h2>
                        <p>{question.answer}</p>
                    </li>
                ))}
            </ul>

            Homepage
        </div>
    )
}

export default MainPage;