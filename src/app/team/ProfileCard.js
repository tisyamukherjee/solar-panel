import Image from 'next/image';

export default function ProfileCard({headshot, fullname, role}) {
    return (
        <div className="py-10 px-15 flex flex-col text-center items-center">
            <Image
                src={headshot}
                alt={fullname}
                width={150}
                height={150}
                className="rounded-full object-cover"
            />
            <p className="text-black pt-2 text-lg font-montserrat">{fullname}</p>
            <p className="text-black text-sm font-montserrat">{role}</p>
        </div>
    )
}