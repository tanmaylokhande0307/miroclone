"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useOrganization } from "@clerk/nextjs";
import { useApiMutations } from "@/hooks/use-api-mutations";
import { toast } from "sonner";

export const EmptyBoards = () => {
  const { mutate, pending } = useApiMutations(api.board.create);
  const { organization } = useOrganization();

  const onClick = () => {
    if (!organization) return;

    mutate({
      orgId: organization?.id,
      title: "New Board",
    })
      .then((id) => {
        toast.success("Board created");
      })
      .catch(() => {
        toast.error("Failed to create board");
      });
  };

  return (
    <div className="flex flex-col h-full items-center justify-center">
      <Image
        src={"/empty-boards.svg"}
        alt="empty-search"
        width={140}
        height={140}
      />
      <h2 className="text-2xl font-semibold mt-6">Create your first board</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Start by creating a board for your organization
      </p>
      <div className="mt-6">
        <Button onClick={onClick} disabled={pending}>
          Create Board
        </Button>
      </div>
    </div>
  );
};
