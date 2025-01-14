import React from 'react';

const ContactBox = ({ image, title }) => {
    return (
        <div className="flex flex-col items-center w-64 min-h-[120px] bg-white rounded-2xl py-0 px-8 shadow-sm hover:shadow-md transition-shadow">
            {/* Icon Container */}
            <div className="h-8 flex items-center justify-center mb-2">
                <img src={image} alt={title} className="h-6 w-6" />
            </div>

            {/* Title Container */}
            <div className="flex items-center justify-center">
                <h4 className="text-black font-semibold text-base text-center">{title}</h4>
            </div>
        </div>
    );
};

export default ContactBox;