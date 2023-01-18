import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom';

const Header = () => {

    // const history = useHistory();

    // const handleQuestion = () => {
    //     console.log("questions clicked");
    //     // history.push('./AddQuestion')
    // }

    // const handleAnswer = () => {
    //     console.log("Answers clicked");
    //     // history.push('./AddAnswer')
    // }

    return (
        <div id='header'>
            <Search />
            {/* <button onClick={handleQuestion}>Add Question</button> */}
            {/* <button onClick={handleAnswer}>Add Answer</button> */}
            <ul className='nav-links'>
                <Link to='/AddQuestion'>
                    <li>Add Question</li>
                </Link>
                <Link to='/AddAnswer'>
                    <li>Add Answer</li>
                </Link>

            </ul>
        </div>
    )
}

export default Header