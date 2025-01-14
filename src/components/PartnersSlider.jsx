import React, { useRef, useEffect } from 'react';

const PartnersSlider = () => {
    const sliderRef = useRef(null);
    const intervalRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        let isDown = false;
        let startX;
        let scrollLeft;

        // Manuel kaydırma işlemleri
        const handleMouseDown = (e) => {
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
            // Manuel kaydırma başladığında otomatik kaymayı durdur
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };

        const handleMouseLeave = () => {
            isDown = false;
            slider.classList.remove('active');
            // Mouse ayrıldığında otomatik kaymayı tekrar başlat
            startAutoScroll();
        };

        const handleMouseUp = () => {
            isDown = false;
            slider.classList.remove('active');
            // Mouse bırakıldığında otomatik kaymayı tekrar başlat
            startAutoScroll();
        };

        const handleMouseMove = (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 3;
            slider.scrollLeft = scrollLeft - walk;
        };

        // Otomatik kaydırma fonksiyonu
        const startAutoScroll = () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }

            intervalRef.current = setInterval(() => {
                if (slider) {
                    if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
                        // Sona gelindiğinde başa dön
                        slider.scrollLeft = 0;
                    } else {
                        slider.scrollLeft += 1; // Her interval'da 1px kaydır
                    }
                }
            }, 20); // Her 20ms'de bir kaydır (daha yumuşak geçiş için)
        };

        // Event listener'ları ekle
        slider.addEventListener('mousedown', handleMouseDown);
        slider.addEventListener('mouseleave', handleMouseLeave);
        slider.addEventListener('mouseup', handleMouseUp);
        slider.addEventListener('mousemove', handleMouseMove);

        // Touch events için
        slider.addEventListener('touchstart', (e) => {
            handleMouseDown(e.touches[0]);
        });
        slider.addEventListener('touchend', handleMouseUp);
        slider.addEventListener('touchmove', (e) => {
            handleMouseMove(e.touches[0]);
        });

        // Otomatik kaydırmayı başlat
        startAutoScroll();

        // Cleanup
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
            slider.removeEventListener('mousedown', handleMouseDown);
            slider.removeEventListener('mouseleave', handleMouseLeave);
            slider.removeEventListener('mouseup', handleMouseUp);
            slider.removeEventListener('mousemove', handleMouseMove);
            slider.removeEventListener('touchstart', handleMouseDown);
            slider.removeEventListener('touchend', handleMouseUp);
            slider.removeEventListener('touchmove', handleMouseMove);
        };
    }, []);

    // Her logodan iki set oluştur (sonsuz döngü etkisi için)
    const logos = [
        { src: '/partner1.png', alt: 'Partner 1' },
        { src: '/partner2.png', alt: 'Partner 2' },
        { src: '/partner3.png', alt: 'Partner 3' },
        { src: '/partner4.png', alt: 'Partner 4' },
    ];

    const duplicatedLogos = [...logos, ...logos]; // Logoları tekrarla

    return (
        <div className="my-16">
            <h3 className="text-[#C62127] text-3xl text-center mb-8 font-bold">Partners</h3>
            <div className="flex justify-center overflow-hidden">
                <div
                    ref={sliderRef}
                    className="flex overflow-x-auto whitespace-nowrap space-x-20 pb-4 scrollbar-hide max-w-full md:gap-20"
                    style={{
                        scrollBehavior: 'smooth',
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    }}
                >
                    {duplicatedLogos.map((logo, index) => (
                        <img
                            key={`${logo.alt}-${index}`}
                            src={logo.src}
                            alt={logo.alt}
                            className="h-8 w-auto inline-block"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PartnersSlider;