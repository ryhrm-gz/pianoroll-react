import { PixiComponent } from "@inlet/react-pixi";
import { Viewport as PixiViewport } from "pixi-viewport";
import * as PIXI from "pixi.js";
import { scrollY } from "./utils/scrollY";

export interface ViewportProps {
  height: number;
  deltaY: number;
  children?: React.ReactNode;
}

interface PixiComponentViewportProps extends ViewportProps {
  app: PIXI.Application;
}

export const PixiComponentKeysViewport = PixiComponent("KeysViewport", {
  create: ({ height, app }: PixiComponentViewportProps) => {
    const viewport = new PixiViewport({
      screenWidth: 80,
      screenHeight: height,
      worldWidth: 80,
      worldHeight: 833,
      ticker: app.ticker,
      interaction: app.renderer.plugins.interaction,
    });

    return viewport;
  },
  applyProps: (viewport, _oldProps, { deltaY }) => {
    viewport.top = scrollY(deltaY, 20, viewport.top, viewport.bottom);
  },
});
