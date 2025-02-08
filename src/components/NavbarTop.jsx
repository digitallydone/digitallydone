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
    { name: "Contact us", link: "/contact" },
  ];

  const menuList = (
    <>
      {menuItems.map((item, index) => (
        <Link
          key={`${item}-${index}`}
          // className="w-full p-2 text-xs font-bold capitalize text-copy"
          className="hover:text-gray-400"
          href={item.link}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {item.name}
        </Link>
      ))}
    </>
  );

  return (
    <header
      className={`top-0 z-50 w-full text-copy ${pathname === "/" && "text-white"} `}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-3xl font-bold">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="DIGIDON "
              className={`h-20 ${pathname !== "/" &&  "opacity-80 brightness-0 filter dark:filter-none"} `}
            />
            {/* DIGIDON */}
          </Link>
        </div>
        {/* Desktop Menu */}
        <nav className="hidden space-x-6 md:flex">{menuList}</nav>

        {/* Mobile Menu Button */}
        <button
          className="block text-2xl md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center space-y-6 bg-gray-900 bg-opacity-90 text-center text-2xl md:hidden"
          onClick={handleOverlayClick}
        >
          {menuList}
        </div>
      )}
    </header>
  );
}
