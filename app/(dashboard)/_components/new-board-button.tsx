"use client";

import { api } from "@/convex/_generated/api";
import { useApiMutations } from "@/hooks/use-api-mutations";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { toast } from "sonner";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const { mutate, pending } = useApiMutations(api.board.create);

  const onClick = () => {
    mutate({
      orgId,
      title: "Untitled",
    }).then((id) => {
        toast.success("Board created")
    }).catch(() => {
        toast.error("Failed to create board")
    });
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
        (disabled || pending) && "opacity-75 hover:bg-blue-600 cursor-not-allowed"
      )}
    >
      <div />
      <Plus className="h-12 text-white stroke-1" />
      <p className="text-white font-light text-sm">New Board</p>
    </button>
  );
};
