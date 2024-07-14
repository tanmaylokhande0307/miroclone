"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useQuery } from "convex/react";
import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRenameModal } from "@/store/use-rename-modal";

interface InfoProps {
  boardId: string;
}

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

const TabSeparator = () => {
  return <div className="text-neutral-300 px-1.5">|</div>;
};

export const Info = ({ boardId }: InfoProps) => {
  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  });

  const { onOpen } = useRenameModal();

  if (!data) return <InfoSkeleton />;

  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md">
      <Button asChild className="px-2" variant={"board"}>
        <Link href={"/"}>
          <Image src="/logo.svg" alt="logo" height={40} width={40} />
          <span
            className={cn(
              "font-semibold text-xl ml-2 text-black",
              font.className
            )}
          >
            MBoard
          </span>
        </Link>
      </Button>
      <TabSeparator />
      <Button
        variant="board"
        className="text-base font-normal px-2"
        onClick={() => onOpen(data._id, data.title)}
      >
        {data.title}
      </Button>
    </div>
  );
};

export const InfoSkeleton = () => {
  return (
    <div className="absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex items-center shadow-md w-[300px]" />
  );
};
