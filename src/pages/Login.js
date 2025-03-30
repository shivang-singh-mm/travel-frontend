import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            if (email === "#angel89" && password === "kjnckwh948h989(*ibe") {
                localStorage.setItem('token', "snlkvjskejisjeojeocmc;wm");
                navigate('/dashboard');
            } else {
                setError('Login failed.');
            }
        } catch (err) {
            setError('An error occurred. Please try again later.');
        }
    };

    return (
        <div style={{ backgroundColor: '#f9fafb', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
            <div style={{ width: '100%', maxWidth: '400px', padding: '32px', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', position: 'relative', overflow: 'hidden' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '600', textAlign: 'center', color: 'black' }}>Welcome Back</h2>
                <p style={{ fontSize: '14px', textAlign: 'center', color: '#4b5563', marginTop: '4px' }}>Please log in to continue</p>
                <form
                    style={{ marginTop: '24px' }}
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleLogin();
                    }}
                >
                    <div style={{ marginBottom: '16px' }}>
                        <label htmlFor="name" style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: 'black' }}>Username</label>
                        <input
                            type="name"
                            id="name"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter username"
                            style={{ width: '100%', padding: '12px 16px', marginTop: '8px', color: '#1f2937', backgroundColor: '#f3f4f6', border: '1px solid #d1d5db', borderRadius: '8px', outline: 'none', transition: 'border 0.3s' }}
                        />
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                        <label htmlFor="password" style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: 'black' }}>Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            style={{ width: '100%', padding: '12px 16px', marginTop: '8px', color: '#1f2937', backgroundColor: '#f3f4f6', border: '1px solid #d1d5db', borderRadius: '8px', outline: 'none', transition: 'border 0.3s' }}
                        />
                    </div>
                    {error && <p style={{ color: '#dc2626', fontSize: '14px' }}>{error}</p>}
                    <button
                        type="submit"
                        style={{ width: '100%', padding: '12px 16px', fontWeight: '500', color: 'white', backgroundColor: '#f59e0b', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', transition: 'background-color 0.3s', cursor: 'pointer' }}
                        onMouseOver={(e) => (e.target.style.backgroundColor = '#d97706')}
                        onMouseOut={(e) => (e.target.style.backgroundColor = '#f59e0b')}
                    >
                        Login
                    </button>
                </form>
                {/* <p style={{ marginTop: '16px', fontSize: '14px', textAlign: 'center', color: '#374151' }}>
                    Don’t have an account?{' '}
                    <a href="/signup" style={{ color: '#f59e0b', fontWeight: '600', textDecoration: 'underline' }}>
                        Sign Up
                    </a>
                </p> */}
            </div>
        </div>
    );
}

export default Login;
