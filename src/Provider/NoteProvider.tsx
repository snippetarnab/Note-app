"use client";

import { createContext, useState } from "react";

type NoteProviderContextType = {
  noteText: string;
  setNoteText: (text: string) => void;
};

export const NoteProvideContext = createContext<NoteProviderContextType>({
  noteText: "",
  setNoteText: () => {},
});

 function NoteProvider({ children }: { children: React.ReactNode }) {
  const [noteText, setNoteText] = useState("");
  return (
    <NoteProvideContext.Provider value={{ noteText, setNoteText }}>
      {children}
    </NoteProvideContext.Provider>
  );
}

export default NoteProvider;
