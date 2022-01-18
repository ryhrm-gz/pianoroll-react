import { Container } from "@inlet/react-pixi";

import { RollBar } from "./RollBar";

export const Roll = () => {
  const keys = [
    108, 107, 106, 105, 104, 103, 102, 101, 100, 99, 98, 97, 96, 95, 94, 93, 92,
    91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73,
    72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54,
    53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35,
    34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21,
  ];

  const barNumber = 4;
  const barWidth = 320;

  return (
    <Container sortableChildren>
      {[...Array(barNumber)].map((_, index) => (
        <RollBar key={`bar_${index + 1}`} bar={index} width={barWidth} />
      ))}
    </Container>
  );
};
