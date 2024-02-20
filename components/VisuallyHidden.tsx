"use client";
import React, { ReactNode } from "react";

interface VisuallyHiddenProps {
  children: ReactNode;
}

// These styles will make sure the component
// is not visible, but will still be announced
// by screen readers.
//
// Adding “display: none” would hide the
// element from ALL users, including those
// using screen-readers.

const VisuallyHidden = ({ children }: VisuallyHiddenProps) => {
  return (
    <span className="inline-block absolute overflow-hidden h-1 w-1 m-[-1px] p-0 border-0">
      {children}
    </span>
  );
};

export default VisuallyHidden;
