import React from 'react';

const BuyMeCoffee = () => {
    return (
        <a
            href="https://buymeacoffee.com/infinityedr"
            target="_blank"
            rel="noopener noreferrer"
            className="buy-coffee"
            style={{
                position: 'fixed',
                bottom: '30px',
                right: '30px',
                zIndex: 1000,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                maxWidth: '90%',
            }}
        >
            <div style={{
                width: '30px',
                height: '30px',
                background: '#fff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}>
                <span role="img" aria-label="coffee" style={{ fontSize: '16px' }}>☕</span>
            </div>
            <span style={{
                color: 'inherit',
                fontWeight: '600',
                fontSize: '0.9rem',
                whiteSpace: 'nowrap'
            }}>
                Buy Me a Coffee
            </span>
        </a>
    );
};

export default BuyMeCoffee;
