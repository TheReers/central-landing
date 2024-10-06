"use client";
import React, { FC, ReactElement } from "react";
import { Box, Container, Grid} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer: FC<{ className?: string }> = ({ className }): ReactElement => {
  const router = useRouter();
  return (
    
    <div className={`flex justify-center bg-[#f6f1e1] ${className}`}>
      <Box
        sx={{
          width: "100%",
          height: { xs: "auto", md: 250 },
          backgroundColor: "#fff",
          paddingTop: "1rem",
          paddingBottom: "1rem",

          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        style={{ maxWidth: 1440 }}
      >
        <Container
          maxWidth="xl"
          disableGutters={true}
          sx={{
            padding: { md: "20px 100px 20px 100px", sm: "0 16px 0 16px" },
          }}
        >
          <Grid
            container
            justifyContent={"space-between"}
            direction="row"
            alignItems="center"
            className="py-5 md:py-10"
          >
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "space-between" },
                mt: { xs: 5, md: 0 },
              }}
            >
              <div>

              <a href="/" rel="noopener noreferrer">
              <Image
                src="/landing/reers-logo.svg"
                alt="reers Logo"
                width={97}
                height={35.79}
                priority
                className="  mb-5"
              />
            </a>  

                <span className="font-mont mt-5 text-[#575757] text-center md:text--left text-sm font-semibold leading-5">
                  Empowering Creators.
                  <br />
                  Enriching Learners.
                </span>
              </div>


            </Grid>

            <Grid item xs={12} md={4} className="w-full block mt-7 md:mt-0">
              <div className="flex justify-center  md:justify-end gap-8 ">
 
              </div>
            </Grid>
          </Grid>
          <div className="px-4 md:px-0">
            <hr
              className=" h-[1px] md:h-[2px]"
              color="#979797"
              style={{ background: "rgba(120, 137, 165, 0.1)" }}
            />
          </div>
          <Grid
            container
            justifyContent={"space-between"}
            direction="row"
            alignItems="center"
            className="py-4"
          >
            <Grid
              item
              xs={12}
              md={4}
              className="w-full block md:hidden "
              sx={{ mt: 5, mb: { xs: 2, md: 5 } }}
            >
              <div className="flex justify-center  md:justify-end gap-8 ">
           
              <div   
              className="cursor-pointer" 
              onClick={() => {
                   router.push("/privacy");
                  }}>
                  <span className="font-britti text-[12px] text-black">Privacy</span>
                </div>
                <Image
            src="/landing/footer-dot.svg"
            alt="card image"
            width={5}
            height={16}
            priority
          />
                <div className="cursor-pointer"   
                onClick={() => {
                   router.push("/terms");
                  }}>
                <span className="font-britti text-[12px] text-black">Terms & Conditions</span>
                </div>
                <Image
            src="/landing/footer-dot.svg"
            alt="card image"
            width={5}
            height={16}
            priority
          />
                <div
                className="cursor-pointer" 
                  onClick={() => {
                    router.push("/signup");
                   }}>
                <span className="font-britti text-[12px] text-black">Disclaimer</span>
                </div>
              </div>
              
            </Grid>

            <Grid item xs={12} md={4} className="w-full hidden md:block">
              <div className="flex  gap-4 ">
              <div   
              className="cursor-pointer" 
              onClick={() => {
                   router.push("/privacy");
                  }}>
                  <span className="font-britti text-[12px] text-black">Privacy</span>
                </div>
                <Image
            src="/landing/footer-dot.svg"
            alt="card image"
            width={5}
            height={16}
            priority
          />
                <div className="cursor-pointer"   
                onClick={() => {
                   router.push("/terms");
                  }}>
                <span className="font-britti text-[12px] text-black">Terms & Conditions</span>
                </div>
                <Image
            src="/landing/footer-dot.svg"
            alt="card image"
            width={5}
            height={16}
            priority
          />
                <div
                className="cursor-pointer" 
                  onClick={() => {
                    router.push("/signup");
                   }}>
                <span className="font-britti text-[12px] text-black">Disclaimer</span>
                </div>
              </div>
            </Grid>

            <Grid
              item
              xs={12}
              md={4}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
              }}
            >
              <div>
                <span className="font-mont text-black text-[12px] font-semibold leading-5">
                  {` © ${new Date().getFullYear()} Reers - All rights reserved. `}
                </span>
              </div>
            </Grid>
          </Grid>
        </Container>

       
      </Box>
    </div>
  );
};

export default Footer;
