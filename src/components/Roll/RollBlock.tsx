import { Container, Graphics } from "@inlet/react-pixi";
import { Note } from "@tonaljs/tonal";
import { InteractionEvent } from "pixi.js";
import { ComponentProps, useCallback, useMemo, useState } from "react";

type BlockProperty = {
  bar: number;
  quarter: number;
  sixteenth: number;
  note: string;
};

type Props = {
  color: "white" | "black";
  x: number;
  y: number;
  width: number;
  height: number;
  noteNumber: number;
  blockProperty: BlockProperty;
};

type Draw = ComponentProps<typeof Graphics>["draw"];

export const RollBlock = ({
  color,
  x,
  y,
  width,
  height,
  noteNumber,
  blockProperty,
}: Props) => {
  // @ts-ignore
  const draw = useCallback<Draw>((g) => {
    g.clear();
    g.beginFill(color === "white" ? 0x25282b : 0x1f2123);
    g.drawRect(x, y, width, height);
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
    g.interactive = true;
    g.buttonMode = true;
    g.endFill();
  }, []);

  const [dragging, setDragging] = useState(false);
  const [moveX, setMoveX] = useState(0);

  const handleNoteDragStart = (event: InteractionEvent) => {
    setDragging(true);
  };

  const handleNoteDragEnd = (event: InteractionEvent) => {
    setDragging(false);
  };

  const handleNoteDragEndOutSide = () => {
    setDragging(false);
  };

  const handleDragMove = (event: InteractionEvent) => {
    if (dragging) {
      const x = Math.floor(event.data.getLocalPosition(event.currentTarget).x);
      if (x !== moveX && 0 <= x) {
        setMoveX(x);
      }
    }
  };

  return (
    <Graphics
      draw={draw}
      pointerdown={(event) => handleNoteDragStart(event)}
      pointerup={(event) => handleNoteDragEnd(event)}
      pointerupoutside={handleNoteDragEndOutSide}
      pointermove={(event) => handleDragMove(event)}
    />
  );
};
