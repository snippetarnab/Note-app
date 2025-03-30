"use client";

import { NoteProvideContext } from "@/Provider/NoteProvider";
import { useContext } from "react";

function useNote() {
  const context = useContext(NoteProvideContext);
  if (!context) throw new Error("useNote must be used within a NoteProvider.");
  return context;
}

export default useNote;
