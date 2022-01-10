import { useRef } from "react";
import { Viewport as PixiViewport } from "pixi-viewport";
import { Stage } from "@inlet/react-pixi";
import { Piano } from "./components/Piano";
import { Scrollbox } from "./components/Box";

export const PianoRoll = () => {
  const viewportRef = useRef<PixiViewport>(null);
  return (
    <div>
      <Stage>
        <Scrollbox boxWidth={200} boxHeight={200}>
          <Piano />
        </Scrollbox>
      </Stage>
    </div>
  );
};
