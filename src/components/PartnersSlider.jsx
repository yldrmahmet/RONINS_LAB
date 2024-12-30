import React, { useRef, useEffect } from 'react';

const PartnersSlider = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        let isDown = false;
        let startX;
        let scrollLeft;

        const handleMouseDown = (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        };

        const handleMouseLeave = () => {
            isDown = false;
            slider.classList.remove('active');
        };

        const handleMouseUp = () => {
            isDown = false;
            slider.classList.remove('active');
        };

        const handleMouseMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 3;
            slider.scrollLeft = scrollLeft - walk;
        };

        slider.addEventListener('mousedown', handleMouseDown);
        slider.addEventListener('mouseleave', handleMouseLeave);
        slider.addEventListener('mouseup', handleMouseUp);
        slider.addEventListener('mousemove', handleMouseMove);

        return () => {
            slider.removeEventListener('mousedown', handleMouseDown);
            slider.removeEventListener('mouseleave', handleMouseLeave);
            slider.removeEventListener('mouseup', handleMouseUp);
            slider.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className="my-16">
            <h3 className="text-[#C62127] text-3xl text-center mb-8 font-bold">Partners</h3>
            <div className="flex justify-center">
                <div
                    ref={sliderRef}
                    className="flex overflow-x-auto whitespace-nowrap space-x-20 pb-4 scrollbar-hide max-w-full md:gap-20"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    <img src="/partner1.png" alt="Partner 1" className="h-8 w-auto inline-block" />
                    <img src="/partner2.png" alt="Partner 2" className="h-8 w-auto inline-block" />
                    <img src="/partner3.png" alt="Partner 3" className="h-8 w-auto inline-block" />
                    <img src="/partner4.png" alt="Partner 4" className="h-8 w-auto inline-block" />
                </div>
            </div>
        </div>
    );
};

export default PartnersSlider;