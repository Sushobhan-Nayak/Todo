import AddTodo from "@/components/shared/AddTodo";
import Todo from "@/components/shared/Todo";
import prisma from "@/utils/prisma";

async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: { createdAt: "desc" },
  });
  return data;
}
const Home = async () => {
  const data = await getData();

  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-3xl font-extrabold uppercase text-white">
        Todo App
      </span>
      <h1 className="text-3xl font-extrabold uppercase mb-5 text-white">
        Next.js 14 <span className="ml-2 text-yellow-200">Server Actions</span>
      </h1>
      <div className="flex items-center flex-col justify-center w-[1000px]">
        <AddTodo></AddTodo>
        <div className="flex flex-col gap-5 w-full mt-10 justify-center items-center">
          {data.map((todo, id) => (
            <div key={id} className="w-full">
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
