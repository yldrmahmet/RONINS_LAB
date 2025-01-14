import React from 'react';

const CultureBox = ({ image, title, description = " " }) => {
    return (
        <div className="flex flex-col items-center w-64 min-h-[215px] bg-white rounded-2xl p-4 relative z-10">
            {/* Icon Container - Sabit yükseklik */}
            <div className="h-12 flex items-center justify-center">
                <img src={image} alt={title} className="h-5 w-5" />
            </div>

            {/* Title Container - Sabit yükseklik */}
            <div className="h-12 flex items-center justify-center">
                <h4 className="text-black font-bold text-lg text-center">{title}</h4>
            </div>

            {/* Description Container - Minimum yükseklik */}
            <div className="min-h-[48px] flex items-center justify-center">
                <p className="text-gray-400 text-sm text-center">{description}</p>
            </div>
        </div>
    );
};

export default CultureBox;