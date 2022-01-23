import { getHex } from "./utils/getHex";

type dataType = {
  hex?: string[];
};

export const parse = async (midi: File) => {
  const data: dataType = { hex: [] };
  await getHex(midi, data);
  console.log(data);
};
