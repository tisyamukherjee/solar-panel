import Link from 'next/link';
import Image from 'next/image';
import {LoginLogoutButton} from "@/components/ui/LoginLogout";

export default function Navbar() {
    return (
        <header className="bg-[#00274C]">
            {/* <div className="max-w-5xl flex items-center justify-between px-6 py-4 font-montserrat"> */}
            <div className="w-full flex items-center px-6 py-4 font-montserrat">
                {/* Logo */}
                <div className="flex flex-row gap-5 items-center"> 
                    <Link href="/">
                        <Image 
                            src="/blockm.png"
                            alt="UM logo"
                            width="40"
                            height="40"
                        />
                    </Link>
                    <h1 className="text-white font-bold text-center"> EcoData x SfCE </h1>
                </div>

                {/* Nav links */}
                <nav className="ml-auto space-x-6 text-sm text-white font-medium">
                    <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
                    {/* <Link href="/about" className="hover:text-yellow-400 transition">About</Link> */}
                    <Link href="/map" className="hover:text-yellow-400 transition">Map</Link>
                    <Link href="/education" className="hover:text-yellow-400 transition">Solar Energy 101</Link>
                    <Link href="/team" className="hover:text-yellow-400 transition">Team</Link>
                    <Link href="/contact" className="hover:text-yellow-400 transition">Contact</Link>
                    <LoginLogoutButton />
                </nav>
            </div>
        </header>
    );
}