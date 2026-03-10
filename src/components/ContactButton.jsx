import React from 'react';

const ContactButton = () => {
    return (
        <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=iamgunashekhar555@gmail.com"
            title="Contact Collaboration"
            style={{
                position: 'fixed',
                bottom: '30px',
                left: '30px',
                width: '50px',
                height: '50px',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(5px)',
                color: '#fff',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                zIndex: 1000,
                transition: 'transform 0.3s ease, background 0.3s ease',
                border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
        >
            {/* Mail Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
        </a>
    );
};

export default ContactButton;
