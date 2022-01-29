export type Header = {
  size: number;
  format: number;
  trackNumber: number;
  timeDivision: number;
  resolution: number;
};

export type Track = {
  deltatime: number;
  event: {
    status: number;
    type?: number;
    size?: number;
    data?: Uint8Array;
  };
};

export type MidiData = {
  header?: Header;
  tracks?: Track[][];
};
