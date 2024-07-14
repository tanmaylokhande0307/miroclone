"use client";

import { LayerType } from "@/types/canvas";
import { useStorage } from "@liveblocks/react/suspense";
import { memo } from "react";
import { Rectangle } from "./rectangle";

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

    switch (layer.type) {
      case LayerType.Reactangle:
        return (
          <Rectangle
            id={id}
            onPointerDown={onLayerPointerDown}
            layer={layer}
            selectionColor={selectionColor}
          />
        );
      default:
        console.log("unknown layer type");
        return null;
    }
  }
);

LayerPreview.displayName = "LayerPreview";
