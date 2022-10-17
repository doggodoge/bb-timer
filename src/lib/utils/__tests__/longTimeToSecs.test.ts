import longTimeToSecs from '../longTimeToSecs';

interface TestData {
  hrs: number;
  mins: number;
  secs: number;
  expected: number;
}

describe.each`
  hrs    | mins   | secs   | expected
  ${0}   | ${0}   | ${0}   | ${0}
  ${0}   | ${0}   | ${1}   | ${1}
  ${0}   | ${1}   | ${0}   | ${60}
  ${1}   | ${0}   | ${0}   | ${3600}
  ${1}   | ${1}   | ${0}   | ${3660}
  ${1}   | ${1}   | ${1}   | ${3661}
  ${12}  | ${3}   | ${14}  | ${43_394}
  ${1}   | ${132} | ${49}  | ${11_569}
  ${0}   | ${420} | ${69}  | ${25_269}
  ${123} | ${123} | ${123} | ${450_303}
`(
  'longTimeToSecs($hrs, $mins, $secs)',
  ({ hrs, mins, secs, expected }: TestData) => {
    it(`should equal ${expected}`, () => {
      expect(longTimeToSecs(hrs, mins, secs)).toEqual(expected);
    });
  }
);
