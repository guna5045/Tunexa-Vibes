import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';

const Header = () => {
    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 40px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            backgroundColor: 'rgba(5, 5, 5, 0.8)', // Darker, more premium
            backdropFilter: 'blur(20px)',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            transition: 'all 0.3s ease'
        }}>
            <div className="logo-glow" style={{
                fontSize: '1.5rem',
                fontWeight: '300', // Lighter weight for premium feel
                letterSpacing: '2px',
                textTransform: 'uppercase',
                background: 'linear-gradient(45deg, #fff, #a0a0a0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                cursor: 'pointer'
            }}>
                Tunexa Vibes
            </div>

            <DateTimeDisplay />
        </header>
    );
};

export default Header;
