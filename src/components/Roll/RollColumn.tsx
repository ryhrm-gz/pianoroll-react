import { Container } from "@inlet/react-pixi";
import { Note, Range } from "@tonaljs/tonal";
import { isWhite } from "../lib/isWhite";
import { RollBlock } from "./RollBlock";

type Props = {
  width: number;
  bar: number;
  quarter: number;
  sixteenth: number;
};

export const RollColumn = ({ width, bar, quarter, sixteenth }: Props) => {
  const keyTop = 108;
  const keys7_1 = Range.numeric(["B7", "C1"]);
  const keys0 = [23, 22];
  const keyBottom = 21;
  return (
    <>
      <RollBlock
        color="white"
        x={width * sixteenth}
        y={0}
        width={width}
        height={16}
        noteNumber={keyTop}
        blockProperty={{
          bar,
          quarter,
          sixteenth,
          note: Note.get(Note.fromMidi(keyTop)).name,
        }}
      />
      {keys7_1.map((noteNumber, index) => {
        if (isWhite(index + 1)) {
          return (
            <RollBlock
              key={`block_${bar + 1}_${quarter + 1}_${sixteenth}_${noteNumber}`}
              color="white"
              x={width * sixteenth}
              y={16 + index * ((16 * 7) / 12)}
              width={width}
              height={(16 * 7) / 12}
              noteNumber={noteNumber}
              blockProperty={{
                bar,
                quarter,
                sixteenth,
                note: Note.get(Note.fromMidi(noteNumber)).name,
              }}
            />
          );
        } else {
          return (
            <RollBlock
              key={`block_${bar + 1}_${quarter + 1}_${sixteenth}_${noteNumber}`}
              color="black"
              x={width * sixteenth}
              y={16 + index * ((16 * 7) / 12)}
              width={width}
              height={(16 * 7) / 12}
              noteNumber={noteNumber}
              blockProperty={{
                bar,
                quarter,
                sixteenth,
                note: Note.get(Note.fromMidi(noteNumber)).name,
              }}
            />
          );
        }
      })}

      {keys0.map((noteNumber, index) => {
        if (isWhite(index + 85)) {
          return (
            <RollBlock
              key={`block_${bar + 1}_${quarter + 1}_${sixteenth}_${noteNumber}`}
              color="white"
              x={width * sixteenth}
              y={790.6666666666667 + (index + 1) * ((16 * 7) / 12)}
              width={width}
              height={(16 * 7) / 12}
              noteNumber={noteNumber}
              blockProperty={{
                bar,
                quarter,
                sixteenth,
                note: Note.get(Note.fromMidi(noteNumber)).name,
              }}
            />
          );
        } else {
          return (
            <RollBlock
              key={`block_${bar + 1}_${quarter + 1}_${sixteenth}_${noteNumber}`}
              color="black"
              x={width * sixteenth}
              y={790.6666666666667 + (index + 1) * ((16 * 7) / 12)}
              width={width}
              height={(16 * 7) / 12}
              noteNumber={noteNumber}
              blockProperty={{
                bar,
                quarter,
                sixteenth,
                note: Note.get(Note.fromMidi(noteNumber)).name,
              }}
            />
          );
        }
      })}
      <RollBlock
        color="white"
        x={width * sixteenth}
        y={809.3333333333334 + (16 * 7) / 12}
        width={width}
        height={16}
        noteNumber={keyBottom}
        blockProperty={{
          bar,
          quarter,
          sixteenth,
          note: Note.get(Note.fromMidi(keyBottom)).name,
        }}
      />
    </>
  );
};
