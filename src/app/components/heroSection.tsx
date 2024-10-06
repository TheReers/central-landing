"use client";

import React, { FC, ReactElement} from "react";
import Image from "next/image";
import ResponsiveAppBar from "./navbar";
import { useRouter } from "next/navigation";

const HeroSection: FC = (): ReactElement => {
  const router = useRouter();

  return (
    <div className=" w-full   flex justify-center ">
      <div style={{ maxWidth: 1440 }} className="px-0    md:w-full ">
        <ResponsiveAppBar />
        <div className="w-full hidden md:flex  justify-center">
          <div className=" hidden md:block mt-5">
            <div className="text-3xl text-[#2b2b2b] leading-[68px] md:text-[64px] font-bold flex  justify-center text-center font-britti">
              Create Your Podcast <br /> in Minutes with AI
            </div>{" "}
          </div>
        </div>
        <div className="pb-10  px-2 md:px-32 ">
          <div className="flex justify-center md:justify-around mt-10 md:mt-0">
            <div className="px-4 visible md:hidden ">
              <div className="  text-[24px] text-[#2B2B2B] font-bold  leading-[32px] font-mont text-center ">
                Create Your Podcast <br /> in Minutes with AI
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-[45.5px]">
            <p className="text-center hidden md:block text-lg leading-[32px] w-auto lg:w-[863px] font-britti   text-landing-grey">
             

              With our advanced AI technology, you can easily  generate
a custom podcast on any topic.  No recording or editing needed. 
Get your personalized audio content in just a few clicks.
            </p>
            <p className="text-center block  md:hidden text-sm leading-6  w-[350px] font-mont font-semibold  md:font-normal text-[#414141]">
            With our advanced AI technology, you can easily generate
a custom podcast on any topic. No recording or editing needed.
Get your personalized audio content in just a few clicks
            </p>
          </div>

          <div className="mt-12 flex justify-center mb-10 sm:mb-0 ">
              <button
              className=" bg-create-gradient flex items-center justify-center rounded-full h-10  md:h-[59px] w-[150px] md:w-[216px]  mt-3 border border-br-pink"
              onClick={() => {
                router.push("https://podcast.reers.tech/signup");
              }}
              style={{}}
              type="button"
            >
              <Image
                src="/landing/sparkle-1.svg"
                alt="card image"
                width={16}
                height={16}
                priority
              />
              <span className="ml-[6px] text-sm  md:text-lg text-white">
                Get Started
              </span>
            </button>
          </div>
        </div>
        <div className="flex justify-center gap-x-4 mb-10 overflow-x-scroll md:overflow-hidden w-full md:w-auto">
          <Image
            src="/landing/hero-image.svg"
            alt="placeholder"
            width={962}
            height={660}
            className="hidden md:block"
            priority
          />
          <Image
            src="/landing/hero-image.svg"
            alt="placeholder"
            width={350}
            height={200}
            className="block md:hidden"
            priority
          />
        </div>

        <div className="flex justify-center mx-auto">
          <p
            className="text-[#a9a9a8] text-justify w-[350px] md:w-[1100px] text-base md:text-3xl md
        leading-6  md:leading-[49px]"
          >
            Our AI-powered platform transforms your ideas into engaging
            podcasts. Whether you are curious about niche topics, want to share
            your expertise, or simply enjoy listening to unique content, Reers
            is for you. Just type a topic, and our AI generates a full podcast
            in minutes. No recording or editing needed. Explore subjects not
            covered elsewhere, or use our Station feature to get AI-hosted shows
            on current trends. From casual listeners to aspiring creators, Reers
            makes podcast creation and consumption effortless and accessible to
            all.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
