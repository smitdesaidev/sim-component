import React, { PropsWithChildren } from "react";
import "../../styles/global.css";
import classNames from "classnames";

export interface ButtonProps extends PropsWithChildren {
  /**
   * Is this the principal call to action on the page?
   */
  type?: "primary" | "secondary";
  /**
   * What background color to use
   */
  textColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Optional click handler
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  type = "primary",
  textColor,
  size = "medium",
  onClick,
  children,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={classNames(
        "inline-flex items-center justify-center rounded-md border transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        { "font-small px-5 h-8": size === "small" },
        { "font-medium px-6 h-12 ": size === "medium" },
        { "font-semibold px-8 h-14": size === "large" },

        { "text-white bg-black border-slate-800": type === "primary" },
        { "text-gray-900 bg-white border-slate-400": type === "secondary" }
      )}
      style={textColor ? { color: textColor } : {}}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
