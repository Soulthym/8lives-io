import React from 'react';

function Close({fill = 'white'}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M10 7L31 32.5" stroke={fill} strokeWidth="2" strokeLinecap="round"/>
            <path d="M31 7L10 32.5" stroke={fill} strokeWidth="2" strokeLinecap="round"/>
        </svg>
    );
}

export default Close;