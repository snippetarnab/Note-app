"use client";
import { User } from "@supabase/supabase-js";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from "uuid";
import { toast } from "sonner";
import { debounceTimeout } from "@/lib/constants";
import { createNoteAction } from "@/action/note";
type Props = {
  user: User | null;
};
function NewNoteButton({ user }: Props) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleClickNewNoteButton = async () => {
    if (!user) {
      router.push("/login");
    } else {
      setLoading(true);
      toast.success("Saving Current Note", {
        description: "Saving your current note before creating a new one",
        duration: 3000,
      });
      await new Promise((resolve) =>
        setTimeout(resolve, debounceTimeout + 500),
      );

      const uuid = uuidv4();
      await createNoteAction(uuid);
      router.push(`/?noteId=${uuid}`);

      toast.success("Note created", {
        description: "You have created a new note",
        duration: 3000,
      });
      setLoading(false);
    }
  };
  return (
    <Button
      onClick={handleClickNewNoteButton}
      variant="secondary"
      className="w-24"
      disabled={loading}
    >
      {loading ? <Loader2 className="animate-spin" /> : "New Note"}
    </Button>
  );
}

export default NewNoteButton;
