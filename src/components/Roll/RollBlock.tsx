import { Container, Graphics } from "@inlet/react-pixi";
import { useCallback } from "react";

type Props = {
  color: "white" | "black";
  y: number;
  noteNumber: number;
};

export const RollBlock = ({ color, y, noteNumber }: Props) => {
  const draw = useCallback((g) => {
    g.clear();
    g.beginFill(color === "white" ? 0x25282b : 0x1f2123);

    g.drawRect(0, y, 80, (16 * 7) / 12);
    g.endFill();
  }, []);
  return (
    <Container>
      <Graphics draw={draw} />
    </Container>
  );
};
