"use client";
import { useRouter } from "next/navigation";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useTransition } from "react";
import { CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { loginAction, signUpAction } from "@/action/user";

type props = {
  type: "login" | "signup";
};

function AuthForm({ type }: props) {
  const [isPending, startTransition] = useTransition();
  const isLoginForm = type === "login";
  const router = useRouter();
  const handleSubmit = (formdata: FormData) => {
    startTransition(async () => {
      const email = formdata.get("email") as string;
      const password = formdata.get("password") as string;

      let title;
      let description;
      let errorMessage;
      if (isLoginForm) {
        errorMessage = (await loginAction(email, password)).errorMessage;
        title = "Login";
        description = "You have logged in successfully";
      } else {
        errorMessage = (await signUpAction(email, password)).errorMessage;
        title = "Sign Up";
        description = "Check your email for confirmation link";
      }
      if (!errorMessage) {
        toast.success(title, {
          description,
          duration: 3000,
        });
        router.replace("/")
      } else {
        toast.error(errorMessage, {
          description: errorMessage,
          duration: 3000,
        });
      }
    });
  };
  return (
    <form action={handleSubmit}>
      <CardContent className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            disabled={isPending}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your email"
            required
            disabled={isPending}
          />
        </div>
      </CardContent>
      <CardFooter className="mt-4 flex flex-col gap-6">
        <Button className="w-full">
          {isPending ? (
            <Loader2 className="animate-spin" />
          ) : isLoginForm ? (
            "Login"
          ) : (
            "Signup"
          )}
        </Button>
        <p className="text-xs">
          {isLoginForm ? "Don't have an account?" : "Already have an account?"}{" "}
          <Link
            href={isLoginForm ? "/sign-up" : "/login"}
            className={`text-blue-500 underline ${isPending ? "pointer-events-none opacity-50" : ""}`}
          >
            {isLoginForm ? "Sign Up " : "Login"}
          </Link>
        </p>
      </CardFooter>
    </form>
  );
}

export default AuthForm;
