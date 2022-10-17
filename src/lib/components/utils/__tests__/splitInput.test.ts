import splitInput from '../splitInput';
import type {Time} from "../../../types/Time";

interface TestData {
  text: string;
  expected: Time;
}

describe.each`
  text          | expected
  ${'12'}       | ${{ hour: '0', minute: '0', second: '12' }}
  ${'123'}      | ${{ hour: '0', minute: '1', second: '23' }}
  ${'1232'}     | ${{ hour: '0', minute: '12', second: '32' }}
  ${'12323'}    | ${{ hour: '1', minute: '23', second: '23' }}
  ${'123456'}   | ${{ hour: '12', minute: '34', second: '56' }}
  ${'999999'}   | ${{ hour: '99', minute: '99', second: '99' }}
  ${'12321232'} | ${{ hour: '32', minute: '12', second: '32' }}
`('splitInput($text)', ({ text, expected }: TestData) => {
  it(`should equal hour: ${expected.hour}, minute: ${expected.minute}, second: ${expected.second}`, () => {
    expect(splitInput(text)).toEqual(expected);
  });
});
