import * as React from "react";
import Image from "next/image";
import styles from "../dash.module.css"
import { useRouter } from "next/navigation";


export default function CreateButton() {
    const router = useRouter();
  return (
    <button
    className=" bg-create-gradient flex items-center justify-center rounded-full h-[42px] w-[93px]  border border-br-pink"
    onClick={() => {
        router.push("https://podcast.reers.tech/signup");} 
    }
   style={{
  
   }}
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
  );
}
