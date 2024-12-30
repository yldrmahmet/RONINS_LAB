// src/components/sections/ContactSection.jsx
import React from 'react';
import CultureBox from '../CultureBox';

const ContactSection = () => {
    return (
        <div id='contact' className="container mx-auto px-4 md:px-8 mt-32">
            <div className="text-center mb-24">
                <h2 className="text-4xl font-bold text-[#C62127] mb-12 md:mb-24">Contact Us</h2>
                <div className="flex flex-col md:flex-row md:justify-center items-center gap-6 md:gap-12">
                    <CultureBox
                        image="/germany.png"
                        title="403 Street, Avenue, NewYork USA."
                    />
                    <CultureBox
                        image="/tr.png"
                        title="403 Street, Avenue, NewYork USA."
                    />
                    <CultureBox
                        image="/mail.png"
                        title="hello@roninslab.xyz"
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactSection;