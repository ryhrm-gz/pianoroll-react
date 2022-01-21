import { Stage } from "@inlet/react-pixi";
import { useState, WheelEvent, useRef } from "react";
import { Viewport as PixiViewport } from "pixi-viewport";
import { Keys } from "./components/Keys";
import { Roll } from "./components/Roll";
import { RollViewport, KeysViewport } from "./components/Viewport";

type Props = {
  barNumber: number;
  width?: number;
  height?: number;
};

export const PianoRoll = ({ barNumber, width = 800, height = 833 }: Props) => {
  const viewportRef = useRef<PixiViewport>(null);
  const [deltaX, setDeltaX] = useState(0);
  const [deltaY, setDeltaY] = useState(0);

  const handleWheel = (event: WheelEvent) => {
    const x = Math.floor(event.deltaX);
    const y = Math.floor(event.deltaY);
    if (deltaX !== x) {
      setDeltaX(x);
    }

    if (deltaY !== y) {
      setDeltaY(y);
    }
  };

  return (
    <Stage
      width={width}
      height={height}
      onWheel={(event) => handleWheel(event)}
    >
      <RollViewport
        ref={viewportRef}
        {...{ width: width - 80, height, barNumber, deltaX, deltaY }}
      >
        <Roll barNumber={barNumber} />
      </RollViewport>
      <KeysViewport ref={viewportRef} {...{ height, deltaY }}>
        <Keys />
      </KeysViewport>
    </Stage>
  );
};
