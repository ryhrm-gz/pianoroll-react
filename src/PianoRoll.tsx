import { useRef } from "react";
import { Viewport as PixiViewport } from "pixi-viewport";
import { Stage } from "@inlet/react-pixi";
import { Piano } from "./components/Piano";

export const PianoRoll = () => {
  const viewportRef = useRef<PixiViewport>(null);
  return (
    <div>
      <Stage height={900}>
        <Piano />
      </Stage>
    </div>
  );
};
