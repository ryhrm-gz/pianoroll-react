export const scrollX = (
  deltaX: number,
  speed: number,
  current: number,
  right: number,
  numberBar: number
): number => {
  if (deltaX > 0) {
    return right >= 320 * numberBar ? current : current + speed;
  } else if (deltaX < 0) {
    return current - speed < 0 ? current : current - speed;
  } else {
    return current;
  }
};
