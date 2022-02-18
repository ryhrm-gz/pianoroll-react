import { Graphics } from "@inlet/react-pixi";
import { ComponentProps, useCallback } from "react";
import { Note, Range } from "@tonaljs/tonal";
import { isWhite } from "../utils/isWhite";

type Props = {
  numberBar: number;
};

type Draw = ComponentProps<typeof Graphics>["draw"];

export const DrawRoll = ({ numberBar }: Props) => {
  const KEYS_WHITE_WIDTH = 80;
  const KEYS_WHITE_HEIGHT = 16;
  const BAR_WIDTH = 320;
  const RULER_HEIGHT = 25;
  const SIXTEENTH_WIDTH = 20;
  const WHITE_COLOR = 0x25282b;
  const BLACK_COLOR = 0x1f2123;
  const keysMid = Range.numeric(["B7", "Bb0"]);
  console.log(((KEYS_WHITE_HEIGHT * 7) / 12) * 87);

  //@ts-ignore
  const draw = useCallback<Draw>((g) => {
    g.clear();

    // draw top key
    g.beginFill(WHITE_COLOR).drawRect(
      KEYS_WHITE_WIDTH,
      RULER_HEIGHT,
      BAR_WIDTH * numberBar,
      KEYS_WHITE_HEIGHT
    );
    // draw keysMid
    keysMid.map((_, index) => {
      g.beginFill(isWhite(index + 1) ? WHITE_COLOR : BLACK_COLOR).drawRect(
        KEYS_WHITE_WIDTH,
        KEYS_WHITE_HEIGHT +
          index * ((KEYS_WHITE_HEIGHT * 7) / 12) +
          RULER_HEIGHT,
        BAR_WIDTH * numberBar,
        (KEYS_WHITE_HEIGHT * 7) / 12
      );
    });

    // draw bottom key
    g.beginFill(WHITE_COLOR).drawRect(
      KEYS_WHITE_WIDTH,
      809.3333333333334 + (KEYS_WHITE_HEIGHT * 7) / 12 + RULER_HEIGHT,
      BAR_WIDTH * numberBar,
      KEYS_WHITE_HEIGHT
    );

    // draw horizontal line
    keysMid.map((noteNumber, index) => {
      const note = Note.get(Note.fromMidi(noteNumber));
      if (note.letter === "B" && note.acc === "") {
        g.lineStyle(1, 0x111111)
          .moveTo(
            KEYS_WHITE_WIDTH,
            KEYS_WHITE_HEIGHT +
              index * ((KEYS_WHITE_HEIGHT * 7) / 12) +
              RULER_HEIGHT
          )
          .lineTo(
            BAR_WIDTH * numberBar + KEYS_WHITE_WIDTH,
            KEYS_WHITE_HEIGHT +
              index * ((KEYS_WHITE_HEIGHT * 7) / 12) +
              RULER_HEIGHT
          );
      } else if (note.letter === "E" && note.acc === "") {
        g.lineStyle(1, 0x1f2123)
          .moveTo(
            KEYS_WHITE_WIDTH,
            KEYS_WHITE_HEIGHT +
              index * ((KEYS_WHITE_HEIGHT * 7) / 12) +
              RULER_HEIGHT
          )
          .lineTo(
            BAR_WIDTH * numberBar + KEYS_WHITE_WIDTH,
            KEYS_WHITE_HEIGHT +
              index * ((KEYS_WHITE_HEIGHT * 7) / 12) +
              RULER_HEIGHT
          );
      }
    });

    // draw vertical line
    [...Array((BAR_WIDTH * numberBar) / 20)].map((_, index) => {
      if ((index + 1) % 16 === 0) {
        g.lineStyle(1, 0x777777);
      } else if ((index + 1) % 4 === 0) {
        g.lineStyle(1, 0x555555);
      } else {
        g.lineStyle(1, 0x333333);
      }
      g.moveTo(
        SIXTEENTH_WIDTH * (index + 1) + KEYS_WHITE_WIDTH,
        RULER_HEIGHT
      ).lineTo(
        SIXTEENTH_WIDTH * (index + 1) + KEYS_WHITE_WIDTH,
        833 + RULER_HEIGHT
      );
    });

    g.endFill();
  }, []);
  return <Graphics draw={draw} />;
};
