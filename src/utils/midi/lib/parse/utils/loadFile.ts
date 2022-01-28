export const loadFile = (file: File): Promise<Uint8Array> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const data = reader.result;
      const array = new Uint8Array(data as ArrayBuffer);

      if (
        array[0] !== 0x4d &&
        array[1] !== 0x54 &&
        array[2] !== 0x68 &&
        array[3] !== 0x64
      ) {
        reject("Not a MIDI file");
      }

      resolve(array);
    };

    reader.readAsArrayBuffer(file);
  });
};
