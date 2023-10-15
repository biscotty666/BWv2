import Image from "next/image";
import Link from "next/link";
import profileImg from "/public/CL128.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
      <div className="w-12 md:w-16 overflow-hidden border border-solid border-dark dark:border-gray rounded-full mr-2 med:mr-4">
        <Image
          src={profileImg}
          alt="Brian"
          className="w-full h-auto rounded-full"
          sizes="33vw"
          priority
        />
      </div>
      <span className="font-bold dark:font-semibold text-lg med:text-xl">
        biscotty's Workshop
      </span>
    </Link>
  );
};

export default Logo;
