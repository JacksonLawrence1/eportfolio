'use client';

import "@/styling/themes.css";
import "./menuIcons.css";

import { useEffect, useState } from 'react';
import Link from "next/link";

// icons
import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from "react-icons/bs";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

import "@/styling/themes.css";
import "./menuIcons.css";

// declare the type of the props for the MenuIcon component
type MenuIconProps = {
  icon: React.ReactNode;
  tooltip: string;
};

const MenuIcon = ({ icon, tooltip }: MenuIconProps) => (
  <div className="menu-icon group">
    {icon}
    <span className="menu-tooltip group-hover:scale-100">{tooltip}</span>
  </div>
);

const MenuIcons = ({children} : {children : React.ReactNode}) => {
  const [currentTheme, setTheme] = useState("light");

  // change the theme based on the current theme (avoiding toggle so can have more than 2 themes)
  const changeTheme = () =>
    setTheme(currentTheme === "light" ? "dark" : "light");

  useEffect(() => {
    // set the theme based on the system theme
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    setTheme(systemTheme);
  }, []);

  // set the initial theme icon based on the current theme
  let themeIcon =
    currentTheme === "light" ? (
      <MdLightMode onClick={changeTheme} />
    ) : (
      <MdDarkMode onClick={changeTheme} />
    );

  return (
    <div className="bg-gradient-to-b from-bkg1 to-bkg2" data-theme={currentTheme}>
      {/* social media icons here */}
      <div className="flex absolute left-0 p-4 gap-4">
        <Link
          href="https://github.com/JacksonLawrence1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MenuIcon icon={<BsGithub />} tooltip="GitHub" />
        </Link>
      </div>
      {/* website cosmetics here, such as theming */}
      <div className="flex absolute right-0 p-4 gap-4">
        <MenuIcon icon={<BsFillVolumeUpFill />} tooltip="Sound" />
        <MenuIcon icon={themeIcon} tooltip="Theme" />
      </div>
      {children}
    </div>
  );
};

export default MenuIcons;
