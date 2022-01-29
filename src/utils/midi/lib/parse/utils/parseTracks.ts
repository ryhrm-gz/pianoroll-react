import { Track } from "../../../types";
import { getInt } from "./getInt";
import { parseTrackData } from "./parseTrackData";

export const parseTracks = (array: Uint8Array, tracks: Track[][]) => {
  if (
    array[0] !== 0x4d ||
    array[1] !== 0x54 ||
    array[2] !== 0x72 ||
    array[3] !== 0x6b
  ) {
    throw "No track data";
  }

  const size = getInt(array.subarray(4, 8));
  const trackArray = array.subarray(8, 8 + size);
  tracks.push([]);
  parseTrackData(trackArray, tracks);
  if (array.length > 8 + size) {
    parseTracks(array.subarray(8 + size, array.length), tracks);
  }
};
