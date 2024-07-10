import React from "react";
import { NewButton } from "./new-button";
import { List } from "./list";

export const Sidebar = () => {
  return (
    <aside className="fixed bg-blue-950 text-white z-[1] h-full w-[60px] left-0 flex flex-col p-3 gap-y-4">
      <List />
      <NewButton />
    </aside>
  );
};
