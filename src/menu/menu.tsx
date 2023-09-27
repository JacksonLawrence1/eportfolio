import "./menu.css";
import MenuIcons from "./menuIcons";

export default function Menu() {
  return (
    <>
      <MenuIcons />
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col text-center mb-24 font-roboto">
          <h1 className="text-9xl mb-12">Title</h1>
          <div className="flex flex-col gap-12 text-5xl">
            <h1 className="menu-text-hover">Start</h1> 
            <h1 className="menu-text-hover">About</h1>
          </div>
        </div>
      </div>
    </>
  );
}
