import { todoType } from "@/types/todoTypes";
import ChangeTodo from "./ChangeTodo";
import EditTodo from "./EditTodo";
import { DeleteTodo } from "./DeleteTodo";

function Todo({ todo }: { todo: todoType }) {
  const todoStyle = {
    textDecoration: todo.isCompleted === true ? "line-through" : "none",
    opacity: todo.isCompleted === true ? 0.5 : 1,
  };
  return (
    <div
      className="w-3/5 md:w-screen flex items-center justify-center md:justify-between md:space-x-8 bg-white py-3 px-2 rounded-2xl"
      style={todoStyle}
    >
      <div className="hidden md:block">
        <ChangeTodo todo={todo}></ChangeTodo>
      </div>
      <span className="text-center font-bold uppercase text-sm md:text-xl">
        {todo.title && todo.title.length > 10
          ? todo.title?.substring(1, 10) + "..."
          : todo.title}
      </span>
      <div className="md:flex items-center gap-5 hidden">
        <EditTodo todo={todo}></EditTodo>
        <DeleteTodo todo={todo}></DeleteTodo>
      </div>
    </div>
  );
}

export default Todo;
