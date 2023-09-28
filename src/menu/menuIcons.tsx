import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from "react-icons/bs";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import "./menuIcons.css";
import Link from "next/link";

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

const MenuIcons = ({ theme }: { theme: [string, Function] }) => {
  const [currentTheme, setTheme] = theme;

  const changeTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
  
    setTheme(newTheme);
  };

  let themeIcon = currentTheme === "light" ? <MdLightMode onClick={changeTheme} /> : <MdDarkMode onClick={changeTheme} />;

  return (
    <>
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
    </>
  );
};

export default MenuIcons;
