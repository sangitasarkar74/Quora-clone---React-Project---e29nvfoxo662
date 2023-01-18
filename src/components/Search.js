import React, { useState } from 'react';
import data from './data';
import '../styles/App.css';


function Search() {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchedData = data.filter(item => item.question.toLowerCase().includes(query.toLowerCase()));
        setResult(searchedData[0]);
    }
    return (
        <div id="main-search">
            <form id="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    id='search'
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                <button id='search_button' type="submit">Search</button>
            </form>
            {/* <ul>
                {results.map(result => (
                    <div key={result.id}>{result.question}</div>
                ))}
            </ul> */}

            {result && (
                // <div id='searchResult' >
                <div id="search-card" >
                    <h4>{result.question}</h4>
                    <p>{result.answer}</p>
                </div>
                // </div>
            )}
        </div>

    );
}
export default Search;