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

            {/* Mobil ve Tablet için roket görseli */}
            <div className="block xl:hidden mt-8">
                <div className="relative flex items-center justify-center">
                    <div className="absolute bg-[#C62127] rounded-full w-72 md:w-96 h-72 md:h-96"></div>
                    <img
                        src="/rocket.png"
                        alt="Center"
                        className="relative w-64 md:w-80 h-auto object-contain"
                    />
                </div>
            </div>

            {/* Info Kutular ve Merkez Görsel */}
            <div className="mt-16 flex flex-col xl:flex-row justify-center items-center gap-8 md:gap-16">
                {/* Sol Kutular */}
                <div className="space-y-8 md:space-y-12 xl:order-1 px-4 md:px-16 xl:pr-32 w-full xl:w-auto">
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
                <div className="hidden xl:inline-flex relative items-center justify-center mb-12 xl:mb-32 xl:order-2">
                    <div className="absolute bg-[#C62127] rounded-full w-96 h-96 xl:mt-10"></div>
                    <img
                        src="/rocket.png"
                        alt="Center"
                        className="relative w-80 h-auto object-contain"
                    />
                </div>

                {/* Sağ Kutular */}
                <div className="space-y-8 md:space-y-12 xl:order-3 px-4 md:px-16 xl:pl-32 w-full xl:w-auto">
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