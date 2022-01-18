import { Container } from "@inlet/react-pixi";
import { RollColumn } from "./RollColumn";

type Props = {
  width: number;
  bar: number;
  quarter: number;
  sixteenth: number;
};

export const RollSixteenth = ({ width, bar, quarter, sixteenth }: Props) => {
  return (
    <RollColumn
      bar={bar}
      quarter={quarter}
      sixteenth={sixteenth}
      width={width}
    />
  );
};
