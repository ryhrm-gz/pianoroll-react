import { useApp } from "@inlet/react-pixi";
import {
  PixiComponentKeysViewport,
  ViewportProps,
} from "./PixiComponentKeysViewport";

export const KeysViewport = (props: ViewportProps) => {
  const app = useApp();

  return <PixiComponentKeysViewport app={app} {...props} />;
};
