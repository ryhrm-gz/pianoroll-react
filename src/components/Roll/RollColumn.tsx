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
  const key8 = 108;
  const keys7_1 = Range.numeric(["B7", "C1"]);
  const keys0 = Range.numeric(["B6", "A6"]);
  return (
    <Container>
      <RollBlock
        color="white"
        x={width * sixteenth}
        y={0}
        width={width}
        height={16}
        noteNumber={key8}
        blockProperty={{
          bar,
          quarter,
          sixteenth,
          note: Note.get(Note.fromMidi(key8)).name,
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
    </Container>
  );
};
