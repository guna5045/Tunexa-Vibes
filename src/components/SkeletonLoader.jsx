import React from 'react';

const SkeletonLoader = ({ type = 'text', height, width, style }) => {
    const baseStyle = {
        height: height || '20px',
        width: width || '100%',
        marginBottom: '10px',
        ...style
    };

    if (type === 'card') {
        return (
            <div className="skeleton" style={{
                height: '300px',
                width: '100%',
                borderRadius: '30px',
                margin: '60px 0',
                ...style
            }} />
        );
    }

    if (type === 'list-item') {
        return (
            <div className="skeleton" style={{
                height: '80px',
                width: '100%',
                borderRadius: '12px',
                marginBottom: '15px',
                ...style
            }} />
        );
    }

    return <div className="skeleton" style={baseStyle} />;
};

export default SkeletonLoader;
