"use server";

import { getuser } from "@/auth/sever";
import { prisma } from "@/db/prisma";
import { handleError } from "@/lib/utils";

export const createNoteAction = async (noteId: string) => {
  try {
    const user = await getuser();
    if (!user) throw new Error("You must logged in to create a note");
    await prisma.note.create({
      data: {
        id: noteId,
        text: "",
        authorId: user.id,
      },
    });
  } catch (error) {
    return handleError(error);
  }
};
export const updateNoteAction = async (noteId: string, text: string) => {
  try {
    const user = await getuser();
    if (!user) throw new Error("You must logged in to update a note");
    await prisma.note.update({
      where: { id: noteId },
      data: { text },
    });
  } catch (error) {
    return handleError(error);
  }
};
export const deleteNoteAction = async (noteId: string) => {
  try {
    const user = await getuser();
    if (!user) throw new Error("You must logged into delete a note");
    await prisma.note.delete({
      where: { id: noteId, authorId: user.id },
    });
  } catch (error) {
    return handleError(error);
  }
};
