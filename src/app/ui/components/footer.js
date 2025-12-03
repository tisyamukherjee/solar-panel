import { FaInstagram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";
import Image from 'next/image';

export default function Footer() {

    return (
        <footer className="bg-[#00274C] text-white py-10 font-montserrat">

            {/* Wrapper for the entire footer */}
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start justify-between gap-12">
                {/* Logo and Contact section */}
                <div className="flex flex-row-reverse items-start justify-between self-start lg:mb-0 lg:flex-row">

                    {/* Logo */}     
                    {/* Three Tabs */}
                    <div>
                        <Image
                        src="/blockm.svg"
                        alt="University of Michigan"
                        width={100}
                        height={100}
                        className="ml-6 lg:ml-0 lg:mr-8"
                        />
                    </div>


                    {/* Contact info */}
                    <div className="space-y-4">
                        <span className="text-xl font-semibold flex flex-col">Maize Rays</span>
                        <link
                            rel="stylesheet"
                            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                        />
                        <div className="contact-item flex flex-row gap-5 items-center">
                            <i className="fa-solid fa-location-dot" ></i>
                            <p>109 E Madison St, Ann Arbor, MI 48104</p>
                        </div>

                        {/* <div className="contact-item">
                            <i className="fa-solid fa-phone"></i>
                            <p>Contact info</p>
                        </div> */}

                        <div className="contact-item flex flex-row items-center gap-5">
                            <i className="fa-solid fa-envelope"></i>
                            <p> <a href="mailto:ocs_contact@umich.edu">ocs_contact@umich.edu</a> </p>
                        </div>
                    </div>
                </div>

                {/* Quick links section */}
                {/* <div className="text-center md:text-left">
                    <span className="text-xl font-semibold text-[#FFCB05]">Quick Links</span>
                    <ul className="space-y-1 text-sm text-gray-200">
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <br></br>
                        <li><a href="/about" className="hover:underline">About Us</a></li>
                        <br></br>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                        <br></br>
                        <li><a href="/quiz" className="hover:underline">Quiz?</a></li>
                    </ul>
                </div> */}

                {/* Planet Blue and Social Media section */}
                <div className="flex flex-col items-center gap-4 mt-1">
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
                    <div className="flex gap-4 text-white text-xl w-full justify-center">
                        <FaInstagram className="hover:text-gray-400 cursor-pointer" />
                        <FaYoutube className="hover:text-gray-400 cursor-pointer" />
                        <FaTwitter className="hover:text-gray-400 cursor-pointer" />
                        <FaFacebook className="hover:text-gray-400 cursor-pointer" />
                    </div>
                </div>

            </div>



        </footer>
    )
}