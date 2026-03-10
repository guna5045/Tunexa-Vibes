import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });

            if (error) throw error;

            if (data.user) {
                localStorage.setItem('tunexa_auth', 'true'); // Keep this for now or rely strictly on session
                navigate('/admin/dashboard');
            }
        } catch (error) {
            alert('Login Failed: ' + error.message);
        }
    };

    return (
        <div className="fade-in" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '60vh'
        }}>
            <div style={{
                background: 'var(--bg-card)',
                padding: '40px',
                borderRadius: '20px',
                border: '1px solid rgba(255,255,255,0.05)',
                boxShadow: '0 0 50px rgba(138, 43, 226, 0.15)', // Soft glow
                width: '100%',
                maxWidth: '400px',
                textAlign: 'center'
            }}>
                <h2 style={{ marginBottom: '10px', fontWeight: 'normal', letterSpacing: '1px', color: '#fff' }}>Admin Login</h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', marginBottom: '30px' }}>Authorized access only</p>

                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        style={{
                            padding: '15px',
                            borderRadius: '10px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            background: 'rgba(0,0,0,0.3)',
                            color: '#fff',
                            outline: 'none',
                            textAlign: 'center',
                            fontSize: '1rem'
                        }}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        style={{
                            padding: '15px',
                            borderRadius: '10px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            background: 'rgba(0,0,0,0.3)',
                            color: '#fff',
                            outline: 'none',
                            textAlign: 'center',
                            fontSize: '1rem'
                        }}
                    />
                    <button type="submit" style={{
                        padding: '15px',
                        background: 'var(--text-primary)',
                        color: '#000',
                        border: 'none',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        transition: 'transform 0.2s',
                        fontSize: '0.9rem',
                        marginTop: '10px'
                    }}>
                        LOGIN
                    </button>
                </form>

                <button
                    onClick={() => navigate('/')}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--text-secondary)',
                        fontSize: '0.9rem',
                        cursor: 'pointer',
                        marginTop: '30px',
                        textDecoration: 'none',
                        opacity: 0.6,
                        transition: 'opacity 0.3s',
                        letterSpacing: '1px'
                    }}
                    onMouseEnter={e => e.target.style.opacity = 1}
                    onMouseLeave={e => e.target.style.opacity = 0.6}
                >
                    &larr; Back to Website
                </button>
            </div>
        </div>
    );
};

export default AdminLogin;
