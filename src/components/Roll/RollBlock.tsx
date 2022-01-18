import { Container, Graphics } from "@inlet/react-pixi";
import { Note } from "@tonaljs/tonal";
import { useCallback } from "react";

type Props = {
  color: "white" | "black";
  x: number;
  y: number;
  width: number;
  height: number;
  noteNumber: number;
  blockProperty: {
    bar: number;
    quarter: number;
    sixteenth: number;
    note: string;
  };
};

export const RollBlock = ({
  color,
  x,
  y,
  width,
  height,
  noteNumber,
  blockProperty,
}: Props) => {
  const draw = useCallback((g) => {
    g.clear();
    g.beginFill(color === "white" ? 0x25282b : 0x1f2123);
    g.drawRect(x, y, width, height);
    g.lineStyle(
      1,
      blockProperty.quarter === 3 && blockProperty.sixteenth === 3
        ? 0x777777
        : blockProperty.sixteenth === 3
        ? 0x555555
        : 0x333333
    );
    g.moveTo(x + 20, y);
    g.lineTo(x + 20, y + height);
    const note = Note.get(Note.fromMidi(noteNumber));
    if (note.letter === "B" && note.acc === "") {
      g.lineStyle(1, 0x111111);
      g.moveTo(x, y);
      g.lineTo(x + width, y);
    }
    if (note.letter === "E" && note.acc === "") {
      g.lineStyle(1, 0x1f2123);
      g.moveTo(x, y);
      g.lineTo(x + width, y);
    }
    g.endFill();
  }, []);
  return (
    <Container sortableChildren zIndex={100}>
      <Graphics draw={draw} />
    </Container>
  );
};
