import { isWhite } from "./isWhite";

export const numLowerWhites = (range: number[]) =>
  range.reduce((acc, val) => (isWhite(val) ? acc + 1 : acc), 0);
