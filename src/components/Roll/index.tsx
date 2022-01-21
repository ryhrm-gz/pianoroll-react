import { Stage } from "@inlet/react-pixi";
import { DrawRoll } from "./DrawRoll";

type Props = {
  barNumber: number;
};

export const Roll = ({ barNumber }: Props) => {
  return (
    <Stage height={833} width={320 * barNumber}>
      <DrawRoll barNumber={barNumber} />
    </Stage>
  );
};
