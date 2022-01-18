import { useState } from "react";
import { PianoRoll } from "./PianoRoll";

export const TestWrapper = () => {
  const [barNumber, setBarNumber] = useState(4);
  return (
    <>
      <PianoRoll barNumber={barNumber} />
    </>
  );
};
