import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <header className="bg-[#00274C]">
            {/* <div className="max-w-5xl flex items-center justify-between px-6 py-4 font-montserrat"> */}
            <div className="w-full flex items-center px-6 py-4 font-Merriweather">
                {/* Logo */}
                <div className="flex flex-row gap-5 items-center"> 
                    <Link href="/">
                        <Image 
                            src="/blockM.png"
                            alt="UM logo"
                            width="80"
                            height="80"
                        />
                    </Link>
                <div className="h-15 w-[2px] bg-white"></div>
                <div className="text-center">
                    <h1 className="text-4xl text-white font-Merriweather font-bold text-center"> EcoData x SfCE </h1> 
                    <h2 className="text-white font-Merriweather font-bold text-center"> University of Michigan</h2>
                </div>
                </div>

                {/* Nav links */}
                <nav className="ml-auto space-x-6 text-2xl text-white font-medium">
                    <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
                    {/* <Link href="/about" className="hover:text-yellow-400 transition">About</Link> */}
                    <Link href="/map" className="hover:text-yellow-400 transition px-6">Map</Link>
                    <Link href="/education" className="hover:text-yellow-400 transition px-6">Get Educated</Link>
                    <Link href="/team" className="hover:text-yellow-400 transition px-6">FAQ</Link>
                    <Link href="/contact" className="hover:text-yellow-400 transition px-6">Team</Link>
                </nav>
            </div>
        </header>
    );
}