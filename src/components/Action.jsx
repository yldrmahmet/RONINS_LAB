import React from 'react';

const CallToAction = () => {
    return (
        <div id='action' className="container mx-auto py-16 md:py-0 px-4 md:px-8">
            <div className="flex justify-center -mb-40 md:mb-[-72px]">
                <div className="bg-[#C62127] w-full md:w-4/5 rounded-3xl flex flex-col-reverse md:flex-row items-center justify-between p-4 pt-16 md:pl-16 md:-pb-0 md:pt-0 h-[600px] md:h-96">
                    <div className="text-white text-center md:text-left mt-24 md:mt-0">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">
                            Get in touch with us and <br />
                            discover how we can push<br />
                            you or your company <br />
                            forward.
                        </h2>

                        <button className="mb-6 bg-[#C62127] text-white border border-white px-6 py-3 rounded-xl text-xl font-semibold hover:bg-white hover:text-[#C62127] transition duration-300"
                            onClick={() => {
                                window.open('https://mail.google.com/mail/?view=cm&fs=1&to=hello@roninslab.xyz', '_blank');
                                setIsMenuOpen(false);
                            }}
                        >
                            Get in Touch
                        </button>
                    </div>
                    {/* Image Container */}
                    <div className="relative w-full md:w-[500px] h-auto md:h-[500px] -mt-16 md:mt-0 md:ml-8">
                        {/* Gölge Resmi (Shadow Image) */}
                        <img
                            src="/ninja_knife2.png"
                            alt="Shadow"
                            className="absolute  -bottom-24 md:bottom-0 -right-0 md:right-8 w-[60%] md:w-[40%] h-auto blur-sm opacity-30 rotate-90 mb-8"
                        />
                        {/* Ana Resim (Main Image) */}
                        <img
                            src="/ninja_knife2.png"
                            alt="Business Growth"
                            className="relative w-96 mt-[-10px] md:ml-16 md:w-[450px] h-auto"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CallToAction;
