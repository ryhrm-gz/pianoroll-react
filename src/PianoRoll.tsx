import { Stage } from "@inlet/react-pixi";
import { Piano } from "./components/Piano";
import { Roll } from "./components/Roll";

export const PianoRoll = () => {
  return (
    <div>
      <div
        style={{
          height: 500,
          width: 900,
          overflow: "auto",
          display: "flex",
        }}
      >
        <Stage
          height={833}
          width={80}
          style={{ position: "sticky", top: 0, left: 0 }}
        >
          <Piano />
        </Stage>
        <Stage height={833} width={1300}>
          <Roll />
        </Stage>
      </div>
    </div>
  );
};
