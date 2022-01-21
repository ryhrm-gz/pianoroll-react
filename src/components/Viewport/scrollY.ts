export const scrollY = (
  deltaY: number,
  speed: number,
  current: number,
  bottom: number
): number => {
  if (deltaY > 0) {
    return bottom < 833 ? current + speed : current;
  } else if (deltaY < 0) {
    return current - speed > 0 ? current - speed : 0;
  } else {
    return 0;
  }
};
