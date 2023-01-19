import React, { useState } from 'react'
import Search from './Search'
import { Link } from 'react-router-dom';
import MainPage from './MainPage';
import DisplayPage from './DisplayPage';

const Header = () => {

    const [result, setResult] = useState([]);
    const [questions, setQuestions] = useState([]);


    const [query, setQuery] = useState('');


    return (
        <div id='header'>
            <Search questions={questions} setResult={setResult} result={result} />
            <ul className='nav-links'>
                <Link to="/DisplayPage">
                    <button>Search</button>
                </Link>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to='/AddQuestion'>
                    <li>Add Question</li>
                </Link>
                <Link to='/AddAnswer'>
                    <li>Add Answer</li>
                </Link>
                <Link to='/Login'>
                    <li>Login</li>
                </Link>
            </ul>
        </div>
    )
}

export default Header;