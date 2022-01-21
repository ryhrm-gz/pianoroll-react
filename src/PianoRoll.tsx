import { Stage } from "@inlet/react-pixi";
import { Keys } from "./components/Keys";
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
      <Keys />
      <Stage height={833} width={320 * barNumber}>
        <Roll barNumber={barNumber} />
      </Stage>
    </div>
  );
};
