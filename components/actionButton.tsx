"use client";
import React, { FC, ReactNode, MouseEvent } from "react";

interface ActionButtonProps {
  label: string;
  gradientColor: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const ActionButton: FC<ActionButtonProps> = ({
  label,
  gradientColor,
  onClick,
}) => {
  return (
    <button
      className="relative inline-flex items-center justify-center px-5 py-4 overflow-hidden tracking-tighter text-black bg-white rounded-lg group"
      onClick={onClick}
    >
      <span
        className={`absolute w-0 h-0 transition-all duration-500 ease-out bg-gradient-to-r ${gradientColor} h-[2px] w-3/4 blur-sm rounded-full group-hover:w-56 group-hover:h-56`}
      ></span>
      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-white"></span>
      <span className="relative font-bold">{label}</span>
    </button>
  );
};

export default ActionButton;
