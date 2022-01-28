import { parse } from "./lib/parse";

export const midi = {
  parse: (file: File) => parse(file),
};
