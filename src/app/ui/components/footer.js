import { FaInstagram, FaYoutube, FaTwitter, FaFacebook } from "react-icons/fa";
import Image from 'next/image';

export default function Footer() {

    return (
        <div className="bg-[#00274C] text-white py-10 px-6 md:px-20">

            {/* Wrapper for the entire footer */}
            <div>


                {/* Logo and Contact section */}
                <div>

                </div>

                {/* Quick links section */}
                <div>
                    
                </div>

                {/* Planet Blue and Social Media section */}
                <div className="flex flex-col items-end gap-4">
                    {/* Planet Blue logo */}
                    <div className="flex items-center gap-2 w-full justify-end">
                        <Image
                        src="/image.png"
                        alt="UM Logo"
                        width={100}
                        height={100}
                        className="w-12 h-auto"
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