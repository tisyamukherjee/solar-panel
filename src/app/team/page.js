import Link from 'next/link';
import ProfileCard from './ProfileCard';

export default function Team () {
    return (
        <div className="bg-white">
            <h1 className="text-6xl text-center font-bold pb-5 pt-15 font-montserrat" 
                style={{ color: '#00274C' }}
            >
                 Meet The Team 
            </h1>
            <div className="px-20">
                <h2 className="text-black text-3xl text-bold font-montserrat py-4"> 
                    <Link 
                        href="https://michiganecodata.org/index.html" 
                        className="hover:text-[#FFCB05]"
                        target="_blank"
                    >
                        Michigan EcoData
                    </Link>
                </h2>
                <p className="text-black font-montserrat">
                    Michigan EcoData is a home for students seeking exploration of environmental 
                    justice and ecological conservation issues through data and technology driven projects.
                </p>
                {/* images */}
                <div className="flex flex-row justify-center items-start gap-8 flex-wrap">
                    <ProfileCard 
                        headshot="/headshots/tisya.jpeg" 
                        fullname="Tisya  Mukherjee" 
                        role="Project Lead"
                        link="https://www.linkedin.com/in/tisya-m/"
                    />
                    <ProfileCard 
                        headshot="/headshots/charlie.jpeg" 
                        fullname="Charlie Zheng" 
                        role="Team Member"
                        link="https://www.linkedin.com/in/charliezh/" 
                    />
                    <ProfileCard 
                        headshot="/headshots/ellen.jpg" 
                        fullname="Ellen Ruan" 
                        role="Team Member" 
                        link="https://www.linkedin.com/in/ellenruan/"
                    />
                    <ProfileCard 
                        headshot="/headshots/taemin.jpeg" 
                        fullname="Taemin Kim" 
                        role="Team Member" 
                        link="https://www.linkedin.com/in/taemin-kim-010344235/"
                    />
                </div>
                <h2 className="text-black text-3xl text-bold font-montserrat"> Students for Clean Energy </h2>
                <p className="text-black py-4 font-montserrat">
                Students for Clean Energy promotes awareness and implementation of renewable 
                energy at the University of Michigan. We challenge the status quo of burning 
                emissions-producing fuels at U-M and works to promote a just transition towards 
                clean energy.
                </p>
                {/* images */}
                <div className="flex flex-row justify-center gap-8 flex-wrap">
                    <ProfileCard 
                        headshot="/headshots/harrison.jpg" 
                        fullname="Harrison Rhoades" 
                        role="Research and Development Director "
                        link="https://www.linkedin.com/in/harrison-rhoades-74167b255/"
                    />
                    <ProfileCard 
                        headshot="/headshots/torrie.jpeg" 
                        fullname="Victoria Jacobs" 
                        role="Research and Development Co-Chair"
                        link="https://www.linkedin.com/in/victoria-jacobs-64247820a/"
                    />
                    <ProfileCard 
                        headshot="/headshots/wilder.jpg" 
                        fullname="Wilder Wetzel-Righettini" 
                        role="Research and Development Co-Chair"
                        link="https://www.linkedin.com/in/wilder-wetzel-righettini-6a0592238/"
                    />
                </div>
            </div>
        </div>
    );
};