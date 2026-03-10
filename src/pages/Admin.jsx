import React, { useState } from 'react';
import { useSongs } from '../context/SongsContext';

const Admin = () => {
    const { songs, addSong, deleteSong, setToday, todaySongId } = useSongs();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email, setEmail] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === 'admin123') {
            setIsAuthenticated(true);
        } else {
            alert('Invalid Password');
        }
    };

    const handleAdd = (e) => {
        e.preventDefault();
        if (!newSong.title) return;
        addSong(newSong);
        setNewSong({ title: '', lyrics: '', youtubeLink: '', instagramLink: '' });
    };

    if (!isAuthenticated) {
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
                    boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                    width: '100%',
                    maxWidth: '350px',
                    textAlign: 'center'
                }}>
                    <h2 style={{ marginBottom: '30px', fontWeight: 'normal', letterSpacing: '1px' }}>Admin Access</h2>
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
                            fontSize: '0.9rem'
                        }}>
                            ENTER
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div style={{ paddingBottom: '50px', maxWidth: '800px', margin: '0 auto' }} className="fade-in">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                <h2 style={{ fontWeight: 'normal', letterSpacing: '2px' }}>Admin Dashboard</h2>
                <button onClick={() => setIsAuthenticated(false)} style={{ background: 'transparent', border: '1px solid #333', color: '#666', padding: '5px 15px', borderRadius: '4px', cursor: 'pointer' }}>Logout</button>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '30px', borderRadius: '15px', marginBottom: '40px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <h3 style={{ marginBottom: '20px', color: 'var(--accent-glow)' }}>Add New Song</h3>
                <form onSubmit={handleAdd} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                        <input
                            type="text"
                            placeholder="Song Title"
                            value={newSong.title}
                            onChange={e => setNewSong({ ...newSong, title: e.target.value })}
                            style={{ padding: '12px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px', outline: 'none' }}
                        />
                        <input
                            type="date"
                            style={{ padding: '12px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px', outline: 'none' }}
                        />
                    </div>
                    <textarea
                        placeholder="Lyrics"
                        value={newSong.lyrics}
                        onChange={e => setNewSong({ ...newSong, lyrics: e.target.value })}
                        rows="8"
                        style={{ padding: '12px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px', outline: 'none', resize: 'vertical' }}
                    />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                        <input
                            type="text"
                            placeholder="YouTube Link"
                            value={newSong.youtubeLink}
                            onChange={e => setNewSong({ ...newSong, youtubeLink: e.target.value })}
                            style={{ padding: '12px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px', outline: 'none' }}
                        />
                        <input
                            type="text"
                            placeholder="Instagram Link"
                            value={newSong.instagramLink}
                            onChange={e => setNewSong({ ...newSong, instagramLink: e.target.value })}
                            style={{ padding: '12px', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '8px', outline: 'none' }}
                        />
                    </div>
                    <button type="submit" style={{ padding: '15px', background: 'var(--accent-gradient)', border: 'none', color: '#fff', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', marginTop: '10px' }}>
                        Save Song
                    </button>
                </form>
            </div>

            <h3 style={{ marginBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '10px' }}>Manage Songs</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {songs.map(song => (
                    <div key={song.id} style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        background: 'rgba(255,255,255,0.02)', padding: '20px', borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.03)',
                        transition: 'background 0.2s'
                    }}>
                        <div>
                            <div style={{ fontWeight: '500', fontSize: '1.1rem', marginBottom: '5px' }}>
                                {song.title}
                                {song.id === todaySongId && <span style={{ marginLeft: '10px', fontSize: '0.7rem', background: 'var(--accent-glow)', color: '#000', padding: '2px 8px', borderRadius: '10px', fontWeight: 'bold' }}>TODAY</span>}
                            </div>
                            <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{song.date}</div>
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button style={{ padding: '8px 15px', background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                                Edit
                            </button>
                            <button onClick={() => deleteSong(song.id)} style={{ padding: '8px 15px', background: 'rgba(255, 50, 50, 0.2)', color: '#ffaaaa', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Admin;
