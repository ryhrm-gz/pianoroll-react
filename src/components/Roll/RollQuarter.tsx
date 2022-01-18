import { Container } from "@inlet/react-pixi";
import { RollSixteenth } from "./RollSixteenth";

type Props = {
  width: number;
  bar: number;
  quarter: number;
};

export const RollQuater = ({ width, bar, quarter }: Props) => {
  return (
    <Container x={width * quarter}>
      {[...Array(4)].map((_, index) => (
        <RollSixteenth
          key={`sixteenth_${bar + 1}_${quarter + 1}_${index + 1}`}
          bar={bar}
          quarter={quarter}
          sixteenth={index}
          width={width / 4}
        />
      ))}
    </Container>
  );
};
