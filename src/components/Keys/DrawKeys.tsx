import { ComponentProps, useCallback } from "react";
import { Graphics, Text } from "@inlet/react-pixi";
import { Note, Range } from "@tonaljs/tonal";
import { isWhite } from "../utils/isWhite";
import { numLowerWhites } from "../utils/numLowerWhites";
import { TextStyle } from "pixi.js";

type Draw = ComponentProps<typeof Graphics>["draw"];

export const DrawKeys = () => {
  const WHITE_WIDTH = 80;
  const WHITE_HEIGHT = 16;
  const BLACK_WIDTH = WHITE_WIDTH * 0.6;
  const BLACK_HEIGHT = WHITE_HEIGHT * 0.6;
  const keys = Range.numeric(["C8", "A0"]);

  //@ts-ignore
  const draw = useCallback<Draw>((g) => {
    g.clear();

    //draw white keys
    keys.map((_, index) => {
      if (isWhite(index)) {
        g.beginFill(0xefefef)
          .lineStyle(1, 0xcccccc)
          .drawRect(
            0,
            WHITE_HEIGHT *
              numLowerWhites(Array.from(Array(index), (_, k) => k)) +
              25,
            WHITE_WIDTH,
            WHITE_HEIGHT
          );
      }
    });

    //draw black keys
    keys.map((_, index) => {
      if (!isWhite(index)) {
        g.beginFill(0x111111)
          .lineStyle(1, 0xcccccc)
          .drawRect(
            0,
            WHITE_HEIGHT *
              numLowerWhites(Array.from(Array(index), (_, k) => k)) +
              -BLACK_HEIGHT / 2 +
              25,
            BLACK_WIDTH,
            BLACK_HEIGHT
          );
      }
    });
  }, []);

  return (
    <>
      <Graphics draw={draw} />
      {keys.map((noteNumber, index) => {
        const note = Note.get(Note.fromMidi(noteNumber));
        if (note.letter === "C") {
          return (
            <Text
              key={note.name}
              text={note.name}
              y={
                WHITE_HEIGHT *
                  numLowerWhites(Array.from(Array(index), (_, k) => k)) +
                28
              }
              x={62}
              style={
                new TextStyle({ fontSize: 9, letterSpacing: 2, fill: "#555" })
              }
              isSprite
            />
          );
        }
      })}
    </>
  );
};
