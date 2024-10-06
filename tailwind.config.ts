import type { Config } from "tailwindcss";

const config: Config = {
  
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      colors:{
'alt-black':"#191919",
'br-pink':"rgba(224, 162, 219, 0.13)",
"t-grey":"rgba(135, 135, 135, 1)",
"pink":"rgba(224, 162, 219, 1)",
"landing-grey":'#878787',
"border-gradient":" linear-gradient(100.11deg, rgba(220, 234, 255, 0.2) 3.43%, #FE8F38 56.42%, rgba(248, 250, 255, 0.4) 94.66%)",

      },
      backgroundColor:{
        "text-gradient":"linear-gradient(289.33deg, #D85BF2 5.5%, #FE8F38 89.93%)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-conic-t": "url('https://res.cloudinary.com/dmd3luy1q/image/upload/v1724955423/images/qrb3uzx4ezzo8d8mw2yp.png')",
        "button-gradient":"linear-gradient(289.33deg, #D391E1 5.5%, #FFD9BB 89.93%)",
        "box-gradient":"linear-gradient(180deg, #F9F6F2 0%, #F2DAE3 100%)",
        "create-gradient":"linear-gradient(289.33deg, #D85BF2 5.5%, #FE8F38 89.93%)",
        "br-pink":"rgba(224, 162, 219, 0.13)",
        
        "pink-gradient":"linear-gradient(289.33deg, rgba(211, 145, 225, 0.07) 5.5%, rgba(255, 217, 187, 0.07) 89.93%)",
        "tab-gradient":"linear-gradient(289.33deg, #D391E1 5.5%, #FFD9BB 89.93%),linear-gradient(0deg, rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85))",
        "hover-gradient":" linear-gradient(289.33deg, rgba(249, 236, 249, 0.3) 5.5%, rgba(255, 243, 235, 0.3) 89.93%)",
        "faq-background": "linear-gradient(289.33deg, #D85BF2 5.5%, #FE8F38 89.93%)",
       

        
        
      },
      fontFamily: {
        britti: ['var(--font-britti)'],
      },
    },
  },
  plugins: [],
};
export default config;
