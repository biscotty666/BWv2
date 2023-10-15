"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { 
  GithubIcon, 
  SubstackIcon, 
  MediumIcon,
  DiscordIcon
} from "../Icons";
import Link from "next/link";
import siteMetadata from "@/utils/siteMetaData";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <footer className="mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark">
      {/* <h3 className="mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
        Interesting Stories | Updates | Guides
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
        Subscribe to learn about new technology and updates. Join over 5000+
        members community to stay up to date with latest news.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 rounded mx-4 flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 w-fit sm:min-w-[384px]"
      >
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true, maxLength: 80 })}
          className="w-full bg-transparent pl-2 sm:pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1"
        />

        <input
          type="submit"
          className="bg-dark dark:bg-light text-light dark:text-dark cursor-pointer font-medium rounded px-3 sm:px-5 py-1"
        />
      </form> */}

      <div className="w-full relative font-medium py-6 px-8 flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col md:flex-row items-center gap-3 sm:gap-4 lg:gap-6">
          <div className="gap-0">
            <a
              href={siteMetadata.medium}
              className="fill-light dark:fill-dark inline-block w-6 h-6 mr-4"
            >
              <MediumIcon className="hover:scale-125 transition-all ease duration-200" />
            </a>
            <a
              href={siteMetadata.substack}
              className="inline-block w-6 h-6 mr-4"
            >
              <SubstackIcon className="hover:scale-125 transition-all ease duration-200" />
            </a>
            <a
              href={siteMetadata.github}
              className="inline-block w-6 h-6 mr-4 fill-light"
            >
              <GithubIcon className="fill-light dark:fill-dark hover:scale-125 transition-all ease duration-200" />
            </a>
            <a
              href={siteMetadata.discord}
              className="inline-block w-6 h-6 mr-4 fill-light"
            >
              <DiscordIcon className="fill-light dark:fill-dark hover:scale-125 transition-all ease duration-200" />
            </a>
          </div>
        </div>
        <span className="text-center">
          &copy;2023 Brian Carey. All rights reserved.
        </span>
        <div>
            <a href="mailto:biscotty666@gmail.com">📨 biscotty666@gmail.com</a>
          </div>
        {/* <Link
          href="/sitemap.xml"
          className="text-center underline my-4 md:my-0"
        >
          sitemap.xml
        </Link> */}
        {/* <div className="text-center">
          With &hearts; to{" "}
          <a href="https://devdreaming.com" className="underline">
            CodeBucks
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
