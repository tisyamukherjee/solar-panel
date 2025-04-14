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
          className="absolute inset-0 flex items-center justify-center bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-150 h-150 opacity-0 group-hover:opacity-50 text-[#81b2e3] transition-opacity duration-300"
            fill="currentColor"
          >
            <path d="M256,0C114.836,0,0,114.836,0,256s114.836,256,256,256s256-114.836,256-256S397.164,0,256,0z M192,384h-64V208h64V384z M160,180
              c-20.96,0-32-13.68-32-30.8c0-17.44,11.36-30.8,32.96-30.8c21.6,0,32,13.36,32,30.8C193.12,166.32,181.6,180,160,180z M384,384h-64
              v-95.68c0-24-8.64-40.32-30.4-40.32c-16.56,0-26.4,11.12-30.72,21.92c-1.6,3.84-2,9.12-2,14.48V384h-64c0,0,0.88-154.88,0-168h64
              v23.84c8.48-13.12,23.6-31.84,57.44-31.84c41.92,0,72.56,27.44,72.56,86.4V384z" />
          </svg>
        </a>
      </div>
      <p className="text-black pt-2 text-lg font-montserrat">{fullname}</p>
      <p className="text-black text-sm font-montserrat">{role}</p>
    </div>
  );
}
