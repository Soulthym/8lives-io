import React from 'react';

function SteepPoint({fill = '#C6C6C6'}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
            <rect x="11.3135" y="-0.373047" width="16" height="16" rx="2" transform="rotate(45 11.3135 -0.373047)"
                  fill={fill}/>
        </svg>
    );
}

export default SteepPoint;