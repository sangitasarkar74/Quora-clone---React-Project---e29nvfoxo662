import React, { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');

        if (email === 'test@example.com' && password === 'testpassword') {
            localStorage.setItem('email', email);
        } else {
            setError('Incorrect email or password');
        }
    };
    const history = useHistory();

    useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
            history.push('/Route');
        }
    }, []);

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            {error && <p>{error}</p>}
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;