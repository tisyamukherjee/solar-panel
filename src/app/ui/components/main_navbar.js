import Link from 'next/link';
import Image from 'next/image';
import { LoginLogoutButton } from '@/components/ui/LoginLogout';

export default function Navbar() {
    return (
        <header className="bg-[#00274C]">
            {/* <div className="max-w-5xl flex items-center justify-between px-6 py-4 font-montserrat"> */}
            <div className="w-full flex items-center px-6 py-3 font-Merriweather">
                {/* Logo */}
                <div className="flex flex-row gap-5 items-center"> 
                    <Link href="/">
                        <Image 
                            src="/blockM.png"
                            alt="UM logo"
                            width="50"
                            height="50"
                        />
                    </Link>
                    <div className="h-10 w-[2px] bg-white"></div>
                    <div className="text-center">
                        <h1 className="text-2xl text-white font-montserrat font-bold text-center"> Maize Rays </h1> 
                        {/* <h2 className="text-white font-Merriweather font-bold text-center"> University of Michigan</h2> */}
                    </div>
                </div>

                {/* Nav links */}
                <nav className="ml-auto text-lg text-white font-['IBM Plex Sans Devanagri'] font-semibold divide-x divide-white/100 flex flex-row">
                    <Link href="/" className="hover:text-yellow-400 transition px-5">Home</Link>
                    <Link href="/map" className="hover:text-yellow-400 transition px-5">Map</Link>
                    <Link href="/education" className="hover:text-yellow-400 transition px-5">Get Educated</Link>
                    {/* <Link href="/contact" className="hover:text-yellow-400 transition px-6">Contact</Link> */}
                    <Link href="/team" className="hover:text-yellow-400 transition px-5">Team</Link>
                    <LoginLogoutButton/>
                </nav>
            </div>
        </header>
    );
}