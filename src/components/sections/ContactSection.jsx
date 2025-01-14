import React from 'react';
import ContactBox from '../ContactBox';

const ContactSection = () => {
    return (
        <div id='contact' className="container mx-auto px-4 md:px-8 mt-32 md:mt-12">
            <div className="text-center mb-0 md:mb-16">
                <h2 className="text-4xl font-bold text-black mb-12 md:mb-16">Contact Us</h2>
                <div className="flex flex-col md:flex-row md:justify-center items-center gap-6 md:gap-12">
                    <ContactBox
                        image="/germany.png"
                        title="Bruckstraße 1170734 Fellbach"
                    />
                    <ContactBox
                        image="/mail.png"
                        title="hello@roninslab.xyz"
                    />
                </div>
            </div>
        </div>
    );
};

export default ContactSection;