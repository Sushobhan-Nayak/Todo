import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center w-4/5 h-screen space-y-10">
      <h1 className="text-white text-3xl font-semibold">
        Todo App using NextJs 14
      </h1>
      <SignUp />
    </div>
  );
}
