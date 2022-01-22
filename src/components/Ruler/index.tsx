import { DrawRuler } from "./DrawRuler";

type Props = {
  numberBar: number;
};

export const Ruler = ({ numberBar }: Props) => {
  return <DrawRuler numberBar={numberBar} />;
};
