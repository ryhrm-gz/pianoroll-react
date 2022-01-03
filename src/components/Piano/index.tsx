import { Container } from "@inlet/react-pixi";
import { isWhite } from "../lib/isWhite";
import { PianoKey } from "./PianoKey";

export const Piano = () => {
  const whiteWidth = 80;
  const whiteHeight = 16;
  const blackWidth = whiteWidth * 0.75;
  const blackHeight = whiteHeight * 0.6;
  const keys = [
    108, 107, 106, 105, 104, 103, 102, 101, 100, 99, 98, 97, 96, 95, 94, 93, 92,
    91, 90, 89, 88, 87, 86, 85, 84, 83, 82, 81, 80, 79, 78, 77, 76, 75, 74, 73,
    72, 71, 70, 69, 68, 67, 66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 56, 55, 54,
    53, 52, 51, 50, 49, 48, 47, 46, 45, 44, 43, 42, 41, 40, 39, 38, 37, 36, 35,
    34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21,
  ];

  const numLowerWhites = (range: number[]) =>
    range.reduce((acc, val) => (isWhite(val) ? acc + 1 : acc), 0);

  return (
    <Container sortableChildren>
      {keys.map((noteNumber, index) => {
        if (isWhite(index)) {
          return (
            <PianoKey
              key={index}
              color="white"
              width={whiteWidth}
              height={whiteHeight}
              y={
                whiteHeight *
                numLowerWhites(Array.from(Array(index), (v, k) => k))
              }
            />
          );
        } else {
          return (
            <PianoKey
              key={index}
              color="black"
              width={blackWidth}
              height={blackHeight}
              y={
                whiteHeight *
                  numLowerWhites(Array.from(Array(index), (v, k) => k)) +
                -blackHeight / 2
              }
            />
          );
        }
      })}
    </Container>
  );
};
