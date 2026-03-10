import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSongs } from '../context/SongsContext';

const SongList = () => {
    const { songs } = useSongs();

    // Ensure newest songs are first
    const sortedSongs = useMemo(() => {
        return [...songs].sort((a, b) => new Date(b.date) - new Date(a.date));
    }, [songs]);

    return (
        <div style={{ marginTop: '80px', maxWidth: '800px', margin: '80px auto 0 auto' }}>
            <h3 style={{
                borderBottom: '1px solid rgba(255,255,255,0.1)',
                paddingBottom: '20px',
                marginBottom: '40px',
                color: 'var(--text-secondary)',
                fontSize: '0.9rem',
                textTransform: 'uppercase',
                letterSpacing: '3px',
                textAlign: 'center',
                opacity: 0.8
            }}>
                All Vibes
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {sortedSongs.map(song => (
                    <Link to={`/song/${song.id}`} key={song.id} style={{ textDecoration: 'none' }}>
                        <div
                            className="song-item"
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: '25px 30px',
                                background: 'rgba(255,255,255,0.02)',
                                borderRadius: '12px',
                                border: '1px solid rgba(255,255,255,0.03)',
                                transition: 'all 0.4s ease',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                                e.currentTarget.style.borderColor = 'rgba(138, 43, 226, 0.3)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.03)';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                                <span style={{
                                    fontSize: '1.2rem',
                                    fontWeight: '500',
                                    letterSpacing: '0.5px',
                                    color: 'var(--text-primary)'
                                }}>
                                    {song.title}
                                </span>
                                {/* Optional mood placeholder if available, else just title styling */}
                            </div>

                            <span style={{
                                fontSize: '0.85rem',
                                color: 'var(--text-secondary)',
                                opacity: 0.6,
                                letterSpacing: '1px',
                                fontFamily: 'monospace' // stylistic choice for date
                            }}>
                                {song.date}
                            </span>
                        </div>
                    </Link>
                ))}
                {sortedSongs.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-secondary)' }}>
                        No vibes recorded yet.
                    </div>
                )}
            </div>
        </div>
    );
};

export default SongList;
