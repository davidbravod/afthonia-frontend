import Link from "next/link";

const AnimatedLink = (props) => {
  return (
    <Link href={props.link}>
      <a
        className={`px-5 py-3 md:px-6 relative z-10 md:py-4 cursor-pointer  rounded-[5px] shadow-lg shadow-[#ff6f2c65] hover:shadow-none group overflow-hidden bg-[#FF6E2C] text-white inline-block ${props.classes}`}
      >
        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-500 ease-out transform translate-y-0 bg-white group-hover:h-full opacity-90"></span>
        <span className="relative group-hover:text-[#222] duration-500">
          {props.name}
        </span>
      </a>
    </Link>
  );
};

export default AnimatedLink;
