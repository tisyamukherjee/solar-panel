import Image from 'next/image';
import ProfileCard from './ProfileCard';

export default function Team () {
    return (
        <div className="bg-white">
            <h1 className="text-7xl text-center font-bold pb-18 pt-15 font-montserrat" 
                style={{ color: '#00274C' }}
            >
                 Meet The Team 
            </h1>
            <div className="px-20">
                <h2 className="text-black text-3xl text-bold font-montserrat py-4"> Michigan EcoData </h2>
                <p className="text-black font-montserrat">
                    Michigan EcoData is a home for students seeking exploration of environmental 
                    justice and ecological conservation issues through data and technology driven projects.
                </p>
                {/* images */}
                <div className="flex flex-row justify-center items-start gap-8 flex-wrap">
                    <ProfileCard headshot="/headshots/tisya.jpeg" fullname="Tisya  Mukherjee" role="Project Lead"/>
                    <ProfileCard headshot="/headshots/charlie.jpeg" fullname="Charlie Zheng" role="Team Member" />
                    <ProfileCard headshot="/headshots/ellen.jpg" fullname="Ellen Ruan" role="Team Member" />
                    <ProfileCard headshot="/headshots/tisya.jpeg" fullname="Taemin Kim" role="Team Member" />
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
                    <ProfileCard headshot="/headshots/tisya.jpeg" fullname="Tisya  Mukherjee" role="Project Lead"/>
                    <ProfileCard headshot="/headshots/tisya.jpeg" fullname="Tisya  Mukherjee" role="Project Lead"/>
                    <ProfileCard headshot="/headshots/tisya.jpeg" fullname="Tisya  Mukherjee" role="Project Lead"/>
                    <ProfileCard headshot="/headshots/tisya.jpeg" fullname="Tisya  Mukherjee" role="Project Lead"/>
                </div>
            </div>
        </div>
    );
};