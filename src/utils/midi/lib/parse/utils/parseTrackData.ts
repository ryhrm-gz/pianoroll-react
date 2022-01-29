import { Track } from "../../../types";
import { getDeltatime } from "./getDeltaTime";
import { getEvent } from "./getEvent";

export const parseTrackData = (array: Uint8Array, tracks: Track[][]) => {
  const deltatimeResult = getDeltatime(array);
  const eventResult = getEvent(deltatimeResult.array);
  tracks[tracks.length - 1].push({
    deltatime: deltatimeResult.deltatime,
    event: eventResult.event,
  });

  if (eventResult.array.length > 0) {
    parseTrackData(eventResult.array, tracks);
  }
};
