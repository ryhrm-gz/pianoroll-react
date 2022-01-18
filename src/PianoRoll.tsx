import { Stage } from "@inlet/react-pixi";
import { Piano } from "./components/Piano";
import { Roll } from "./components/Roll";

type Props = {
  barNumber: number;
};

export const PianoRoll = ({ barNumber }: Props) => {
  return (
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
      <Stage height={833} width={320 * barNumber}>
        <Roll barNumber={barNumber} />
      </Stage>
    </div>
  );
};
