import { loadFile } from "../../utils/loadFile";

export const parse = async (file: File) => {
  try {
    const array = await loadFile(file);
    console.log(array);
  } catch (error) {
    console.log(error);
  }
};
