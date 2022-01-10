import { PixiComponent } from "@inlet/react-pixi";
import { Scrollbox as PixiScrollbox } from "pixi-scrollbox";
import * as PIXI from "pixi.js";

interface PixiComponentScrollboxProps extends PixiScrollbox {
  app: PIXI.Application;
}

export const PixiComponentScrollbox = PixiComponent("Scrollbox", {
  create: (props: PixiComponentScrollboxProps) => {
    const scrollbox = new PixiScrollbox({
      overflow: "scroll",
      boxWidth: props.boxWidth,
      boxHeight: props.boxHeight,
    });
    scrollbox.update();
    return scrollbox;
  },
});
