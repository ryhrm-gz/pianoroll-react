import { useApp } from "@inlet/react-pixi";
import { Scrollbox as PixiScrollbox } from "pixi-scrollbox";
import { forwardRef, ReactNode } from "react";
import { PixiComponentScrollbox } from "./PixiComponentScrollbox";

interface ScrollboxProps {
  boxWidth: number;
  boxHeight: number;
  children?: ReactNode;
}

export const Scrollbox = forwardRef<PixiScrollbox, ScrollboxProps>(
  (props, ref) => {
    const app = useApp();
    // @ts-ignore
    return <PixiComponentScrollbox ref={ref} app={app} {...props} />;
  }
);
