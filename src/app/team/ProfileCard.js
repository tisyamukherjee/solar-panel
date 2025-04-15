import Image from 'next/image';

export default function ProfileCard({ headshot, fullname, role, link }) {
  return (
    <div className="py-10 px-15 flex flex-col text-center items-center">
      <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden group shadow-lg">
        {/* Profile Image */}
        <Image
          src={headshot}
          alt={fullname}
          fill
          className="object-cover"
        />

        {/* Overlay LinkedIn Icon */}
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center group-hover:bg-black/50"
            >

            {/* LinkedIn Icon */}
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
                alt="LinkedIn"
                className="w-10 h-10 opacity-0 group-hover:opacity-80 z-20 pointer-events-none"
            />
        </a>
      </div>
      <p className="text-black pt-2 text-lg font-montserrat">{fullname}</p>
      <p className="text-black text-sm font-montserrat">{role}</p>
    </div>
  );
}
