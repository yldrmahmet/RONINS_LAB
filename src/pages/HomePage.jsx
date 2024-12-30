// src/pages/HomePage.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/sections/HeroSection';
import PartnersSlider from '../components/PartnersSlider';
import AssistSection from '../components/sections/AssistSection';
import CultureSection from '../components/sections/CultureSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import ContactSection from '../components/sections/ContactSection';
import Action from '../components/Action';
import '../styles/HomePage.css';

const HomePage = () => {
    return (
        <div className="w-full overflow-x-hidden">
            <div className="bg-[#F1F1F1]">
                <Header />
                <HeroSection />
            </div>

            <div className="bg-white">
                <div className="container mx-auto px-4 md:px-8 mt-48 md:mt-0">
                    <PartnersSlider />
                </div>
                <AssistSection />
            </div>

            <CultureSection />
            <WhyChooseUsSection />
            <ContactSection />

            <div className="bg-white md:bg-[#FFFFFF]">
                <Action />
            </div>

            <Footer />
        </div>
    );
};

export default HomePage;