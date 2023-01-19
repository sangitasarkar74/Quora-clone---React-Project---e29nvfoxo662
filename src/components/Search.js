import React, { useState } from 'react';
import '../styles/App.css';

function Search({ questions, setResult, result }) {
    const [query, setQuery] = useState('');
    // const [result, setResult] = useState([]);

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const searchedData = questions.filter(item => item.questions.toLowerCase().includes(query.toLowerCase()));
    //     setResult(searchedData);
    //     console.log(searchedData)
    //     console.log(e)
    // }

    const onChangeHandle = (e) => {
        setQuery(e.target.value)
        // const results = questions.filter(post => {
        //     if (e.target.value === "") return questions
        //     return post.question.toLowerCase().includes(e.target.value.toLowerCase())
        // })
        // setResult({
        //     query: e.target.value,
        //     list: results
        // })

    }
    return (
        <div id="mainpage">
            {/* <form id="form" onSubmit={handleSubmit}> */}
            <input
                type="text"
                id='search'
                value={query}
                onChange={onChangeHandle}
            />
            {/* <button id='search_button' type="submit">Search</button>
            </form>
            {console.log(result)}
            <ul>
                {result.length !== 0 &&
                    result.map((item, index) => (
                        <div key={index}>
                            <h3>{item.question}</h3>
                            <ul>
                                {item.answers.map((a, index) => (
                                    <li key={index}>{a}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
            </ul> */}
            {/* <ul>
                {(result.query === '' ? "" : result.list.map(post => {
                    return <li key={post.question}>{post.question}</li>
                }))}
            </ul> */}
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
        </div >
    );
}
export default Search;