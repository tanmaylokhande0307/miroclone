import Image from "next/image";
import React from "react";
import { CreateOrganization } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const Emptyorg = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <Image src={"/elements.svg"} alt="elemets" width={200} height={200} />
      <h2 className="text-2xl font-semibold  mt-6">Welcome to MBoards</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Create an Organization to get started
      </p>
      <div className="mt-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button>Create Organization</Button>
          </DialogTrigger>
          <DialogContent className="p-0 max-w-[435px] bg-transparent border-none">
            <CreateOrganization routing="hash" />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
