"use client";

import { useOthers, useSelf } from "@liveblocks/react/suspense";
import { UserAvatar } from "./user-avatar";
import { connectionIdToColor } from "@/lib/utils";

const MAX_SHOWN_USERS = 2;

export const Participants = () => {
  const users = useOthers();
  const self = useSelf();
  const hasMoreUsers = users.length > MAX_SHOWN_USERS;

  return (
    <div className="absolute h-12 top-2 right-2 p-3 rounded-md flex bg-white items-center shadow-md">
      <div className="flex gap-x-2">
        {users.slice(0, MAX_SHOWN_USERS).map(({ connectionId, info }) => {
          return (
            <UserAvatar
              borderColor={connectionIdToColor(connectionId)}
              key={connectionId}
              name={info?.name}
              src={info?.picture}
              fallback={info?.name?.[0] || "T"}
            />
          );
        })}
        {self && (
          <UserAvatar
            borderColor={connectionIdToColor(self.connectionId)}
            name={`${self.info?.name} (You)`}
            src={self.info?.picture}
            fallback={self.info?.name?.[0]}
          />
        )}

        {hasMoreUsers && (
          <UserAvatar
            name={`${users.length - MAX_SHOWN_USERS} more`}
            fallback={`+${users.length - MAX_SHOWN_USERS}`}
          />
        )}
      </div>
    </div>
  );
};

export const ParticipantsSkeleton = () => {
  return (
    <div className="absolute h-12 top-2 right-2 p-3 rounded-md flex bg-white items-center shadow-md w-[100px]" />
  );
};
