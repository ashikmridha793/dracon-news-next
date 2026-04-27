import React from 'react';

const loading = () => {
    return (
        <div className = 'flex h-[85vh] items-center justify-center'>
            News by caregory loadin
            <span className="loading loading-spinner text-error"></span>
        </div>
    );
};

export default loading;