import { Button } from "@/components/ui/button";
import Image from "next/image";

export const EmptyBoards = () => {
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
        <Button>Create Board</Button>
      </div>
    </div>
  );
};
