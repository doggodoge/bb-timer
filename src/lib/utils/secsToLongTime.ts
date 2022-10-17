import type { Time } from '../types/Time';

function secsToLongTime(secs: number): Time {
  return {
    hour: Math.floor(secs / 3600).toString(10),
    minute: Math.floor((secs % 3600) / 60).toString(10),
    second: Math.floor((secs % 3600) % 60).toString(10),
  };
}

export default secsToLongTime;
