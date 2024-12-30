import React from 'react';

const PageInfoBox = ({ logo, number, label }) => {
    return (
        <div className="border border-gray-200 flex flex-col items-center w-64 mx-auto md:mx-0 bg-white rounded-2xl p-4 mt-6 mb-6 md:-mt-12 md:mb-0 relative z-10">
            <img src={logo} alt="Logo" className="h-8 w-8 mb-8" />
            <h3 className="text-5xl font-bold text-black mb-2">{number}+</h3>
            <p className="text-gray-600">{label}</p>
        </div>
    );
};

export default PageInfoBox;