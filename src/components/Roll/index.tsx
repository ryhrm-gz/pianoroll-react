import { Container } from "@inlet/react-pixi";
import { RollDraw } from "./RollDraw";

type Props = {
  barNumber: number;
};

export const Roll = ({ barNumber }: Props) => {
  const barWidth = 320;

  return (
    <Container>
      <RollDraw barNumber={barNumber} />
    </Container>
  );
};
