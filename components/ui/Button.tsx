"use client";

import clsx from "clsx";
import { ReactNode } from "react";

interface buttonProps {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onclick?: () => void;
  actionButton?: boolean;
}
function Button({ type, text, onclick, actionButton }: buttonProps) {
  return (
    <>
      <button
        onClick={onclick}
        type={type}
        className={
          actionButton === true
            ? "bg-orange-700 rounded-full text-white p-2"
            : "bg-green-600 text-white p-2 rounded-sm"
        }
      >
        {text}
      </button>
    </>
  );
}

export default Button;
