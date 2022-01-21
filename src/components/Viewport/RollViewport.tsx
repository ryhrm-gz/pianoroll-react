import { useApp } from "@inlet/react-pixi";
import { Viewport as PixiViewport } from "pixi-viewport";
import { forwardRef } from "react";
import {
  PixiComponentRollViewport,
  ViewportProps,
} from "./PixiComponentRollViewport";

export const RollViewport = forwardRef<PixiViewport, ViewportProps>(
  (props, ref) => {
    const app = useApp();

    return <PixiComponentRollViewport ref={ref} app={app} {...props} />;
  }
);
