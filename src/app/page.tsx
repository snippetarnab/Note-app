import { getuser } from "@/auth/sever";
import AskAIButton from "@/components/AskAIButton";
import NewNoteButton from "@/components/NewNoteButton";
import NoteTextInput from "@/components/NoteTextInput";
import { prisma } from "@/db/prisma";

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

async function page({ searchParams }: Props) {
  const noteIdParam = (await searchParams).noteId;
  const user = await getuser();
  const noteId = Array.isArray(noteIdParam) ? noteIdParam![0] : noteIdParam || "";
  const note = await prisma.note.findUnique({
    where:{
      id: noteId, authorId: user?.id
    },
  })
  return (
    <div className="flex h-full flex-col gap-4 items-center">
      <div className="flex max-w-4xl justify-end gap-2">
        <AskAIButton user={user} />
        <NewNoteButton user={user} />
      </div>
      <NoteTextInput noteId={noteId} startingNoteText={note?.text || ""} />
    </div>
  );
}

export default page;
