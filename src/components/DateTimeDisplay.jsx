import React, { useState, useEffect } from 'react';

const DateTimeDisplay = () => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    useEffect(() => {
        // Initial set
        setShow(true);

        // Update every minute for calm non-ticking effect
        const timer = setInterval(() => {
            setDate(new Date());
        }, 60000);

        return () => clearInterval(timer);
    }, []);

    const dateOptions = { weekday: 'long', day: 'numeric', month: 'long' };
    const timeOptions = { hour: 'numeric', minute: '2-digit', hour12: true };

    const dateStr = date.toLocaleDateString('en-GB', dateOptions).replace(',', ' ·');
    const timeStr = date.toLocaleTimeString('en-US', timeOptions);

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end', // Align right or center depending on placement
            opacity: show ? 1 : 0,
            transition: 'opacity 2s ease',
            fontFamily: 'var(--font-primary)', // Assuming user wants premium font
            color: 'var(--text-secondary)',
            textShadow: '0 0 20px rgba(138, 43, 226, 0.1)', // Subtle glow
            cursor: 'default',
            userSelect: 'none'
        }}>
            <div style={{
                fontSize: '0.85rem',
                letterSpacing: '1px',
                fontWeight: '300',
                textTransform: 'uppercase',
                marginBottom: '4px'
            }}>
                {dateStr}
            </div>
            <div style={{
                fontSize: '1.2rem', // Slightly larger for time
                fontWeight: '200',
                letterSpacing: '2px',
                color: 'var(--text-primary)',
                opacity: 0.9
            }}>
                {timeStr}
            </div>
        </div>
    );
};

export default DateTimeDisplay;
