import { useApp } from "@inlet/react-pixi";
import { Viewport as PixiViewport } from "pixi-viewport";
import { forwardRef, ReactNode } from "react";
import { PixiComponentViewport, ViewportProps } from "./PixiComponentViewport";

export const Viewport = forwardRef<PixiViewport, ViewportProps>(
  (props, ref) => {
    const app = useApp();

    return <PixiComponentViewport ref={ref} app={app} {...props} />;
  }
);
