import React, { useState } from 'react';


const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // check if the password and confirm password match
        if (password !== confirmPassword) {
            setError('Passwords do not match');
        } else {
            // register the user in the database            
            const users = JSON.parse(localStorage.getItem('users')) || [];
            users.push({ username, password });
            localStorage.setItem('users', JSON.stringify(users));
            window.location.href = '/';
        }
    }

    return (
        <div className='linkpage'>
            <div className="register-page">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={e =>
                            setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password"
                    />
                    <button type="submit">Register</button>
                    {error && <p className="error">{error}</p>}
                </form>
            </div>
        </div>
    );
}

export default Register;




