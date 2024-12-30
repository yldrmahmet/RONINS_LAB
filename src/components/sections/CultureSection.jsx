// src/components/sections/CultureSection.jsx
import React from 'react';
import CultureBox from '../CultureBox';

const CultureSection = () => {
    return (
        <div className="bg-[#f1f1f1] mt-10 md:mt-0">
            <div className="w-full">
                <div className="relative h-[750px] md:h-[600px] w-full">
                    <img
                        src="/background.jpeg"
                        alt="Culture Background"
                        className="w-full h-full object-cover object-[center_35%] md:object-center grayscale brightness-50 contrast-125"
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-end pb-24">
                        <div className="text-center mb-16 px-4">
                            <h2 className="text-white text-3xl font-bold mb-4">Our Culture</h2>
                            <p className="text-white text-lg mb-8 max-w-3xl">
                                Developing digital solutions tailored to your needs and bringing value to your business
                            </p>
                        </div>
                    </div>
                </div>

                {/* Culture Boxes Container */}
                <div className="bg-[#f1f1f1]">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-12 -mt-32 md:-mt-24">
                            <CultureBox
                                image="/knowledge.png"
                                title="Knowledge"
                                description="Understanding the problem correctly and solving it appropriately"
                            />
                            <CultureBox
                                image="/target.png"
                                title="Target Oriented"
                                description="Developing deliverables in accordance with the objectives set before the process"
                            />
                            <CultureBox
                                image="/like.png"
                                title="User Friendly"
                                description="Easy user experience suitable for different devices, operating systems and screen sizes"
                            />
                        </div>
                        <div className="h-32 md:h-16"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CultureSection;