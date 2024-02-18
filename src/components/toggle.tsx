// declare the type of the props for the MenuIcon component
import Icon from "./icon";
import { useEffect, useState } from "react";

type ToggleProps = {
  onIcon: React.ReactNode;
  offIcon: React.ReactNode;
  onToggle: () => void;
  tooltip?: string;
  initial?: string;
  hidden?: boolean;
};

const Toggle = ({ onIcon, offIcon, onToggle, tooltip, initial = "on", hidden }: ToggleProps) => {
  const [icon, setIcon] = useState(initial === "on" ? onIcon : offIcon);
  const [iconState, setIconState] = useState(initial === "on");

  const onChange = () => {
    // cannot compare icons directly, so compare a separate boolean state
    iconState ? setIcon(offIcon) : setIcon(onIcon);
    setIconState(!iconState);
    onToggle();
  };

  // update icon once updated from local storage
  useEffect(() => {
    setIcon(initial === "on" ? onIcon : offIcon);
    setIconState(initial === "on");
  }, [initial]);

  return <Icon icon={icon} onClick={onChange} tooltip={tooltip} hidden={hidden} />;
};

export default Toggle;
