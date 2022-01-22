import { PixiComponent } from "@inlet/react-pixi";
import { Simple } from "pixi-cull";
import { Viewport as PixiViewport } from "pixi-viewport";
import * as PIXI from "pixi.js";
import { scrollX } from "./utils/scrollX";
import { scrollY } from "./utils/scrollY";

export interface ViewportProps {
  width: number;
  height: number;
  deltaX: number;
  deltaY: number;
  numberBar: number;
  children?: React.ReactNode;
}

interface PixiComponentViewportProps extends ViewportProps {
  app: PIXI.Application;
}

export const PixiComponentRollViewport = PixiComponent("RollViewport", {
  create: ({ width, height, numberBar, app }: PixiComponentViewportProps) => {
    const viewport = new PixiViewport({
      screenWidth: width,
      screenHeight: height,
      worldWidth: 320 * numberBar,
      worldHeight: 833,
      ticker: app.ticker,
      interaction: app.renderer.plugins.interaction,
    });

    const cull = new Simple();
    cull.addList(
      (viewport.children as PIXI.Container[])
        .map((layer) => {
          return layer.children;
        })
        .flat()
    );
    cull.cull(viewport.getVisibleBounds());

    viewport.on("moved-end", () => {
      if (viewport.dirty) {
        cull.cull(viewport.getVisibleBounds());
        viewport.dirty = false;
      }
    });

    return viewport;
  },
  applyProps: (viewport, _oldProps, { deltaX, deltaY, numberBar }) => {
    viewport.top = scrollY(deltaY, 20, viewport.top, viewport.bottom);

    viewport.left = scrollX(
      deltaX,
      20,
      viewport.left,
      viewport.right,
      numberBar
    );
  },
});
