import { MidiData, Track } from "../../types";
import { loadFile } from "./utils/loadFile";
import { parseHeader } from "./utils/parseHeader";
import { parseTracks } from "./utils/parseTracks";

export const parse = async (file: File) => {
  try {
    const midiData: MidiData = {};
    const array = await loadFile(file);
    const header = parseHeader(array);
    midiData.header = header;
    const tracks: Track[][] = [];
    parseTracks(array.subarray(8 + header.size, array.length), tracks);
    midiData.tracks = tracks;
    return midiData;
  } catch (error: any) {
    throw {
      message: error,
    };
  }
};
