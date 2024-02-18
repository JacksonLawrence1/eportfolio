'use client'

import Link from "next/link";
import ConditionalWrapper from "./conditionalWrapper";

type Icon = {
  icon: React.ReactNode;
  onClick?: () => void;
  tooltip?: string;
  link?: string;
  hidden?: boolean;
};

const linkElement = (children: React.ReactNode, link?: string): React.ReactNode => {
  return (
    link &&
    // external links open in new tab
    (link[0] !== "/" ? (
      <Link href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </Link>
    ) : (
      <Link href={link}>{children}</Link>
    ))
  );
};

const Icon = ({ icon, onClick, tooltip, link, hidden }: Icon) => {
  const onClickHandler = () => {
    if (onClick) {
      onClick();
    }
  };

  const visible: string = `${hidden ? "hidden" : ""}`;
  return (
    <div className={visible}>
      {/* wrap with a link component if one has been provided */}
      <ConditionalWrapper
        condition={link !== undefined}
        wrapper={(children) => linkElement(children, link)}
      >
        <div className="icon group" onClick={onClickHandler}>
          {icon}
          {tooltip && (
            <span className="icon-tooltip group-hover:scale-100">
              {tooltip}
            </span>
          )}
        </div>
      </ConditionalWrapper>
    </div>
  );
};

export default Icon;
