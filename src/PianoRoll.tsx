import { Piano } from "./components/Piano";
import { Stage } from "@inlet/react-pixi";

export const PianoRoll = () => {
  return (
    <div>
      <Stage>
        <Piano />
      </Stage>
    </div>
  );
};
