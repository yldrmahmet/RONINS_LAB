import React from 'react';

const CultureBox = ({ image, title, description = " " }) => {
    return (
        <div className="flex flex-col items-center w-64 bg-white rounded-2xl p-4 mt-8 relative z-10">
            <div className="mb-4">
                <img src={image} alt={title} className="h-8 w-8" />
            </div>
            <h4 className="text-black font-semibold text-xl mb-3 text-center">{title}</h4>
            <p className="text-gray-600 text-sm text-center">{description}</p>
        </div>
    );
};

export default CultureBox;