import { useCallback } from "react";
import { Graphics, Container, Text } from "@inlet/react-pixi";
import { note, Note } from "@tonaljs/tonal";
import { TextStyle } from "pixi.js";

type Props = {
  color: "white" | "black";
  y: number;
  width: number;
  height: number;
  noteNumber: any;
};

export const PianoKey = ({ color, y, width, height, noteNumber }: Props) => {
  const note = Note.get(Note.fromMidi(noteNumber));
  const noteLetter = note.letter;
  const noteName = note.name;
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
      {noteLetter === "C" ? (
        <Text
          text={noteName}
          isSprite
          y={y + 3}
          x={62}
          style={new TextStyle({ fontSize: 9, letterSpacing: 2, fill: "#555" })}
        />
      ) : (
        <></>
      )}
    </Container>
  );
};
