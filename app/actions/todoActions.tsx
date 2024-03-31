"use server";

import prisma from "@/utils/prisma";
import { auth } from "@clerk/nextjs";
import { getAuth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { toast } from "sonner";

export async function create(formData: FormData) {
  const input = formData.get("input")?.toString();
  const { userId } = auth();

  if (!userId) {
    return;
  }
  if (!input?.trim()) {
    return;
  }
  await prisma.todo.create({
    data: {
      title: input,
      user: userId,
    },
  });
  revalidatePath("/");
}

export async function changeStatus(formData: FormData) {
  const inputId = formData.get("inputId") as string;
  const todo = await prisma.todo.findUnique({
    where: { id: inputId },
  });
  if (!todo) return;
  const updatedStatus = !todo?.isCompleted;
  await prisma.todo.update({
    where: { id: inputId },
    data: { isCompleted: updatedStatus },
  });
  revalidatePath("/");
  return updatedStatus;
}

export async function edit(formData: FormData) {
  const input = formData.get("newTitle") as string;
  const inputId = formData.get("inputId") as string;
  await prisma.todo.update({ where: { id: inputId }, data: { title: input } });
  revalidatePath("/");
}

export async function deleteTodo(formData: FormData) {
  const inputId = formData.get("inputId") as string;
  await prisma.todo.delete({ where: { id: inputId } });
  revalidatePath("/");
}
