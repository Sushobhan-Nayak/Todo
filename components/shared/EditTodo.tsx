"use client";

import { todoType } from "@/types/todoTypes";
import Button from "../ui/Button";
import { BiEdit } from "react-icons/bi";
import { useState } from "react";
import Input from "../ui/Input";
import Form from "../ui/Form";
import { edit } from "@/app/actions/todoActions";

export default function EditTodo({ todo }: { todo: todoType }) {
  const [editTodo, setEditTodo] = useState(false);
  const handleEdit = () => {
    if (todo.isCompleted === true) return;
    setEditTodo(!editTodo);
  };
  const handleSubmit = () => {
    setEditTodo(false);
  };
  return (
    <div className="flex gap-5 items-center">
      <Button onclick={handleEdit} text={<BiEdit></BiEdit>}></Button>
      {editTodo ? (
        <Form action={edit} onSubmit={handleSubmit}>
          <Input name="inputId" value={todo.id} type="hidden"></Input>
          <div className="flex justify-center">
            <Input
              type="text"
              name="newTitle"
              placeholder="Edit Todo ..."
            ></Input>

            <Button type="submit" text="save"></Button>
          </div>
        </Form>
      ) : null}
    </div>
  );
}
