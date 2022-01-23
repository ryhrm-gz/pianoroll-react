import { parse } from "./parse";

export const midi = {
  parse: (midi: File) => parse(midi),
};
