export const getInt = (array: Uint8Array) => {
  let value = 0;
  for (let i = 0; i < array.length; i++) {
    value = (value << 8) + array[i];
  }
  return value;
};
