import { loadFile } from "./utils/loadFile";
import { Header, parseHeader } from "./utils/parseHeader";

type MidiData = {
  header?: Header;
};

export const parse = async (file: File) => {
  const midiData: MidiData = {};
  try {
    const array = await loadFile(file);
    const header = parseHeader(array);
    midiData.header = header;
  } catch (error: any) {
    throw {
      message: error,
    };
  }
};
