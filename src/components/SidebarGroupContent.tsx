"use client";

import { Note } from "@prisma/client";

type Props = {
  notes: Note[];
};

function SidebarGroupContent({ notes }: Props) {
  console.log(notes);

  return <div>Your note here</div>;
}

export default SidebarGroupContent;
