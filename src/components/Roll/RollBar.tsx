import { Container } from "@inlet/react-pixi";
import { RollQuater } from "./RollQuarter";

type Props = {
  width: number;
  bar: number;
};

export const RollBar = ({ width, bar }: Props) => {
  return (
    <Container x={width * bar}>
      {[...Array(4)].map((_, index) => (
        <RollQuater
          key={`quarter_${bar + 1}_${index + 1}`}
          bar={bar}
          quarter={index}
          width={width / 4}
        />
      ))}
    </Container>
  );
};
