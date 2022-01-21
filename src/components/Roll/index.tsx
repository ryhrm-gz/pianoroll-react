import { Container } from "@inlet/react-pixi";
import { DrawRoll } from "./DrawRoll";

type Props = {
  barNumber: number;
};

export const Roll = ({ barNumber }: Props) => {
  return (
    <Container>
      <DrawRoll barNumber={barNumber} />
    </Container>
  );
};
