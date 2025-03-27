"use client";
import { useRouter } from "next/navigation";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useTransition } from "react";
import { CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";

type props = {
  type: "login" | "signup";
};

function AuthForm({ type }: props) {
  const [isPending, startTransition] = useTransition();
  const isLoginForm = type === "login";
  const router = useRouter();
  const handleSubmit = (formdata: FormData) => {};
  return (
    <form>
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
