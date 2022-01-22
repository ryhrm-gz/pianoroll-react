import { useApp } from "@inlet/react-pixi";
import {
  PixiComponentRulerViewport,
  ViewportProps,
} from "./PixiComponentRulerViewport";

export const RulerViewport = (props: ViewportProps) => {
  const app = useApp();

  return <PixiComponentRulerViewport app={app} {...props} />;
};
