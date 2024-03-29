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
        className={clsx(
          actionButton && "bg-orange-700 rounded-full p-2 text-white",
          "bg-orange-700 text-white px-2"
        )}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
