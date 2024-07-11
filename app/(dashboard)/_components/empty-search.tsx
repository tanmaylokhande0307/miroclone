import Image from "next/image";

export const EmptySearch = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center">
      <Image src={"/empty-search.svg"} alt="empty-search" width={140} height={140} />
      <h2 className="text-2xl font-semibold mt-6">No results found</h2>
      <p className="text-muted-foreground text-sm mt-2">
        Try searching for something else
      </p>
    </div>
  );
};
