import React from 'react';
import { Link } from 'react-router-dom';
import Soundwave from './Soundwave';

const Spotlight = ({ song }) => {
    // Graceful Placeholder if no song exists
    if (!song) {
        return (
            <div style={{ margin: '60px 0', textAlign: 'center', padding: '60px 20px', border: '1px dashed rgba(255,255,255,0.1)', borderRadius: '20px' }} className="fade-in">
                <h2 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', fontWeight: '300' }}>No Vibe Selected for Today</h2>
                <p style={{ opacity: 0.6, fontSize: '0.9rem' }}>Check back later or explore the archives.</p>
            </div>
        );
    }

    return (
        <div style={{ margin: '60px 0', textAlign: 'center' }} className="fade-in">
            <h2 style={{
                fontSize: '1rem',
                color: 'var(--accent-glow)',
                marginBottom: '30px',
                fontWeight: 'normal',
                letterSpacing: '4px',
                textTransform: 'uppercase',
                opacity: 0.8
            }}>Today's Vibe</h2>

            <Link to={`/song/${song.id}`} style={{ display: 'block', textDecoration: 'none', maxWidth: '600px', margin: '0 auto' }}>
                <div 
                    className="vibe-card"
                    style={{
                        background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.95))',
                        padding: '80px 40px',
                        borderRadius: '30px',
                        border: '1px solid rgba(138, 43, 226, 0.2)',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.6), inset 0 0 30px rgba(0,0,0,0.5)',
                        position: 'relative',
                        overflow: 'hidden',
                        cursor: 'pointer'
                    }}
                >
                    {/* Animated Glow Gradient Background */}
                    <div style={{
                        position: 'absolute',
                        top: '-50%',
                        left: '-50%',
                        width: '200%',
                        height: '200%',
                        background: 'radial-gradient(circle at center, rgba(138, 43, 226, 0.08) 0%, transparent 50%)',
                        pointerEvents: 'none',
                        animation: 'shimmer 10s linear infinite'
                    }}></div>

                    <h1 style={{
                        fontSize: '3.5rem',
                        margin: '0 0 10px 0',
                        background: 'linear-gradient(to bottom right, #fff, #a0a0a0)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: '300',
                        letterSpacing: '-1px'
                    }}>
                        {song.title}
                    </h1>
                    <p style={{
                        color: 'var(--accent-glow)',
                        fontSize: '1rem',
                        fontStyle: 'italic',
                        opacity: 0.8,
                        marginTop: '10px'
                    }}>
                        Click to feel
                    </p>
                </div>
            </Link>
            <Soundwave />
        </div>
    );
};

export default Spotlight;
