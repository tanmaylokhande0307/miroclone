"use client";
import React from "react";
import { Emptyorg } from "./_components/empty-org";
import { useOrganization } from "@clerk/nextjs";
import { BoardList } from "./_components/board-list";

interface DashboardPageParams {
  searchParams: {
    search?: string;
    favourites?: string;
  };
}

const DashBoardPage = ({ searchParams }: DashboardPageParams) => {
  const { organization } = useOrganization();

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? (
        <Emptyorg />
      ) : (
        <BoardList orgId={organization.id} query={searchParams} />
      )}
    </div>
  );
};

export default DashBoardPage;
