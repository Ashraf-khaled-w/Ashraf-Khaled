import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function NavElement({
  className: propClassName = "",
  children,
  path = "",
  text,
  showTextInitially = false,
  ...rest
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <NavLink
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        to={`${path}`}
        className={({ isActive }) => {
          const baseStructuralClasses =
            "block text-center transition-all duration-300 ease-in-out";
          let classes = `${propClassName} ${baseStructuralClasses}`;

          if (!propClassName.includes("text-")) {
            classes += " text-lg";
          }

          if (!propClassName.match(/py-\d+/)) {
            classes += " py-2";
          }
          if (!propClassName.match(/px-\d+/)) {
            classes += isHovered ? " px-3" : " px-1"; // Desktop hover padding
          }

          if (isActive) {
            classes += " text-white opacity-100";
          } else {
            classes += ` text-white ${
              isHovered || showTextInitially ? "opacity-100" : "opacity-80"
            }`;
          }
          return classes.trim().replace(/\s+/g, " ");
        }}
        {...rest}
      >
        {!showTextInitially &&
          React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                className: `${
                  child.props.className || ""
                } transition-transform duration-300 ease-in-out ${
                  isHovered ? "-translate-x-1" : "translate-x-0"
                }`,
              });
            }
            return child;
          })}
        {text && (
          <span
            className={`inline-block origin-left transition-all duration-600 ease-in-out ${
              showTextInitially ? "ml-0" : "ml-1 delay-75"
            } ${
              !isHovered && !showTextInitially
                ? "opacity-0 scale-x-0 -translate-x-2 pointer-events-none"
                : "opacity-100 scale-x-100 translate-x-0 pointer-events-auto "
            }`}
          >
            {text}
          </span>
        )}
      </NavLink>
    </>
  );
}

export default NavElement;
