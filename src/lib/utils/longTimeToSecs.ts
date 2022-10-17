const longTimeToSecs = (
  hours: number,
  minutes: number,
  seconds: number
): number => (hours ?? 0) * 60 * 60 + (minutes ?? 0) * 60 + (seconds ?? 0);

export default longTimeToSecs;
