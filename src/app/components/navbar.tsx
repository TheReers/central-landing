"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CreateButton from "../components/CreateButton";




function ResponsiveNav() {
  const pages = ["About", "FAQ", "Pricing", "Team"];
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
 

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };



  const router = useRouter();

  return (
    <AppBar
      position="static"
      className=""
      elevation={0}
      style={{ background: "transparent" }}
    >
      <Container maxWidth="xl" className="px-4 md:px-[100px] py-0 md:py-8">
        <Toolbar
          sx={{ display: "flex", justifyContent: "space-between", padding: 0 }}
        >
          <div>
            <a href="/" rel="noopener noreferrer">
              <Image
                src="/landing/reers-logo.svg"
                alt="reers Logo"
                width={97}
                height={35.79}
                priority
                className=" ml-0 md:ml-4"
              />
            </a>
          </div>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >

            <Image
              src="/dashboard/menu-icon.svg"
              alt="Hand Vector"
              width={32}
              height={33}
              onClick={handleOpenNavMenu}
              priority
            />
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                ml: "4",
                justifyContent: "center",
                width: "100vw",
              }}
            >
              {pages.map((page) => (
                <a
                  key={page}
                  href={`/${page}`}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <span className="font-britti px-4 capitalize text-base font-normal text-center">
                      {" "}
                      {page}{" "}
                    </span>
                  </MenuItem>
                </a>
              ))}
             
                <div
                  onClick={() => {
                   router.push("https://podcast.reers.tech/signup");
                  }}
                  className="w-full flex justify-center cursor-pointer text-primary font-semibold"
                >
                  Get Started
                </div>
            
              
              
            </Menu>
          </Box>

          <Box
            className="gap-16"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            {pages.map((page) => (
              <a
                className="flex"
                key={page}
                href={`/${page.toLowerCase()}`}
              >
                <Button
                  onClick={() => {
                  
                  }}
                  sx={{
                    my: 2,
                    color: "#19323C",
                    display: "block",
                    textTransform: "none",
                    fontSize: "16px",
                  }}
                 
                  className="font-britti capitalize font-medium"
                >
                  {page}
                </Button>
                {page === `Become a` && (
                  <Image
                    src="/Hero/outline-blue-chevron.svg"
                    alt="placeholder"
                    width={24}
                    height={24}
                    priority
                  />
                )}
              </a>
            ))}
          </Box>

          <div className="hidden md:flex gap-x-4">
           <CreateButton />
        
          </div>
        </Toolbar>
      
      </Container>
    </AppBar>
  );
}
export default ResponsiveNav;
