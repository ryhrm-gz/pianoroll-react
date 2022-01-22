import { Graphics, Text } from "@inlet/react-pixi";
import { TextStyle } from "pixi.js";
import { ComponentProps, useCallback } from "react";

type Props = {
  numberBar: number;
};

type Draw = ComponentProps<typeof Graphics>["draw"];

export const DrawRuler = ({ numberBar }: Props) => {
  //@ts-ignore
  const draw = useCallback<Draw>((g) => {
    g.clear();

    //draw ruler
    g.beginFill(0x333333).drawRect(80, 0, 320 * numberBar, 25);
    [...Array((320 * numberBar) / 20)].map((_, index) => {
      g.lineStyle(1, 0xeeeeee);
      if (index === 0) {
        g.moveTo(81, 25).lineTo(81, 15);
      }
      if ((index + 1) % 16 === 0) {
        g.moveTo(20 * (index + 1) + 80, 25).lineTo(20 * (index + 1) + 80, 15);
      } else if ((index + 1) % 4 === 0) {
        g.moveTo(20 * (index + 1) + 80, 25).lineTo(20 * (index + 1) + 80, 20);
      } else {
        g.moveTo(20 * (index + 1) + 80, 25).lineTo(20 * (index + 1) + 80, 23);
      }
    });

    //draw border
    g.lineStyle(1, 0x000000)
      .moveTo(80, 25)
      .lineTo(80 + 320 * numberBar, 25);
  }, []);

  return (
    <>
      <Graphics draw={draw} />
      {[...Array((320 * numberBar) / 20)].map((_, index) => {
        if (index === 0) {
          return (
            <Text
              key={`ruler_${index + 1}`}
              text={String(index + 1)}
              y={2}
              x={80}
              style={
                new TextStyle({
                  fill: "#eee",
                  fontSize: 11,
                })
              }
            />
          );
        } else if ((index + 1) % 16 === 0) {
          return (
            <Text
              key={`ruler_${index + 1}`}
              text={String((index + 1) / 16 + 1)}
              y={2}
              x={20 * (index + 1) + 80}
              style={
                new TextStyle({
                  fill: "#eee",
                  fontSize: 11,
                })
              }
            />
          );
        } else if ((index + 1) % 4 === 0) {
          const b = String(Math.floor((index + 1) / 16 + 1));
          const q = String((((index + 1) / 4) % 4) + 1);
          return (
            <Text
              key={`ruler_${index + 1}`}
              text={`${b}.${q}`}
              y={3}
              x={20 * (index + 1) + 80}
              style={
                new TextStyle({
                  fill: "#aaa",
                  fontSize: 10,
                })
              }
              isSprite
            />
          );
        }
      })}
    </>
  );
};
