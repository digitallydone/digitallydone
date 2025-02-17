// "use client";
// import {
//   Button,
//   Image,
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   NavbarMenu,
//   NavbarMenuItem,
//   NavbarMenuToggle,
// } from "@nextui-org/react";
// import React from "react";
// import DarkModeToggle from "./DarkModeToggle";
// import Link from "next/link";

// const NavbarTop = () => {
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

// const menuItems = [
//   { name: "Home", link: "/" },
//   { name: "About us", link: "/about-us" },
//   { name: "Portfolio", link: "/portfolio" },
//   { name: "Services", link: "/services" },
//   { name: "Contact us", link: "/contact" },
// ];

// const menuList = (
//   <>
//     {menuItems.map((item, index) => (
//       <NavbarMenuItem key={`${item}-${index}`}>
//         <Link
//           className="w-full p-2 text-xs font-bold capitalize text-copy"
//           href={item.link}
//           onclick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           {item.name}
//         </Link>
//       </NavbarMenuItem>
//     ))}
//   </>
// );

//   return (
//     <Navbar
//       position="static"
//       className="bg-transparent"
//       maxWidth="xl"
//       onMenuOpenChange={setIsMenuOpen}
//     >
//       <NavbarContent>
//         <NavbarBrand>
//           <Link href="/" className="text-xl font-bold">
//             {/* LOGO */}
//             {/* <Image
//               src="/assets/logo.png"
//               width={50}
//               alt="Silicon Star Hub Ltd logo"
//               className="opacity-80 brightness-0 filter dark:filter-none"
//             /> */} Silicon Star Hub
//           </Link>
//         </NavbarBrand>
//       </NavbarContent>

//       <NavbarContent className="hidden gap-4 sm:flex" justify="end">
//         {menuList}
//       </NavbarContent>

//       <NavbarContent justify="end sm:hidden">
//         <NavbarMenuToggle
//           aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//           className="sm:hidden"
//         />
//       </NavbarContent>
//       <NavbarMenu className="bg-background">
//         {menuList}
//       </NavbarMenu>
//     </Navbar>
//   );
// };

// export default NavbarTop;

"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { Image } from "@nextui-org/react";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target.id === "mobile-menu-overlay") {
      setIsMenuOpen(false);
    }
  };

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/about-us" },
    { name: "Services", link: "/services" },
    { name: "our Work", link: "/our-work" },
    // { name: "Contact us", link: "/contact" },
  ];

  const menuList = (
    <>
      {menuItems.map((item, index) => (
        <Link
          key={`${item}-${index}`}
          className="font-semibold capitalize hover:text-gray-400"
          href={item.link}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {item.name}
        </Link>
      ))}
    </>
  );

  return (
    <>
      <header className="fixed z-50 w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold">
              {" "}
              <Link href="/">
                <Image
                  src="/assets/logo.png"
                  alt="DIGIDON "
                  className={`h-10 ${pathname !== "/" && "opacity-80 brightness-0 filter dark:filter-none"} `}
                />
                {/* DIGIDON */}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden space-x-8 md:flex">{menuList}</div>

            <Link href="#contact" className="hidden rounded-full bg-white px-6 py-2 font-semibold text-purple-600 transition-colors hover:bg-gray-100 md:block">
              Get Started
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`transition-all duration-300 md:hidden ${isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
          >
            <div className="space-y-3 pb-3 pt-4 flex flex-col">
              {menuList}
              <button className="w-full rounded-full bg-white px-6 py-2 font-semibold text-purple-600 transition-colors hover:bg-gray-100">
                Get Started
              </button>
            </div>
          </div>
        </nav>
      </header>

    </>
  );
}
