import { useCallback } from "react";
import { Graphics, Container } from "@inlet/react-pixi";

type Props = {
  color: "white" | "black";
  y: number;
  width: number;
  height: number;
};

export const PianoKey = ({ color, y, width, height }: Props) => {
  const draw = useCallback((g) => {
    g.clear();
    g.beginFill(color === "white" ? 0xefefef : 0x111111);
    g.lineStyle(1, 0xcccccc);
    g.drawRect(0, y, width, height);
    g.endFill();
  }, []);

  return (
    <Container sortableChildren zIndex={color === "white" ? 1 : 10}>
      <Graphics draw={draw} />
    </Container>
  );
};
