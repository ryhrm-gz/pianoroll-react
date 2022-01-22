import { ComponentProps, useCallback, useState } from "react";
import { Graphics, Text } from "@inlet/react-pixi";
import { TextStyle } from "pixi.js";
import packageJson from "../../../package.json";

type Draw = ComponentProps<typeof Graphics>["draw"];

export const DrawTitle = () => {
  const [isShownTitle, setIsShownTitle] = useState(true);
  //@ts-ignore
  const draw = useCallback<Draw>((g) => {
    g.clear();
    g.beginFill(0x222222).drawRect(0, 0, 80, 25);
    g.lineStyle(1, 0x000000).moveTo(0, 25).lineTo(80, 25);
    g.interactive = true;
    g.endFill();
  }, []);
  return (
    <>
      <Graphics
        draw={draw}
        click={() => setIsShownTitle(() => !isShownTitle)}
      />
      <Text
        text={isShownTitle ? "PianoRoll" : `ver.${packageJson.version}`}
        style={
          new TextStyle({
            fontSize: 10,
            letterSpacing: 1,
            fontWeight: "900",
            fill: "#777",
          })
        }
        y={6}
        x={13}
      />
    </>
  );
};
