import Image from "next/image";

export const EmptyFavourites = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <Image
        src={"/empty-favourites.svg"}
        alt="empty-search"
        width={140}
        height={140}
      />
      <h2 className="text-2xl font-semibold mt-6">No Favourite Board</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try favouriting a board
      </p>
    </div>
  );
};
