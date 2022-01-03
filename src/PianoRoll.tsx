import { useRef } from "react";
import { Viewport as PixiViewport } from "pixi-viewport";
import { Stage } from "@inlet/react-pixi";
import { Viewport } from "./components/Viewport";
import { Piano } from "./components/Piano";

export const PianoRoll = () => {
  const viewportRef = useRef<PixiViewport>(null);
  return (
    <div>
      <Stage>
        <Viewport ref={viewportRef} width={500} height={500}>
          <Piano />
        </Viewport>
      </Stage>
    </div>
  );
};
