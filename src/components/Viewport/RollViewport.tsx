import { useApp } from "@inlet/react-pixi";
import {
  PixiComponentRollViewport,
  ViewportProps,
} from "./PixiComponentRollViewport";

export const RollViewport = (props: ViewportProps) => {
  const app = useApp();

  return <PixiComponentRollViewport app={app} {...props} />;
};
