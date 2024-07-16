"use client";

import { shallow, useOthersConnectionIds, useOthersMapped } from "@liveblocks/react/suspense";
import { memo } from "react";
import { Cursor } from "./cursor";
import { Path } from "./path";
import { colorToCss } from "@/lib/utils";

const Cursors = () => {
  const ids = useOthersConnectionIds();
  return (
    <>
      {ids.map((connectionid) => {
        return <Cursor key={connectionid} connectionId={connectionid} />;
      })}
    </>
  );
};

const Drafts = () => {
  const others = useOthersMapped((other) => ({
    pencilDraft: other.presence.pencilDraft,
    penColor: other.presence.penColor
  }),shallow)

  return (
    <>
      {others.map(([key,other]) => {
        if(other.pencilDraft){
          <Path 
            key={key}
            x={0}
            y={0}
            points={other.pencilDraft}
            fill={other.penColor ? colorToCss(other.penColor) : "#000"}
            onPointerDown={()=>{}}
          />
        }
      })}
    </>
  )
}

export const CursorsPresence = memo(() => {
  return (
    <>
      <Drafts />
      <Cursors />
    </>
  );
});

CursorsPresence.displayName = "CursorsPresence";
