"use client";

import React, { useEffect, useState } from "react";
import Hamburger from "hamburger-react";
import { IoLogoGameControllerB } from "react-icons/io";
import { usePathname } from "next/navigation";
import styles from "./styles/Navbar.module.css";
import NavbarLink from "./NavbarLink";

const BurgerMenu = ({
  toggled, // Determines the current state of the menu
  items, // The items to be displayed in the menu
}: {
  toggled: boolean;
  items: Post[];
}) => (
  // If the menu is toggled display the burger menu
  <>
    {toggled ? (
      <div className={styles.burgerMenu}>
        <NavbarLink href="/" text="Home" />
        <NavbarLink href="/reviews" text="Reviews" />
        <div className={`${styles.posts}`}>
          {items.map((item: Post) => (
            <NavbarLink
              key={item.id}
              href={`/${item.slug}`}
              text={item.title}
            />
          ))}
        </div>
      </div>
    ) : null}
  </>
);

const CalculateColors = (
  isOpen: boolean // Used to determine if the navbar menu is open
) => {
  // Initialise variables for allocation later
  let image, color, hamburger;

  // Get the current pathname (e.g. /sign-in, /dashboard)
  const pathname = usePathname();

  // For the index page
  if (pathname === "/") {
    color = isOpen ? "bg-[#FFEEC4]" : "bg-[#400404]";
    hamburger = isOpen ? "#171520" : "#FFEEC4";
  }

  // For every other page
  else {
    color = isOpen ? "bg-[#FFEEC4]" : "bg-[#171520]";
    hamburger = isOpen ? "#171520" : "#FFEEC4";
  }

  return { image, color, hamburger };
};

const NavbarClient = ({
  posts, // The most recent posts to be displayed in the Navbar menu
}: {
  posts: Post[];
}) => {
  const [isOpen, setOpen] = useState(false);
  const { color, hamburger } = CalculateColors(isOpen);

  /* useEffect hook to facilitate closing the menu whenever the
     window is resized */
  useEffect(() => {
    window.addEventListener("resize", () => setOpen(false));
  });

  /* useEffect hook to facilitate closing the menu whenever the
       window is scrolled */
  useEffect(() => {
    window.addEventListener("scroll", () => setOpen(false));
  });

  return (
    <nav className={`${color} px-3 flex justify-between items-center`}>
      <IoLogoGameControllerB size="40px" color={hamburger} />
      <div>
        <Hamburger toggled={isOpen} toggle={setOpen} color={hamburger} />
      </div>
      <BurgerMenu toggled={isOpen} items={posts} />
    </nav>
  );
};

export default NavbarClient;
