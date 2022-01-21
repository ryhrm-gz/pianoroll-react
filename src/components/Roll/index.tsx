import { DrawRoll } from "./DrawRoll";

type Props = {
  barNumber: number;
};

export const Roll = ({ barNumber }: Props) => {
  return <DrawRoll barNumber={barNumber} />;
};
