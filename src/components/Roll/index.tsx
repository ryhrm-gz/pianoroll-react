import { DrawRoll } from "./DrawRoll";

type Props = {
  numberBar: number;
};

export const Roll = ({ numberBar }: Props) => {
  return <DrawRoll numberBar={numberBar} />;
};
