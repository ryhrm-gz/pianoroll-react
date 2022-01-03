import { PixiComponent } from "@inlet/react-pixi";
import { Viewport as PixiViewport } from "pixi-viewport";
import * as PIXI from "pixi.js";

interface ViewportProps {
  width: number;
  height: number;
  children?: React.ReactNode;
}

interface PixiComponentViewportProps extends ViewportProps {
  app: PIXI.Application;
}

export const PixiComponentViewport = PixiComponent("Viewport", {
  create: (props: PixiComponentViewportProps) => {
    const viewport = new PixiViewport({
      screenWidth: props.width,
      screenHeight: props.height,
      worldWidth: props.width * 2,
      worldHeight: props.height * 2,
      ticker: props.app.ticker,
      interaction: props.app.renderer.plugins.interaction,
    });
    viewport
      .drag()
      .pinch()
      .wheel()
      .clampZoom({ minScale: 0.3, maxScale: 2 })
      .setZoom(0.5)
      .moveCenter(props.width, props.height);

    return viewport;
  },
  applyProps: (viewport, _oldProps, newProps) => {
    viewport.resize(newProps.width, newProps.height);
  },
});
