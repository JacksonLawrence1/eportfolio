"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// icons
import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from "react-icons/bs";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { BiSolidRocket } from "react-icons/bi";
import { IoIosFlash, IoIosFlashOff } from "react-icons/io";

import Icon from "@/components/icon";
import Toggle from "@/components/toggle";

import "@/styling/themes.css";


const MenuIcons = ({ children }: { children: React.ReactNode }) => {
  const [currentTheme, setTheme] = useState("light"); // TODO: get initial theme from local storage or check system theme if available
  const [sound, setSound] = useState(true); // TODO: implement sound
  const [effects, setEffects] = useState(true); // TODO: implement effects

  // change the theme based on the current theme (avoiding toggle so can have more than 2 themes)
  const changeTheme = () => setTheme(currentTheme === "light" ? "dark" : "light");
  const changeSound = () => setSound(!sound);
  const changeEffects = () => setEffects(!effects);

  return (
    <div
      className="bg-gradient-to-b from-bkg1 to-bkg2"
      data-theme={currentTheme}
    >
      {/* social media icons here */}
      <div className="flex absolute left-0 p-4 gap-4">
        <Icon icon={<AiFillHome />} link="/home" tooltip="Home" />
        <Icon icon={<BiSolidRocket />} link="/landing" tooltip="Landing" />
      </div>
      {/* website cosmetics here, such as theming */}
      <div className="flex absolute right-0 p-4 gap-4">
        <Toggle onIcon={<IoIosFlash />} offIcon={<IoIosFlashOff />} tooltip="Effects (WIP)" onToggle={changeEffects} />
        <Toggle onIcon={<BsFillVolumeUpFill />} offIcon={<BsFillVolumeMuteFill />} tooltip="Sound (WIP)" onToggle={changeSound} />
        <Toggle onIcon={<MdLightMode />} offIcon={<MdDarkMode />} tooltip="Theme" onToggle={changeTheme} initial={currentTheme === "light" ? "on" : "off"} />
      </div>
      {children}
    </div>
  );
};

export default MenuIcons;
