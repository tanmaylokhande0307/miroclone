import React from "react";

export const Participants = () => {
  return (
    <div className="absolute h-12 top-2 right-2 p-3 rounded-md flex bg-white items-center shadow-md">
      participants
    </div>
  );
};

Participants.Skeleton = function ParticipantsSkeleton() {
  return (
    <div className="absolute h-12 top-2 right-2 p-3 rounded-md flex bg-white items-center shadow-md w-[100px]" />
  );
};
