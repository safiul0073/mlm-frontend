import Icon from "@ant-design/icons";
import React from "react";
export interface ButtonProps {
  type?: "submit" | "button" | "reset";
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
}
export const Button: React.FC<ButtonProps> = ({
  type = "submit",
  children,
  className = "",
  onClick,
  disabled = false,
  loading = false,
}) => {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      onClick={onClick}
      className={`bg-gradient-to-r from-[#e52e71] to-[#ff8a00] inline-flex items-center justify-center h-10 rounded-full text-white text-base font-medium px-5 whitespace-nowrap ${className}`}
    >
      {loading ? (
        <div className="flex items-center">
          <Icon spin={true} />
          <span className="ml-2">Loading...</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};
