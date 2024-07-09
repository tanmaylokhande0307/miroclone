import { Button } from "@/components/ui/button";
import { SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <div>User Authenticated page</div>
      <UserButton></UserButton>
    </div>
  );
}
