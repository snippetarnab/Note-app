"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { logOutAction } from "@/action/user";
function LogOutButton() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handleLogout = async () => {
    setLoading(true);
    const { errorMessage } = await logOutAction();
    if (!errorMessage) {
      toast.success("Logout", {
        description: "You have logged out successfully",
        duration: 5000,
      });
      router.push("/");
    } else {
      toast.error(errorMessage, {
        description: "Something went wrong",
        duration: 5000,
        className: "bg-red-600 text-white border border-red-700 shadow-lg",
      });
    }

    setLoading(false);
    console.log("logout");
  };
  return (
    <Button
      className="w-24"
      variant="outline"
      onClick={handleLogout}
      disabled={loading}
    >
      {loading ? <Loader2 className=" animate-spin" /> : "Log Out"}
    </Button>
  );
}

export default LogOutButton;
