import Image from "next/image";
import profileCharacter from "/public/Colorful_Me.png";

const AboutCoverSection = () => {
  return (
    <section className="w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      <div className="w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center">
        <Image
          src={profileCharacter}
          alt="Character"
          className="w-4/5 xs:w-3/4 md:w-full h-full object-contain object-center"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1180px) 50vw, 50vw"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16">
        <h2 className="font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl text-center lg:text-left">
          Welcome!
        </h2>
        <p className="font-medium mt-4 text-base">
          Technology has been a constant thread throughout my life. No matter
          what activity I have been engaged in, and I've been a student,
          financial analyst, programmer, software localization manager,
          consultant, negotiator, herbalist, acupuncturist, professor, web
          application developer... I've always worked technology into the mix to
          solve problems or increase efficiency.
        </p>
        <p className="font-medium mt-4 text-base">
          I'm currently studying data science. For reasons you can read about
          here I came across Obsidian and the ideas of Zettelkasten and Personal
          Knowledge Management. This software and these concepts have so much
          impressed me that much of this site is dedicated to teaching how to
          use it.
        </p>
        <p className="font-medium mt-4 text-base">
          This site also gives me the chance to use the wonderful Svelte
          framework and share my experience with other tech, especially Linux,
          with which I have a long history. I'm especially excited about NixOS,
          which is an entirely different approach to operating systems.
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
