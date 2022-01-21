import { PixiComponent } from "@inlet/react-pixi";
import { Viewport as PixiViewport } from "pixi-viewport";
import * as PIXI from "pixi.js";
import { scrollX } from "./lib/scrollX";
import { scrollY } from "./lib/scrollY";

export interface ViewportProps {
  width: number;
  height: number;
  deltaX: number;
  deltaY: number;
  barNumber: number;
  children?: React.ReactNode;
}

interface PixiComponentViewportProps extends ViewportProps {
  app: PIXI.Application;
}

export const PixiComponentRollViewport = PixiComponent("RollViewport", {
  create: ({ width, height, barNumber, app }: PixiComponentViewportProps) => {
    const viewport = new PixiViewport({
      screenWidth: width,
      screenHeight: height,
      worldWidth: 320 * barNumber,
      worldHeight: 833,
      ticker: app.ticker,
      interaction: app.renderer.plugins.interaction,
    });

    return viewport;
  },
  applyProps: (viewport, _oldProps, { deltaX, deltaY }) => {
    viewport.top = scrollY(deltaY, 20, viewport.top, viewport.bottom);

    viewport.left = scrollX(deltaX);
  },
});
