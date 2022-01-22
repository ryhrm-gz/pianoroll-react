import { PixiComponent } from "@inlet/react-pixi";
import { Simple } from "pixi-cull";
import { Viewport as PixiViewport } from "pixi-viewport";
import * as PIXI from "pixi.js";
import { scrollX } from "./utils/scrollX";

export interface ViewportProps {
  width: number;
  deltaX: number;
  numberBar: number;
  children?: React.ReactNode;
}

interface PixiComponentViewportProps extends ViewportProps {
  app: PIXI.Application;
}

export const PixiComponentRulerViewport = PixiComponent("RulerViewport", {
  create: ({ width, numberBar, app }: PixiComponentViewportProps) => {
    const viewport = new PixiViewport({
      screenWidth: width,
      screenHeight: 25,
      worldWidth: 320 * numberBar,
      worldHeight: 25,
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
  applyProps: (viewport, _oldProps, { deltaX, numberBar }) => {
    viewport.left = scrollX(
      deltaX,
      20,
      viewport.left,
      viewport.right,
      numberBar
    );
  },
});
