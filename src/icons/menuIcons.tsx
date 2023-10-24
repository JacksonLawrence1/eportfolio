'use client';

import "@/styling/themes.css";

import { useEffect, useState } from 'react';
import Link from "next/link";

// icons
import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from "react-icons/bs";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { BiSolidRocket } from "react-icons/bi";

import "@/styling/themes.css";

// declare the type of the props for the MenuIcon component
type MenuIconProps = {
  icon: React.ReactNode;
  tooltip: string;
};

const MenuIcon = ({ icon, tooltip }: MenuIconProps) => (
  <div className="icon group">
    {icon}
    <span className="icon-tooltip group-hover:scale-100">{tooltip}</span>
  </div>
);

const MenuIcons = ({children} : {children : React.ReactNode}) => {
  const [currentTheme, setTheme] = useState("light");
  const [sound, setSound] = useState(true); // TODO: implement sound

  // change the theme based on the current theme (avoiding toggle so can have more than 2 themes)
  const changeTheme = () =>
    setTheme(currentTheme === "light" ? "dark" : "light");

  const changeSound = () => setSound(!sound);

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

  let soundIcon = sound ? (
    <BsFillVolumeUpFill onClick={changeSound} />
  ) : (
    <BsFillVolumeMuteFill onClick={changeSound} />
  );

  return (
    <div className="bg-gradient-to-b from-bkg1 to-bkg2" data-theme={currentTheme}>
      {/* social media icons here */}
      <div className="flex absolute left-0 p-4 gap-4">
        <Link href="/home">
          <MenuIcon icon={<AiFillHome />} tooltip="Home" />
        </Link>
        <Link href="/landing">
          <MenuIcon icon={<BiSolidRocket />} tooltip="Landing" />
        </Link>
      </div>
      {/* website cosmetics here, such as theming */}
      <div className="flex absolute right-0 p-4 gap-4">
        <MenuIcon icon={soundIcon} tooltip="Sound" />
        <MenuIcon icon={themeIcon} tooltip="Theme" />
      </div>
      {children}
    </div>
  );
};

export default MenuIcons;
