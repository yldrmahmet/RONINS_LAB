// src/components/sections/WhyChooseUsSection.jsx
import React from 'react';
import CultureBox from '../CultureBox';
import PageInfoBox from '../PageInfoBox';

const WhyChooseUsSection = () => {
    return (
        <div className="bg-[#f1f1f1]">
            <div className="pt-16 md:pt-32 px-4 md:px-40 bg-gradient-to-b from-[#f1f1f1] via-white to-white">
                <div className="max-w-[1200px] mx-auto bg-white rounded-[30px] py-32 flex flex-col items-center shadow-lg overflow-hidden">
                    <p className="text-base text-gray-500 mb-2">Why Choose Us</p>
                    <h2 className="text-4xl font-bold text-[#C62127] mb-36 md:mb-12">RoninsLab</h2>

                    <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-12 mb-16 px-4">
                        <CultureBox
                            image="/settings.png"
                            title="Web2 & Web3 Experience"
                            description="Ronins Lab reaches users in more than 150 countries with its web2 and web3 solutions"
                        />
                        <CultureBox
                            image="/security.png"
                            title="High Security"
                            description="All your data is protected with high-security encryption methods"
                        />
                        <CultureBox
                            image="/text.png"
                            title="Professional Management"
                            description="Ronins Lab's professional and highly experienced team is with you in all processes"
                        />
                    </div>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 w-full px-4">
                        <PageInfoBox
                            logo="/user.png"
                            number="400K"
                            label="Users"
                        />
                        <PageInfoBox
                            logo="/countries.png"
                            number="172"
                            label="Countries"
                        />
                        <PageInfoBox
                            logo="/project.png"
                            number="12"
                            label="Projects"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUsSection;