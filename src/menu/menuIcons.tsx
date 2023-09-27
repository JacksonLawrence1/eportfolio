import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from "react-icons/bs";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import "./menuIcons.css";

export default function MenuIcons() {
  const MenuIcon = (props: { icon: React.ReactNode, tooltip: string }): React.ReactNode => (
    <div className="menu-icon group">
      {props.icon}
      <span className="menu-tooltip group-hover:scale-100">{props.tooltip}</span>
    </div>
  );

  return (
    <div className="flex absolute right-0 p-4 gap-4">
      <MenuIcon icon={<BsFillVolumeUpFill />} tooltip="Sound" />
      <MenuIcon icon={<MdDarkMode />} tooltip="Theme" />
    </div>
  );
}
