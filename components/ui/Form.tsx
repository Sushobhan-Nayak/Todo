"use client";

import React, { ReactNode, useRef } from "react";

interface formProps {
  children: ReactNode;
  action: (formData: FormData) => Promise<void | boolean>;
  classname?: string;
  onSubmit?: () => void;
}
function Form({ children, action, classname, onSubmit }: formProps) {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <form
      className={classname}
      onSubmit={onSubmit}
      ref={ref}
      action={async (formData) => {
        await action(formData);
        ref.current?.reset();
      }}
    >
      {children}
    </form>
  );
}

export default Form;
