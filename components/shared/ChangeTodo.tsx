import { todoType } from "@/types/todoTypes";
import React from "react";
import Form from "../ui/Form";
import Input from "../ui/Input";
import { AiOutlineCheckCircle } from "react-icons/ai";
import Button from "../ui/Button";
import { changeStatus } from "@/app/actions/todoActions";

function ChangeTodo({ todo }: { todo: todoType }) {
  return (
    <Form action={changeStatus}>
      <Input name="inputId" value={todo.id} type="hidden" />
      <Button
        actionButton
        type="submit"
        text={<AiOutlineCheckCircle />}
      ></Button>
    </Form>
  );
}

export default ChangeTodo;
