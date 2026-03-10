import React from 'react';

const Soundwave = () => {
    return (
        <div className="soundwave" style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
            <span style={{ animationDelay: '0.1s' }}></span>
            <span style={{ animationDelay: '0.3s' }}></span>
            <span style={{ animationDelay: '0.5s' }}></span>
            <span style={{ animationDelay: '0.2s' }}></span>
            <span style={{ animationDelay: '0.4s' }}></span>
        </div>
    );
};

export default Soundwave;
