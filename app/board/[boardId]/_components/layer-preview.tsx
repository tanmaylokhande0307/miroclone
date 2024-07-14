"use client";

import { useStorage } from "@liveblocks/react/suspense";
import { memo } from "react";

interface LayerPreviewProps {
  id: string;
  selectionColor: string;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
}

export const LayerPreview = memo(
  ({ id, selectionColor, onLayerPointerDown }: LayerPreviewProps) => {
    const layer = useStorage((root) => root.layers.get(id));

    if (!layer) {
      return null;
    }
    return <div></div>;
  }
);

LayerPreview.displayName = "LayerPreview";
