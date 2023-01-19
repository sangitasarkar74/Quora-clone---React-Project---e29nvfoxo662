
import React, { useState } from 'react';
import '../styles/App.css';



const DisplayPage = () => {
    const [questions, setQuestions] = useState([]);
    const [query, setQuery] = useState('');
    // const [result, setResult] = useState([]);  



    return (
        <div id="mainpage">

            <ul>
                {questions.filter((val) => {
                    console.log(val);
                    if (query == "") {
                        return val
                    } else if (val.questions.toLowerCase().includes(query.toLowerCase())) {
                        return val;
                    }
                }).map((val, key) => {
                    console.log(val);
                    return (
                        <div className='mainPage' key={key}>
                            <p>{val.questions}</p>
                            <p>{val.answers}</p>
                        </div>
                    )

                })}
            </ul>
            {/* <ul>
                {(result.query === '' ? "" : result.list.map(post => {
                    return <li key={post.question}>{post.question}</li>
                }))}
            </ul> */}
        </div >
    );
}
export default DisplayPage;