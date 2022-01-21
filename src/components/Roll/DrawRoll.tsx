import { Graphics } from "@inlet/react-pixi";
import { ComponentProps, useCallback } from "react";
import { Note, Range } from "@tonaljs/tonal";
import { isWhite } from "../utils/isWhite";

type Props = {
  numberBar: number;
};

type Draw = ComponentProps<typeof Graphics>["draw"];

export const DrawRoll = ({ numberBar }: Props) => {
  const keysMid = Range.numeric(["B7", "Bb0"]);

  //@ts-ignore
  const draw = useCallback<Draw>((g) => {
    g.clear();

    // draw top key
    g.beginFill(0x25282b).drawRect(0 + 80, 0, 320 * numberBar, 16);

    // draw keysMid
    keysMid.map((_, index) => {
      g.beginFill(isWhite(index + 1) ? 0x25282b : 0x1f2123).drawRect(
        0 + 80,
        16 + index * ((16 * 7) / 12),
        320 * numberBar,
        (16 * 7) / 12
      );
    });

    // draw bottom key
    g.beginFill(0x25282b).drawRect(
      0 + 80,
      809.3333333333334 + (16 * 7) / 12,
      320 * numberBar,
      14
    );

    // draw horizontal line
    keysMid.map((noteNumber, index) => {
      const note = Note.get(Note.fromMidi(noteNumber));
      if (note.letter === "B" && note.acc === "") {
        g.lineStyle(1, 0x111111)
          .moveTo(0 + 80, 16 + index * ((16 * 7) / 12))
          .lineTo(320 * numberBar + 80, 16 + index * ((16 * 7) / 12));
      } else if (note.letter === "E" && note.acc === "") {
        g.lineStyle(1, 0x1f2123)
          .moveTo(0 + 80, 16 + index * ((16 * 7) / 12))
          .lineTo(320 * numberBar + 80, 16 + index * ((16 * 7) / 12));
      }
    });

    // draw vertical line
    [...Array((320 * numberBar) / 20)].map((_, index) => {
      if ((index + 1) % 16 === 0) {
        g.lineStyle(1, 0x777777);
      } else if ((index + 1) % 4 === 0) {
        g.lineStyle(1, 0x555555);
      } else {
        g.lineStyle(1, 0x333333);
      }
      g.moveTo(20 * (index + 1) + 80, 0).lineTo(20 * (index + 1) + 80, 833);
    });
  }, []);
  return <Graphics draw={draw} />;
};
