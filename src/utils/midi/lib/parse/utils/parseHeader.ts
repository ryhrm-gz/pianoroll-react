import { getInt } from "./getInt";

export type Header = {
  size: number;
  format: number;
  trackNumber: number;
  timeDivision: number;
  resolution: number;
};

export const parseHeader = (array: Uint8Array): Header => {
  const header = {
    size: getInt(array.subarray(4, 8)),
    format: array[9],
    trackNumber: getInt(array.subarray(10, 12)),
    timeDivision: array[12],
    resolution: getInt(array.subarray(12, 14)),
  };
  return header;
};
