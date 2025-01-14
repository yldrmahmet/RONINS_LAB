import React from 'react';

const HeroSection = () => {
    const scrollToAssist = () => {
        const assistSection = document.getElementById('assist-section');
        if (assistSection) {
            // Mevcut scroll pozisyonunu al
            const startPosition = window.pageYOffset;
            // Hedef elemanın pozisyonunu al
            const targetPosition = assistSection.getBoundingClientRect().top + window.pageYOffset;
            // Scroll mesafesi
            const distance = targetPosition - startPosition;
            // Animasyon süresi (ms)
            const duration = 2000;
            let start = null;

            function animation(currentTime) {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const run = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            // Easing fonksiyonu - daha yumuşak bir hareket için
            function ease(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animation);
        }
    };

    return (
        <div className="container px-4 md:pl-48 md:pr-32 mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center pt-16 md:pt-8">
                <div className="text-center md:text-left w-full md:w-1/2 px-2 pb-32 md:pb-0">
                    <p className="text-black text-l md:text-l font-medium">Jump start your</p>
                    <h2 className="text-black text-5xl md:text-6xl font-bold mt-4 md:mt-1">Business to</h2>
                    <h2 className="text-black text-5xl md:text-6xl font-bold">Next Level.</h2>
                    <button
                        className="bg-[#C62127] hover:scale-105 text-white text-2xl md:text-xl font-bold px-8 py-4 md:px-8 md:py-4 rounded-xl hover:bg-red-600 transition-all duration-300 ease-in-out mt-8"
                        onClick={scrollToAssist}
                    >
                        Explore More
                    </button>
                </div>
                <div id="laptopScaling" className="w-full md:w-3/4 flex justify-center mt-20 md:mt-4 md:scale-105 relative z-10 pb-10 md:pb-0">
                    <img
                        src="/ronins-laptop.png"
                        alt="Laptop"
                        className="h-80 md:h-[480px] w-auto object-contain scale-125 md:scale-100"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;