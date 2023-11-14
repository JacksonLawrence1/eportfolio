// declare the type of the props for the MenuIcon component
import { IconType } from "react-icons";

import Icon from "./icon";
import { useState } from "react";

type ToggleProps = {
  onIcon: React.ReactNode;
  offIcon: React.ReactNode;
  onToggle: () => void;
  tooltip?: string;
  initial?: "on" | "off";
};

const Toggle = ({ onIcon, offIcon, onToggle, tooltip, initial = "on" }: ToggleProps) => {
  const [icon, setIcon] = useState(initial === "on" ? onIcon : offIcon);
  const [iconState, setIconState] = useState(initial === "on");

  const onChange = () => {
    // cannot compare icons directly, so compare a separate boolean state
    iconState ? setIcon(offIcon) : setIcon(onIcon);
    setIconState(!iconState);
    onToggle();
  };

  return <Icon icon={icon} onClick={onChange} tooltip={tooltip} />;
};

export default Toggle;
