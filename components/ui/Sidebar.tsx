"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import Loader from "./Loader";

export default function Sidebar() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex flex-col justify-center items-center h-screen w-1/5">
        <Loader />
      </div>
    );
  }
  return (
    <div className="w-2/5 md:w-1/5 flex flex-col h-screen justify-center items-center bg-neutral-800 text-white space-y-4">
      <div className="flex flex-col p-2 items-center">
        <span className="text-xl md:text-3xl">Hello,</span>
        <span className="font-semibold md:text-2xl text-center">
          {user?.fullName?.toUpperCase()}
        </span>
      </div>
      <div className="ring-white ring-1 rounded-full p-1">
        <UserButton
          appearance={{
            elements: {
              avatarBox: "h-[80px] w-[80px]",
            },
          }}
        />
      </div>
    </div>
  );
}
