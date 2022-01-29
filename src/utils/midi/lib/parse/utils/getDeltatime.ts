export const getDeltatime = (array: Uint8Array) => {
  let value = 0;
  let i = 0;

  while (array[i] >= 0x80) {
    let a = array[i] ^ (1 << 7);
    value = (value << 7) | a;
    i++;
  }

  value = value | array[i];

  return { array: array.subarray(i + 1, array.length), deltatime: value };
};
