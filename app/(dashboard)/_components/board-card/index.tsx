"use client";

import Image from "next/image";
import Link from "next/link";
import { Overlay } from "./overlay";
import { useAuth } from "@clerk/nextjs";
import { formatDistanceToNow } from "date-fns";
import { Footer } from "./footer";
import { Skeleton } from "@/components/ui/skeleton";
import { Actions } from "@/components/actions";
import { MoreHorizontal } from "lucide-react";
import { useApiMutations } from "@/hooks/use-api-mutations";
import { api } from "@/convex/_generated/api";
import { unFavourite } from "@/convex/board";
import { toast } from "sonner";

interface BoardCardProps {
  authorId: string;
  id: string;
  title: string;
  imageUrl: string;
  authorName: string;
  createdAt: number;
  orgId: string;
  isFavourite: boolean;
}

export const BoardCard = ({
  authorId,
  id,
  title,
  imageUrl,
  authorName,
  createdAt,
  orgId,
  isFavourite,
}: BoardCardProps) => {
  const { userId } = useAuth();

  const authorLabel = userId === authorId ? "You" : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, { addSuffix: true });

  const { mutate: onFavourite, pending: pendingFavourite } = useApiMutations(
    api.board.favourite
  );
  const { mutate: onUnFavourite, pending: pendingUnFavourite } =
    useApiMutations(api.board.unFavourite);

  const toggleFavourite = () => {
    if (isFavourite) {
      onUnFavourite({ id }).catch(() => toast.error("Falied to unfavourite"));
    } else {
      onFavourite({ id, orgId }).catch(() =>
        toast.error("Failed to favourite")
      );
    }
  };

  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[100/127] flex flex-col overflow-hidden border rounded-lg justify-between">
        <div className="bg-amber-50 relative flex-1">
          <Image src={imageUrl} alt={title} fill className="object-fit" />
          <Overlay />
          <Actions id={id} title={title} side="right">
            <button className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity px-3 py-2">
              <MoreHorizontal className="text-white opacity-75 hover:opacity-100 transition-opacity" />
            </button>
          </Actions>
        </div>
        <Footer
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          isFavourite={isFavourite}
          title={title}
          onClick={toggleFavourite}
          disabled={pendingFavourite || pendingUnFavourite}
        />
      </div>
    </Link>
  );
};

BoardCard.Skeleton = function BoardCardSkeleton() {
  return (
    <div className="aspect-[100/127] overflow-hidden rounded-lg justify-between">
      <Skeleton className="w-full h-full" />
    </div>
  );
};
