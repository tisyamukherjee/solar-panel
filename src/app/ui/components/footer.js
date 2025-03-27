import { FaInstagram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";
import Image from 'next/image';

export default function Footer() {

    return (
        <div className="bg-[#00274C] text-white py-10 px-6">

            {/* Wrapper for the entire footer */}
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">


                {/* Logo and Contact section */}
                <div className="flex items-start gap-4">

                    {/* Logo */}
                    <img
                        src="/u-m-logo.png" // Replace with actual path
                        alt="University of Michigan"
                        className="w-20 h-auto border p-2"
                    />

                    {/* Contact info */}
                    <div className="space-y-2 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                        <span className="text-yellow-400">📍</span> Address
                        </div>
                        <div className="flex items-center gap-2">
                        <span className="text-yellow-400">📞</span> Contact info
                        </div>
                        <div className="flex items-center gap-2">
                        <span className="text-yellow-400">✉️</span> Email here
                        </div>
                    </div>
                </div>

                {/* Quick links section */}
                <div className="text-center md:text-left">
                    <h3 className="text-yellow-400 font-bold text-lg mb-2">Quick Links</h3>
                    <ul className="space-y-1 text-sm text-gray-200">
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/about" className="hover:underline">About Us</a></li>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                        <li><a href="/quiz" className="hover:underline">Quiz?</a></li>
                    </ul>
                </div>

                {/* Planet Blue and Social Media section */}
                <div className="flex flex-col items-center gap-4">
                    {/* Planet Blue logo */}
                    <div className="flex items-center gap-2 w-full justify-end">
                        <Image
                        src="/blue.svg"
                        alt="UM Logo"
                        width={100}
                        height={100}
                        className="w-50 h-auto"
                        />
                    </div>

                    {/* Social media buttons */}
                    <div className="flex gap-4 text-white text-xl w-full justify-end">
                        <FaInstagram className="hover:text-gray-400 cursor-pointer" />
                        <FaYoutube className="hover:text-gray-400 cursor-pointer" />
                        <FaTwitter className="hover:text-gray-400 cursor-pointer" />
                        <FaFacebook className="hover:text-gray-400 cursor-pointer" />
                    </div>
                </div>

            </div>





        </div>
    )
}