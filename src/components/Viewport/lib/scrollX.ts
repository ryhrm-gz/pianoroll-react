export const scrollX = (
  deltaX: number,
  speed: number,
  current: number
): number => {
  console.log(deltaX);
  if (deltaX > 0) {
    return current + speed;
  } else if (deltaX < 0) {
    return current - speed;
  } else {
    return current;
  }
};
