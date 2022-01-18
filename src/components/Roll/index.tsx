import { Container } from "@inlet/react-pixi";

import { RollBar } from "./RollBar";

type Props = {
  barNumber: number;
};

export const Roll = ({ barNumber }: Props) => {
  const barWidth = 320;

  return (
    <>
      {[...Array(barNumber)].map((_, index) => (
        <RollBar key={`bar_${index + 1}`} bar={index} width={barWidth} />
      ))}
    </>
  );
};
