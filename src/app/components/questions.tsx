import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Questions() {
  const router = useRouter();

  const [currentFaq, setCurrentFaq] = React.useState(-1);

  const toggleFaq = (index: number) => {
    if (currentFaq === index) {
      setCurrentFaq(-1);
    } else {
      setCurrentFaq(index);
    }
  };

  const questions = [
    {
      question: "How does the AI create podcasts?",
      answer:
        "Our AI uses advanced natural language processing to generate a full podcast script based on your input topic. It then converts this script into audio using text-to-speech technology, creating a complete podcast episode without any need for recording or editing on your part.",
    },
    {
      question: "Can I customize the voice and tone?",
      answer:
        "Currently, our AI offers a standard voice for podcast generation. We're working on introducing voice customization options in future updates to provide more flexibility for our users.",
    },
    {
      question: "Can I publish directly to podcast platforms?",
      answer:
        "At the moment, podcasts generated on Reers are available within our platform. We're exploring options for direct publication to major podcast platforms in the future to expand distribution capabilities for our users.",
    },
    {
      question: "Do I need any podcasting experience?",
      answer:
        "No experience is needed! Reers is designed to make podcast creation accessible to everyone. Whether you're a curious listener or an aspiring creator, you can generate podcasts on any topic with just a simple text prompt.",
    },
  ];
  return (
    <div className="px-5 md:px-28 py-[200px] flex flex-col items-center">
      <div className="flex justify-start w-full">
        <h2 className=" text-sm md:text-4xl text-[#161C2D] font-bold font-britti text-left ml-2 md:ml-14">
          FAQ - Frequently Asked Questions
        </h2>
      </div>
      <div className=" flex flex-col w-auto md:w-[1068px] mt-8">
        {questions.map((question, index) => (
          <div key={index} className=" py-6 border-b border-b-gray-300">
            <div className="flex justify-between">
              <h4 className="text-[#120F0A] font-medium text-base md:text-2xl">
                {question.question}
              </h4>

              <Image
                src="/landing/plus-circle.svg"
                alt="card image"
                width={24}
                height={24}
                className="cursor-pointer ml-4"
                onClick={() => {
                  toggleFaq(index);
                }}
                priority
              />
            </div>
            {currentFaq === index && (
              <p className="mt-2 text-[#161C2D] text-sm leading-8 md:text-[19px] w-[350px] md:w-auto">
                {question.answer}
              </p>
            )}
          </div>
        ))}
      </div>

      <div className="w-[356px] md:w-[892px] h-fit bg-faq-background mt-[120px] rounded-[50px] mx-auto border-4 border-border-gradient p-5 md:p-16 flex flex-col items-center">
        <h3 className=" text-lg md:text-[56px] leading-8 md:leading-[64px] font-britti text-center font-bold">
          Ready to start your AI podcasting journey?
        </h3>

        <p className="mt-3 text-base font-britti text-[f9f9f6] text-center w-[350px] md:w-[475px]">
          Generate your own custom podcast in minutes. Simply enter a topic, and
          our AI will create engaging audio content for you. No recording or
          editing needed—just your ideas and our technology.
        </p>

        <button
          className=" bg-black flex items-center justify-center rounded-full h-[47px] w-[152px] mt-3 border border-br-pink"
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
          <span className="ml-[6px]  text-sm text-white">Create</span>
        </button>
      </div>
    </div>
  );
}
