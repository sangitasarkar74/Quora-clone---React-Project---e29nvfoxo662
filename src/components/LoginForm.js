import React, { useState } from 'react';
import axios from 'axios';

function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);
    const [name, setName] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            if (isRegistering) {
                const response = await axios.post('/api/register', { name, email, password });
                // handle successful registration here
            } else {
                const response = await axios.post('/api/login', { email, password });
                // handle successful login here
            }
        } catch (err) {
            setError('Incorrect email or password');
        } finally {
            setIsLoading(false);
        }
    };

    const handleRegister = () => {
        setIsRegistering(true);
    }

    return (
        <div>
            {isRegistering ? (
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
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
                    <button type="submit" disabled={isLoading}>
                        Register
                    </button>
                    <button onClick={() => setIsRegistering(false)}>
                        Login
                    </button>
                </form>
            ) : (
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
                    <button type="submit" disabled={isLoading}>
                        Login
                    </button>
                    <button onClick={handleRegister}>
                        Register
                    </button>
                </form>
            )}
        </div>
    );
}
export default LoginForm
