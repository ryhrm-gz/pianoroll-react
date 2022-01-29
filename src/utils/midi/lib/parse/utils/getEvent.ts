import { getInt } from "./getInt";

export const getEvent = (array: Uint8Array) => {
  const event: any = {};
  event.status = array[0];

  if (event.status === 0xff) {
    event.type = array[1];
    event.size = getInt(array.subarray(2, 3));
    event.data = array.subarray(3, 4 + event.size);

    array = array.subarray(3 + event.size, array.length);
  } else if (event.status >= 0x80 && event.status <= 0x9f) {
    event.channel = event.status & 0xf;
    event.note = array[1];
    event.velocity = array[2];
    array = array.subarray(3, array.length);
  }

  return { array, event };
};
