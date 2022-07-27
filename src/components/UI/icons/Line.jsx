import React from 'react';

function Line({fill = '#C6C6C6', height = 1000}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="4" height={height} viewBox={`0 0 4 ${height}`} fill="none">
            <path d={`M2 2L1.99998 ${height-2}`} stroke={fill} strokeWidth="3" strokeLinecap="round"/>
        </svg>
    );
}

export default Line;