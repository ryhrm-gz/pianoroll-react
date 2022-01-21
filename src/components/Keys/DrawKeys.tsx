import { ComponentProps, useCallback } from "react";
import { Graphics, Container, Text } from "@inlet/react-pixi";
import { Note, Range } from "@tonaljs/tonal";
import { isWhite } from "../lib/isWhite";
import { numLowerWhites } from "../lib/numLowerWhites";
import { TextStyle } from "pixi.js";

type Draw = ComponentProps<typeof Graphics>["draw"];

export const DrawKeys = () => {
  const whiteWidth = 80;
  const whiteHeight = 16;
  const blackWidth = whiteWidth * 0.6;
  const blackHeight = whiteHeight * 0.6;
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
            whiteHeight * numLowerWhites(Array.from(Array(index), (v, k) => k)),
            whiteWidth,
            whiteHeight
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
            whiteHeight *
              numLowerWhites(Array.from(Array(index), (v, k) => k)) +
              -blackHeight / 2,
            blackWidth,
            blackHeight
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
                whiteHeight *
                  numLowerWhites(Array.from(Array(index), (v, k) => k)) +
                3
              }
              x={62}
              style={
                new TextStyle({ fontSize: 9, letterSpacing: 2, fill: "#555" })
              }
            />
          );
        }
      })}
    </>
  );
};