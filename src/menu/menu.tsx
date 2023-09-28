"use client"

import "./menu.css";
import "../styling/themes.css";
import MenuIcons from "./menuIcons";
import { useState } from "react";

export default function Menu() {
  const theme = useState("light");


  return (

    <div className="bg-gradient-to-b from-bkg1 to-bkg2" data-theme={theme[0]}>
      <MenuIcons theme={theme} />
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col text-center mb-24 font-roboto">
          <h1 className="text-9xl mb-12">Title</h1>
          <div className="flex flex-col gap-12 text-5xl">
            <h1 className="menu-text-hover animate-pulse">Start</h1> 
          </div>
        </div>
      </div>
    </div>
  );
}
