import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Action from '../components/Action';

const AboutPage = () => {
    return (
        <div className="w-full overflow-x-hidden bg-white">
            {/* Header ve Hero Section */}
            <div className="bg-[#F1F1F1]">
                <Header />
                <div className="container mx-auto px-4 py-16 md:py-20 relative md:mb-24">
                    {/* Text Content */}
                    <div className="text-center mb-8 md:mb-12 relative">
                        <p className="text-red-500 text-sm md:text-base mb-2">Who We Are</p>
                        <h1 className="text-3xl md:text-5xl font-bold text-black">About Us</h1>
                    </div>

                    {/* Positioned Star Images */}
                    <div className="absolute top-12 left-8 md:left-16 lg:left-24">
                        <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10">
                            <img
                                src="/about_star.png"
                                alt="Star left"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="absolute top-1/2 right-12 md:right-24 lg:right-32 transform -translate-y-1/2">
                        <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10">
                            <img
                                src="/about_star.png"
                                alt="Star right"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="absolute bottom-8 left-1/3 md:left-0 -ml-10">
                        <div className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10">
                            <img
                                src="/about_star.png"
                                alt="Star bottom"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* İlk Resim ve İçerik Bölümü */}
            <div className="container mx-auto px-4 -mt-20 md:-mt-32">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:items-end">
                    {/* Mobilde İlk İki Resim */}
                    <div className="flex md:block -ml-4 md:ml-0 mb-8 md:mb-0 md:col-span-3">
                        {/* Sol Küçük Resim */}
                        <div className="w-1/2 md:w-full aspect-square h-48 md:h-56 pr-2 md:pr-0">
                            <img
                                src="/about_left_top.png"
                                alt="Small left"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        {/* Orta Büyük Resim - Mobil */}
                        <div className="w-1/2 md:hidden aspect-square h-64 pl-2">
                            <img
                                src="/about_top.png"
                                alt="Large center"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Desktop'ta Orta Büyük Resim */}
                    <div className="hidden md:block md:col-span-4 w-full aspect-square h-72 -mt-20">
                        <img
                            src="/about_top.png"
                            alt="Large center"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>

                    {/* Boş Alan */}
                    <div className="hidden md:block md:col-span-1"></div>

                    {/* Mobilde İkinci İki Resim */}
                    <div className="flex md:hidden -mr-4 mb-8">
                        <div className="w-1/2 aspect-square h-40 pr-2">
                            <img
                                src="/about_left_bottom.png"
                                alt="Small image"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                        <div className="w-1/2 aspect-square h-48 pl-2">
                            <img
                                src="/about_bottom.png"
                                alt="Large image"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>

                    {/* Sağ İçerik */}
                    <div className="space-y-4 md:col-span-4">
                        <h2 className="text-2xl md:text-3xl font-bold">Yenilikçi Çözümlerle<br />
                            İşinizi Büyütün</h2>
                        <p className="text-gray-600 text-sm md:text-base">
                            Ronins Lab, Türkiye ve Almanya'da ofisleri bulunan global bir yazılım firmasıdır.
                            Web2 ve Web3 teknolojilerinde uzmanlaşan şirketimiz, orta ve küçük ölçekli
                            işletmelerin dijitalleşme süreçlerini kolaylaştırmak için yenilikçi çözümler sunar.
                            Websitesinden ERP sistemlerine ve mobil uygulamalara kadar geniş bir yelpazede hizmet verirken,
                            fikir aşamasından tasarıma, geliştirmeden yayınlamaya kadar her noktada kapsamlı destek sağlamaktayız.
                        </p>
                    </div>
                </div>
            </div>

            {/* Desktop'ta İkinci Resim Bölümü */}
            <div className="hidden md:block container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 items-center">
                    <div className="ml-32 w-1/2 aspect-square h-56">
                        <img
                            src="/about_left_bottom.png"
                            alt="Small image"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="w-3/4 aspect-square h-72 -ml-24">
                        <img
                            src="/about_bottom.png"
                            alt="Large image"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 text-center">
                <p className="text-red-500 text-sm mb-2">OUR MISSION</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Sustainable & Reliable Innovation</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Misyonumuz, işletmelerin dijital hedeflerine ulaşmalarını kolaylaştırmak için
                    ölçeklenebilir ve güvenilir yazılım çözümleri sunmaktır.
                    Vizyonumuz ise, global yazılım sektöründe sürdürülebilir
                    inovasyonlarla tanınan lider bir firma olmaktır.
                </p>
            </div>

            <div className="bg-[#FFFFFF]">
                <Action />
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;