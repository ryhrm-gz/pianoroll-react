import { read } from "midifile-ts";

export const parseMidi = (file: File) => {
  const reader = new FileReader();

  reader.onload = (e) => {
    if (!e.target) {
      return;
    }
    const buf = e.target.result as ArrayBuffer;
    const midi = read(buf);
    console.log(midi);
  };

  reader.readAsArrayBuffer(file);
};
