"use client";

import Image from "next/image";
import Link from "next/link";
import { Overlay } from "./overlay";
import { useAuth } from "@clerk/nextjs";
import { formatDistanceToNow } from "date-fns";
import { Footer } from "./footer";
import { Skeleton } from "@/components/ui/skeleton";

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

  return (
    <Link href={`/board/${id}`}>
      <div className="group aspect-[100/127] flex flex-col overflow-hidden border rounded-lg justify-between">
        <div className="bg-amber-50 relative flex-1">
          <Image src={imageUrl} alt={title} fill className="object-fit" />
          <Overlay />
        </div>
        <Footer
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          isFavourite={isFavourite}
          title={title}
          onClick={() => {}}
          disabled={false}
        />
      </div>
    </Link>
  );
};


BoardCard.Skeleton = function BoardCardSkeleton(){
  return(
    <div className="aspect-[100/127] overflow-hidden rounded-lg justify-between">
      <Skeleton  className="w-full h-full"/>
    </div>
  )
}