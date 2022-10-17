import secsToLongTime from '../secsToLongTime';

interface TestData {
  secs: number;
  expected: string;
}

describe.each`
  secs      | expected
  ${123212} | ${{ hour: '34', minute: '13', second: '32' }}
  ${321}    | ${{ hour: '0', minute: '5', second: '21' }}
  ${12}     | ${{ hour: '0', minute: '0', second: '12' }}
  ${1232}   | ${{ hour: '0', minute: '20', second: '32' }}
  ${0}      | ${{ hour: '0', minute: '0', second: '0' }}
  ${999999} | ${{ hour: '277', minute: '46', second: '39' }}
`('secsToLongTime($secs)', ({ secs, expected }: TestData) => {
  it(`should equal ${expected}`, () => {
    expect(secsToLongTime(secs)).toEqual(expected);
  });
});
