"use client";

import { useEffect, useState } from "react";

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
  const [currentTheme, setTheme] = useState("light");
  const [sound, setSound] = useState(true); // TODO: implement sound
  const [effects, setEffects] = useState(true); // TODO: implement effects
  const [initialTheme, setInitialTheme] = useState("on");

  // change the theme based on the current theme (avoiding toggle so can have more than 2 themes)
  const changeTheme = () => {
    let theme = currentTheme === "light" ? "dark" : "light";

    setTheme(theme);

    if (typeof window !== 'undefined') {
      localStorage.setItem("theme", theme);
    }
  }

  // get theme from local storage if it exists
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // get theme from local storage if it exists, try to match system theme
      let theme = localStorage.getItem("theme") || window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      if (theme) {
        setTheme(theme);
        setInitialTheme(theme === "light" ? "on" : "off");
      }
    }
  }, []);
  
  const changeSound = () => setSound(!sound);
  const changeEffects = () => setEffects(!effects);

  return (
    <div data-theme={currentTheme} className="z-50">
      {/* social media icons here */}
      <div className="flex absolute left-0 p-4 gap-4">
        <Icon icon={<AiFillHome />} link="/home" tooltip="Home" />
        <Icon icon={<BiSolidRocket />} link="/landing" tooltip="Landing" />
      </div>
      {/* website cosmetics here, such as theming */}
      <div className="flex absolute right-0 p-4 gap-4">
        <Toggle
          onIcon={<IoIosFlash />}
          offIcon={<IoIosFlashOff />}
          tooltip="Effects (WIP)"
          onToggle={changeEffects}
        />
        <Toggle
          onIcon={<BsFillVolumeUpFill />}
          offIcon={<BsFillVolumeMuteFill />}
          tooltip="Sound (WIP)"
          onToggle={changeSound}
        />
        <Toggle
          onIcon={<MdLightMode />}
          offIcon={<MdDarkMode />}
          tooltip="Theme"
          onToggle={changeTheme}
          initial={initialTheme}
        />
      </div>
      {children}
    </div>
  );
};

export default MenuIcons;
