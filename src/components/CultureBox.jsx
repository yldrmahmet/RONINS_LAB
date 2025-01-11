import React from 'react';

const CultureBox = ({ image, title, description = " " }) => {
    return (
        <div className="flex flex-col items-center justify-center w-64 h-64 bg-white rounded-2xl p-4 pt-0 relative z-10">
            <div className="mb-4">
                <img src={image} alt={title} className="h-5 w-5" />
            </div>
            <h4 className="text-black font-bold text-lg mb-3 text-center">{title}</h4>
            <p className="text-gray-400 text-sm text-center">{description}</p>
        </div>
    );
};

export default CultureBox;