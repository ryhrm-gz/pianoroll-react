import { useApp } from "@inlet/react-pixi";
import { Viewport as PixiViewport } from "pixi-viewport";
import { forwardRef } from "react";
import {
  PixiComponentKeysViewport,
  ViewportProps,
} from "./PixiComponentKeysViewport";

export const KeysViewport = forwardRef<PixiViewport, ViewportProps>(
  (props, ref) => {
    const app = useApp();

    return <PixiComponentKeysViewport ref={ref} app={app} {...props} />;
  }
);
