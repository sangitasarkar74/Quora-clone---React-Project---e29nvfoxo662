import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // check if the username and password match a user in the database
        // if (username === 'admin' && password === 'password') {
        //     localStorage.setItem('loggedIn', true);
        //     window.location.href = '/';
        // } else {
        //     setError('Invalid username or password');
        // }
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.username === username && user.password === password);
        if (user) {
            localStorage.setItem('loggedIn', true);
            window.location.href = '/';
        } else {
            setError('Invalid username or password');
        }
    }

    return (
        <div className='linkpage'>
            <div className="login-page">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                            placeholder="Username"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </div>
                    <button type="submit">Login</button>
                    {error && <p className="error">{error}</p>}
                </form>
                <div id='register'>
                    <Link to='/register'>Not a member? Register here</Link>
                </div>
            </div>
        </div>
    );
}

export default Login;