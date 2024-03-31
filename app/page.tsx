import AddTodo from "@/components/shared/AddTodo";
import Todo from "@/components/shared/Todo";
import prisma from "@/utils/prisma";
import { auth, useAuth } from "@clerk/nextjs";

async function getData() {
  const { userId } = auth();
  const data = await prisma.todo.findMany({
    where: {
      user: userId,
    },
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
    <div className="w-4/5 py-20 flex justify-center flex-col items-center space-y-5">
      <div className="flex flex-col md:flex-row md:space-x-2">
        <span className="text-xl md:text-3xl font-extrabold uppercase text-white">
          Todo App
        </span>
        <span className="text-xl md:text-3xl font-extrabold uppercase text-white">
          Next.js 14
        </span>
      </div>

      <div className="flex items-center flex-col justify-center w-3/5">
        <AddTodo></AddTodo>
        <div className="flex flex-col gap-5 w-full mt-10 justify-center items-center">
          {data.map((todo, id) => (
            <div key={id} className="w-[250px] md:w-full flex justify-center">
              <Todo todo={todo} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
