import * as React from "react";
import Image from "next/image";



export default function GuideSection() {
  return (
   <div className="bg-[#F6F1EA] py-20 px-6 md:p-20 flex flex-col items-center justify-center mt-20 ">
    <div className="flex flex-col items-center"> 
        <h3 className="font-britti text-base md:text-4xl text-[#161C2D] text-center font-semibold">How to create your first AI podcast</h3>

        <p className="mt-[17px] text-[#161C2D] text-sm md:text-[19px] text-center w-[350px] md:w-[623px]">Follow these easy steps to create and launch your very first AI-generated  podcast in minutes.</p>

        <div className="mt-[83px] flex flex-col md:flex-row gap-x-[103px]">
            <div className="w-full md:w-[404px] flex flex-col gap-y-[30px]">
                <div className="flex gap-x-[22px] items-start">
                <Image
            src="/landing/step-1.svg"
            alt="placeholder"
            width={43}
            height={43}
            className="block "
            priority
          />

                    <div className="">
                        <h4 className="font-bold font-britti text-black text-base md:text-[21px]">Craft Your Prompt</h4>

                    <span className="font-britti text-sm md:text-[17px] text-black mt-[10px]">Describe your podcast idea in a few clear, descriptive words.</span>
                    </div>
                    
                </div>
                <div className="flex gap-x-[22px] items-start">
                <Image
            src="/landing/step-2.svg"
            alt="placeholder"
            width={43}
            height={43}
            className="block "
            priority
          />

                    <div className="">
                        <h4 className="font-bold font-britti text-black text-base md:text-[21px]">Generate Instantly</h4>

                    <span className="font-britti text-sm md:text-[17px] text-black mt-[10px]">Click and let the AI effortlessly generate your podcast content for you.</span>
                    </div>
                    
                </div>
                <div className="flex gap-x-[22px] items-start">
                <Image
            src="/landing/step-3.svg"
            alt="placeholder"
            width={43}
            height={43}
            className="block "
            priority
          />

<div className="">
                        <h4 className="font-bold font-britti text-black text-base md:text-[21px]">Ready to Listen</h4>

                    <span className="font-britti text-sm md:text-[17px] text-black mt-[10px]">Wait just a moment—your complete podcast is almost ready to enjoy!</span>
                    </div>
                    
                </div>
            </div>
            <div className="">
            <Image
            src="/landing/stack-image.svg"
            alt="placeholder"
            width={479}
            height={329}
            className="hidden md:block "
            priority
          />
            </div>
        </div>
    </div>
   </div>
  );
}
