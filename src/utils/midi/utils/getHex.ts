export const getHex = async (midi: File, data: any) => {
  const reader = new FileReader();

  reader.addEventListener("load", (event) => {
    if (!event.target) {
      return;
    }
    if (!event.target.result) {
      return;
    }
    if (typeof event.target.result === "string") {
      return;
    }
    const bytes = new Uint8Array(event.target.result);
    bytes.forEach((value) => {
      data.hex.push(("00" + value.toString(16).toUpperCase()).slice(-2));
    });
  });

  reader.readAsArrayBuffer(midi);
};
