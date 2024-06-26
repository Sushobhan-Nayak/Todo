import { create } from "@/app/actions/todoActions";
import Button from "../ui/Button";
import Form from "../ui/Form";
import Input from "../ui/Input";

function AddTodo() {
  return (
    <Form classname="w-full m-auto" action={create}>
      <div className="flex gap-2">
        <Input name="input" type="text" placeholder="Add todo ..." />

        <Button type="submit" text="Add" />
      </div>
    </Form>
  );
}

export default AddTodo;
