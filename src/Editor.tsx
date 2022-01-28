import { Stage } from "@inlet/react-pixi";
import { useState, WheelEvent, ChangeEvent } from "react";
import { Keys } from "./components/Keys";
import { Roll } from "./components/Roll";
import { Ruler } from "./components/Ruler";
import { Title } from "./components/Title";
import { RollViewport, KeysViewport } from "./components/Viewport";
import { RulerViewport } from "./components/Viewport/RulerViewport";
import { midi } from "./utils/midi";

type Props = {
  numberBar: number;
  width?: number;
  height?: number;
};

export const Editor = ({ numberBar, width = 1000, height = 858 }: Props) => {
  const [deltaX, setDeltaX] = useState(0);
  const [deltaY, setDeltaY] = useState(0);

  const handleWheel = (event: WheelEvent<HTMLCanvasElement>) => {
    const x = Math.floor(event.deltaX);
    const y = Math.floor(event.deltaY);
    if (x !== 0) {
      setDeltaY(0);
      setDeltaX(x);
    }

    if (y !== 0) {
      setDeltaX(0);
      setDeltaY(y);
    }
  };

  const handleFileInput = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length === 0 || !event.target.files) {
      return;
    }
    try {
      await midi.parse(event.target.files[0]);
    } catch (e) {
      console.log(e);
    }
    event.target.value = "";
  };

  return (
    <>
      <Stage
        width={width}
        height={height}
        onWheel={(event) => handleWheel(event)}
      >
        <RollViewport
          {...{ width: width - 80, height, numberBar, deltaX, deltaY }}
        >
          <Roll numberBar={numberBar} />
        </RollViewport>
        <KeysViewport {...{ height, deltaY }}>
          <Keys />
        </KeysViewport>
        <RulerViewport {...{ width: width - 80, numberBar, deltaX }}>
          <Ruler numberBar={numberBar} />
        </RulerViewport>
        <Title />
      </Stage>
      <input
        type="file"
        accept=".midi,.mid"
        onChange={(event) => handleFileInput(event)}
      />
    </>
  );
};
