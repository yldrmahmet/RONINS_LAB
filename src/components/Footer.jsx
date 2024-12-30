import React from 'react'

const Footer = () => {
    return (
        /* Footer */
        <footer className="bg-black text-white pt-28 pb-12 w-full">
            <div className="container mx-auto px-4">
                <hr className="border-gray-900 mb-8 mx-60" />
                <div className="flex flex-col justify-between items-center gap-6">
                    <div className="flex flex-col md:flex-row gap-3 md:gap-12 text-center">
                        <a href="#" className="hover:text-gray-300">Home</a>
                        <a href="#" className="hover:text-gray-300">About</a>
                        <a href="#" className="hover:text-gray-300">Contact</a>
                    </div>
                    <div className="flex items-center space-x-3">
                        <img src="/logo.png" alt="Logo" className="h-8 w-8" />
                        <h2 className="text-xl font-bold">RONINSLAB</h2>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer