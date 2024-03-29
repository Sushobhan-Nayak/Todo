"use client";

import { todoType } from "@/types/todoTypes";
import Form from "../ui/Form";
import { deleteTodo } from "@/app/actions/todoActions";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { BsFillTrashFill } from "react-icons/bs";

export const DeleteTodo = ({ todo }: { todo: todoType }) => {
  return (
    <Form action={deleteTodo}>
      <Input name="inputId" value={todo.id} type="hidden"></Input>
      <Button
        actionButton={true}
        text={<BsFillTrashFill />}
        type="submit"
      ></Button>
    </Form>
  );
};
