import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    const scrollToAction = () => {
        const element = document.getElementById('action');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="bg-[#F1F1F1] w-full z-50">
            <div className="container mx-auto flex justify-between items-center pt-4 px-4 md:justify-around md:pt-8">
                <Link to="/" className="flex items-center space-x-3 z-50">
                    <img src="/logo.png" alt="Logo" className="h-8 w-8" />
                    <div>
                        <h2 className="text-gray-800 text-xl font-bold">RONINSLAB</h2>
                    </div>
                </Link>

                <div className="hidden md:flex items-center space-x-6 font-bold">
                    <Link
                        to="/about"
                        className="text-gray-700 hover:bg-gray-100 px-2 py-1 rounded-md"
                    >
                        About
                    </Link>
                    <button
                        className="bg-[#C62127] text-white px-4 py-2 rounded-3xl hover:bg-red-600 transition"
                        onClick={scrollToAction}
                    >
                        Get in Touch
                    </button>
                </div>

                <button
                    className="md:hidden z-50"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <X size={24} className="text-gray-800" />
                    ) : (
                        <Menu size={24} className="text-gray-800" />
                    )}
                </button>
            </div>

            {isMenuOpen && (
                <div className="fixed top-0 left-0 w-full h-screen bg-[#F1f1f1] md:hidden z-40">
                    <div className="flex flex-col items-center justify-between h-full pt-32 pb-16">
                        {/* Navigation Links Container */}
                        <div className="flex flex-col items-center space-y-12">
                            <Link
                                to="/"
                                className="text-gray-700 hover:bg-gray-100 px-8 py-3 rounded-md text-2xl font-bold"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                className="text-gray-700 hover:bg-gray-100 px-8 py-3 rounded-md text-2xl font-bold"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About
                            </Link>
                        </div>

                        {/* Get in Touch Button - Fixed at bottom */}
                        <button
                            className="bg-[#C62127] text-white px-8 py-4 rounded-3xl hover:bg-red-600 transition text-2xl font-bold w-64"
                            onClick={() => {
                                window.open('https://mail.google.com/mail/?view=cm&fs=1&to=hello@roninslab.xyz', '_blank');
                                setIsMenuOpen(false);
                            }}
                        >
                            Get in Touch
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;