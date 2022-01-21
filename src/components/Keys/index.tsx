import { Stage } from "@inlet/react-pixi";
import { DrawKeys } from "./DrawKeys";

export const Keys = () => {
  return (
    <Stage
      height={833}
      width={80}
      style={{ position: "sticky", top: 0, left: 0 }}
    >
      <DrawKeys />
    </Stage>
  );
};
