import chunk from './chunk';
import type { Time } from '../../types/Time';

const splitInput = (text: string): Time => {
  const [second, minute, hour] = chunk([...text].reverse(), 2).map(charArray =>
    charArray.reverse().join('')
  );
  return {
    hour: hour ?? '0',
    minute: minute ?? '0',
    second: second ?? '0',
  };
};

export default splitInput;
