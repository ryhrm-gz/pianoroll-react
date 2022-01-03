import { forwardRef } from "react";
import { useApp } from "@inlet/react-pixi";
import { Viewport as PixiViewport } from "pixi-viewport";
import { PixiComponentViewport } from "./PixiComponentViewport";

interface ViewportProps {
  width: number;
  height: number;
  children?: React.ReactNode;
}

export const Viewport = forwardRef<PixiViewport, ViewportProps>(
  (props, ref) => {
    const app = useApp();

    return <PixiComponentViewport ref={ref} app={app} {...props} />;
  }
);
