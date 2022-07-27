import React from 'react';

function Arrow({fill = 'white', height = 201}) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height={height} viewBox={`0 0 12 ${height}`} fill="none">
            <path
                d={`M5.99999 ${height}L11.7735 ${height - 10}L0.226489 ${height - 10}L5.99999 ${height}ZM5 -4.27598e-08L4.99999 ${height - 9}L6.99999 ${height - 9}L7 4.27598e-08L5 -4.27598e-08Z`}
                fill={fill}/>
        </svg>
    );
}

export default Arrow;