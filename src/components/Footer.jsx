import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '40px 20px',
            marginTop: 'auto',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            color: 'var(--text-secondary)',
            fontSize: '0.8rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '15px',
            position: 'relative',
            zIndex: 10
        }}>
            <div style={{ marginBottom: '10px' }}>
                &copy; {new Date().getFullYear()} Tunexa Vibes. All rights reserved.
            </div>

            {/* Busted Memes Section */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>
                <span style={{ opacity: 0.5, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Busted Memes</span>
                <a href="https://www.instagram.com/bustedmemes911?igsh=MWRkcWJxdjRzeXRxNw==" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', transition: 'transform 0.2s' }}>
                    {/* YouTube Icon SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
                        <path d="m10 15 5-3-5-3z"></path>
                    </svg>
                </a>
                <a href="https://www.instagram.com/bustedmemes911?igsh=MWRkcWJxdjRzeXRxNw==" target="_blank" rel="noopener noreferrer" style={{ color: '#fff', transition: 'transform 0.2s' }}>
                    {/* Instagram Icon SVG */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                </a>
            </div>

            <div style={{ marginTop: '20px' }}>
                <a href="/admin/login" style={{
                    color: 'var(--text-secondary)',
                    textDecoration: 'none',
                    fontSize: '0.7rem',
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    transition: 'all 0.2s',
                    background: 'rgba(255,255,255,0.02)',
                    display: 'inline-block'
                }}
                    onMouseEnter={e => {
                        e.target.style.background = 'rgba(255,255,255,0.1)';
                        e.target.style.borderColor = 'rgba(255,255,255,0.3)';
                    }}
                    onMouseLeave={e => {
                        e.target.style.background = 'rgba(255,255,255,0.02)';
                        e.target.style.borderColor = 'rgba(255,255,255,0.1)';
                    }}
                >
                    Admin
                </a>
            </div>
        </footer>
    );
};

export default Footer;
