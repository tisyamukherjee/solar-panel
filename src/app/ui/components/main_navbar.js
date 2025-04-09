import Link from 'next/link';

export default function Navbar() {
    return (
        <header className="bg-[#00274C]">
            <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4 font-montserrat">

                {/* Logo */}
                <Link href="/">
                    <div className="bg-yellow-400 text-[#00274C] font-semibold px-3 py-1 rounded">   
                        logo
                    </div>
                </Link>

                {/* Nav links */}
                <nav className="space-x-6 text-sm text-white font-medium">
                    <Link href="/" className="hover:text-yellow-400 transition">Home</Link>
                    <Link href="/map" className="hover:text-yellow-400 transition">Map</Link>
                    <Link href="/education" className="hover:text-yellow-400 transition">Education</Link>
                    {/* <Link href="/faq" className="hover:text-yellow-400 transition">FAQ</Link> */}
                    <Link href="/team" className="hover:text-yellow-400 transition">Team</Link>
                </nav>
            </div>
        </header>
    );
}