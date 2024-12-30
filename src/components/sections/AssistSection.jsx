// src/components/sections/AssistSection.jsx
import React from 'react';
import InfoBoxLeft from '../InfoBoxLeft';
import InfoBoxRight from '../InfoBoxRight';

const AssistSection = () => {
    return (
        <div className="container mx-auto px-4 md:px-8 mt-20">
            <div className="text-center">
                <h2 className="text-black text-4xl font-bold">How we can assist</h2>
                <h2 className="text-[#C62127] text-4xl font-bold">your business</h2>
                <p className="text-gray-500 text-sm mt-6">HOW WE WORK</p>
            </div>

            {/* Mobil için roket görseli */}
            <div className="block lg:hidden mt-8">
                <div className="relative flex items-center justify-center">
                    <div className="absolute bg-[#C62127] rounded-full w-[400px] h-[400px] "></div>
                    <img
                        src="/rocket.png"
                        alt="Center"
                        className="relative w-80 h-auto object-contain"
                    />
                </div>
            </div>

            {/* Info Kutular ve Merkez Görsel */}
            <div className="mt-16 flex flex-col lg:flex-row justify-center items-center gap-16">
                <div className="space-y-12 lg:order-1 px-16 md:pr-32 gap-16">
                    <InfoBoxLeft
                        image="/buyutec.png"
                        title="Need Analysis"
                        description="In-depth analysis of your business processes to build your business presence in the digital world"
                    />
                    <InfoBoxLeft
                        image="/isbirligi.png"
                        title="Ongoing Support"
                        description="Support service for post-launch processes"
                    />
                </div>

                {/* Masaüstü için roket görseli */}
                <div className="hidden lg:inline-flex relative items-center justify-center mb-12 lg:mb-32 lg:order-2">
                    <div className="absolute bg-[#C62127] rounded-full w-[400px] h-[400px] lg:mt-10"></div>
                    <img
                        src="/rocket.png"
                        alt="Center"
                        className="relative w-72 h-auto object-contain"
                    />
                </div>

                <div className="space-y-12 lg:order-3 px-16 md:pl-32">
                    <InfoBoxRight
                        image="/puzzle.png"
                        title="Tailor Made Solutions"
                        description="Customized digital solutions that will add value to your business"
                    />
                    <InfoBoxRight
                        image="/setup.png"
                        title="Setup & Launch"
                        description="Setup & Launch with all rights and control in your brand"
                    />
                </div>
            </div>
        </div>
    );
};

export default AssistSection; 