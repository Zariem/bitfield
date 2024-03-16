import { BitField } from '../src';
import { test, expect } from '@jest/globals';

const TestPermissions = {
  P01: 1n << 0n,
  P02: 1n << 1n,
  P03: 1n << 2n,
  P04: 1n << 3n,
  P05: 1n << 4n,
  P06: 1n << 5n,
  P07: 1n << 6n,
  P08: 1n << 7n,
  P09: 1n << 8n,
  P10: 1n << 9n,
  P11: 1n << 10n,
  P12: 1n << 11n,
  P13: 1n << 12n,
  P14: 1n << 13n,
  P15: 1n << 14n,
  P16: 1n << 15n,
  P17: 1n << 16n,
  P18: 1n << 17n,
  P19: 1n << 18n,
  P20: 1n << 19n,
  P21: 1n << 20n,
  P22: 1n << 21n,
  P23: 1n << 22n,
  P24: 1n << 23n,
  P25: 1n << 24n,
  P26: 1n << 25n,
  P27: 1n << 26n,
  P28: 1n << 27n,
  P29: 1n << 28n,
  P30: 1n << 29n,
  P31: 1n << 30n,
  P32: 1n << 31n,
  P33: 1n << 32n,
  P34: 1n << 33n,
  P35: 1n << 34n,
  P36: 1n << 35n,
  P37: 1n << 36n,
  P38: 1n << 37n,
  P39: 1n << 38n,
  P40: 1n << 39n,
  P41: 1n << 40n,
  P42: 1n << 41n,
  P43: 1n << 42n,
  P44: 1n << 43n,
  P45: 1n << 44n,
  P46: 1n << 45n,
  P47: 1n << 46n,
  P48: 1n << 47n,
  P49: 1n << 48n,
  P50: 1n << 49n,
  P51: 1n << 50n,
  P52: 1n << 51n,
  P53: 1n << 52n,
  P54: 1n << 53n,
  P55: 1n << 54n,
  P56: 1n << 55n,
  P57: 1n << 56n,
  P58: 1n << 57n,
  P59: 1n << 58n,
  P60: 1n << 59n,
  P61: 1n << 60n,
  P62: 1n << 61n,
  P63: 1n << 62n,
  P64: 1n << 63n,
  P65: 1n << 64n,
  P66: 1n << 65n,
  P67: 1n << 66n,
  P68: 1n << 67n,
  P69: 1n << 68n,
  P70: 1n << 69n,
  P71: 1n << 70n,
  P72: BigInt(1) << BigInt(71),
};

const emptyBitField = new BitField(TestPermissions);

const oneBitBitfield = new BitField(TestPermissions);
oneBitBitfield.add(TestPermissions.P01);

const multiBitField = new BitField(TestPermissions);
multiBitField.addAll([
  TestPermissions.P04,
  TestPermissions.P12,
  TestPermissions.P05,
  TestPermissions.P30,
  TestPermissions.P23,
  TestPermissions.P45,
  TestPermissions.P47,
  TestPermissions.P62,
  TestPermissions.P68,
  TestPermissions.P71,
]);

const multiBitFieldRemove = new BitField(TestPermissions);
multiBitFieldRemove.addAll([
  TestPermissions.P04,
  TestPermissions.P12,
  TestPermissions.P05,
  TestPermissions.P30,
  TestPermissions.P23,
]);
multiBitFieldRemove.removeAll([TestPermissions.P05, TestPermissions.P12]);

test('empty bitfield', () => {
  expect(emptyBitField.has(TestPermissions.P01)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P02)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P03)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P04)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P05)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P06)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P07)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P08)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P09)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P10)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P11)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P12)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P13)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P14)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P15)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P16)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P17)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P18)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P19)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P20)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P21)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P22)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P23)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P24)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P25)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P26)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P27)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P28)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P29)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P30)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P31)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P32)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P33)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P34)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P35)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P36)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P37)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P38)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P39)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P40)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P41)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P42)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P43)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P44)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P45)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P46)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P47)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P48)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P49)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P50)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P51)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P52)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P53)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P54)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P55)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P56)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P57)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P58)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P59)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P60)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P61)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P62)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P63)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P64)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P65)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P66)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P67)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P68)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P69)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P70)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P71)).toEqual(false);
  expect(emptyBitField.has(TestPermissions.P72)).toEqual(false);
});

test('no entry added count', () => {
  expect(emptyBitField.missing(0xf134n).length).toEqual(8);
  expect(emptyBitField.missing(0xffffn).length).toEqual(16);
  expect(emptyBitField.missing(0xffffffffn).length).toEqual(32);
  expect(emptyBitField.missing(0xffffffffffn).length).toEqual(40);
  expect(emptyBitField.missing(0xffffffffffffffffffn).length).toEqual(72);
});

test('entry added', () => {
  expect(oneBitBitfield.has(TestPermissions.P01)).toEqual(true);
});

test('no other entry added', () => {
  expect(oneBitBitfield.has(TestPermissions.P02)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P03)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P04)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P05)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P06)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P07)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P08)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P09)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P10)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P11)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P12)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P13)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P14)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P15)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P16)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P17)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P18)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P19)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P20)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P21)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P22)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P23)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P24)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P25)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P26)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P27)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P28)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P29)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P30)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P31)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P32)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P33)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P34)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P35)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P36)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P37)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P38)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P39)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P40)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P41)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P42)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P43)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P44)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P45)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P46)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P47)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P48)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P49)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P50)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P51)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P52)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P53)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P54)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P55)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P56)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P57)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P58)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P59)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P60)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P61)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P62)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P63)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P64)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P65)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P66)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P67)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P68)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P69)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P70)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P71)).toEqual(false);
  expect(oneBitBitfield.has(TestPermissions.P72)).toEqual(false);
});

test('no other entry added count', () => {
  expect(oneBitBitfield.missing(0xf134n).length).toEqual(8);
  expect(oneBitBitfield.missing(0xf143n).length).toEqual(7);
  expect(oneBitBitfield.missing(0xffffn).length).toEqual(15);
  expect(oneBitBitfield.missing(0xffffffffn).length).toEqual(31);
  expect(oneBitBitfield.missing(0xffffffffffn).length).toEqual(39);
  expect(oneBitBitfield.missing(0xffffffffffffffffffn).length).toEqual(71);
});

test('multiple bits', () => {
  expect(multiBitField.has(TestPermissions.P01)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P02)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P03)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P04)).toEqual(true);
  expect(multiBitField.has(TestPermissions.P05)).toEqual(true);
  expect(multiBitField.has(TestPermissions.P06)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P07)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P08)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P09)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P10)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P11)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P12)).toEqual(true);
  expect(multiBitField.has(TestPermissions.P13)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P14)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P15)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P16)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P17)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P18)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P19)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P20)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P21)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P22)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P23)).toEqual(true);
  expect(multiBitField.has(TestPermissions.P24)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P25)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P26)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P27)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P28)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P29)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P30)).toEqual(true);
  expect(multiBitField.has(TestPermissions.P31)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P32)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P33)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P34)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P35)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P36)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P37)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P38)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P39)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P40)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P41)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P42)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P43)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P44)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P45)).toEqual(true);
  expect(multiBitField.has(TestPermissions.P46)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P47)).toEqual(true);
  expect(multiBitField.has(TestPermissions.P48)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P49)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P50)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P51)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P52)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P53)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P54)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P55)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P56)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P57)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P58)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P59)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P60)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P61)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P62)).toEqual(true);
  expect(multiBitField.has(TestPermissions.P63)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P64)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P65)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P66)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P67)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P68)).toEqual(true);
  expect(multiBitField.has(TestPermissions.P69)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P70)).toEqual(false);
  expect(multiBitField.has(TestPermissions.P71)).toEqual(true);
  expect(multiBitField.has(TestPermissions.P72)).toEqual(false);
});

test('multiple bits missings', () => {
  expect(multiBitField.missing(0xffffn).length).toEqual(13);
  expect(multiBitField.missing(0xffffffffn).length).toEqual(27);
  expect(multiBitField.missing(0xffffffffffn).length).toEqual(35);
  expect(multiBitField.missing(0xffffffffffffffffffn).length).toEqual(62);

  expect(multiBitField.missing(0x40e00934n)).toStrictEqual([
    TestPermissions.P03,
    TestPermissions.P06,
    TestPermissions.P09,
    TestPermissions.P22,
    TestPermissions.P24,
    TestPermissions.P31,
  ]);
  expect(multiBitField.missing(0x20400818n)).toStrictEqual([]);
  expect(multiBitField.missing(0xa0500a1an)).toStrictEqual([
    TestPermissions.P02,
    TestPermissions.P10,
    TestPermissions.P21,
    TestPermissions.P32,
  ]);
  expect(multiBitField.missing(0x892018000000000000n)).toStrictEqual([
    TestPermissions.P52,
    TestPermissions.P53,
    TestPermissions.P65,
    TestPermissions.P72,
  ]);
  expect(multiBitField.missing(0x8920180000a0500a1an)).toStrictEqual([
    TestPermissions.P02,
    TestPermissions.P10,
    TestPermissions.P21,
    TestPermissions.P32,
    TestPermissions.P52,
    TestPermissions.P53,
    TestPermissions.P65,
    TestPermissions.P72,
  ]);
});

test('hasAll', () => {
  expect(multiBitField.hasAll([TestPermissions.P01])).toEqual(false);
  expect(multiBitField.hasAll([TestPermissions.P01, TestPermissions.P04])).toEqual(false);
  expect(multiBitField.hasAll([TestPermissions.P04])).toEqual(true);
  expect(multiBitField.hasAll([TestPermissions.P04, TestPermissions.P12])).toEqual(true);
  expect(multiBitField.hasAll([TestPermissions.P04, TestPermissions.P05, TestPermissions.P12])).toEqual(true);
  expect(multiBitField.hasAll([TestPermissions.P04, TestPermissions.P05, TestPermissions.P13])).toEqual(false);
  expect(
    multiBitField.hasAll([
      TestPermissions.P04,
      TestPermissions.P05,
      TestPermissions.P12,
      TestPermissions.P23,
      TestPermissions.P30,
    ]),
  ).toEqual(true);
  expect(
    multiBitField.hasAll([
      TestPermissions.P04,
      TestPermissions.P18,
      TestPermissions.P05,
      TestPermissions.P12,
      TestPermissions.P23,
      TestPermissions.P30,
    ]),
  ).toEqual(false);
  expect(
    multiBitField.hasAll([
      TestPermissions.P04,
      TestPermissions.P22,
      TestPermissions.P05,
      TestPermissions.P12,
      TestPermissions.P23,
      TestPermissions.P30,
    ]),
  ).toEqual(false);
});

test('hasNumber', () => {
  expect(multiBitField.has(0xffffffffn)).toEqual(false);
  expect(multiBitField.has(0x20400818n)).toEqual(true);
  expect(multiBitField.has(0xa0500a1an)).toEqual(false);
  expect(multiBitField.has(0x20000808n)).toEqual(true);
  expect(multiBitField.has(0x20000804n)).toEqual(false);
  expect(multiBitField.has(0x482000500020400000n)).toEqual(true);
  expect(multiBitField.has(0x482000500020400818n)).toEqual(true);
  expect(multiBitField.has(0x482700500020400818n)).toEqual(false);
  expect(multiBitField.has(0x482000500020400819n)).toEqual(false);
});

test('multiple bits with removal', () => {
  expect(multiBitFieldRemove.has(TestPermissions.P01)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P02)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P03)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P04)).toEqual(true);
  expect(multiBitFieldRemove.has(TestPermissions.P05)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P06)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P07)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P08)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P09)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P10)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P11)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P12)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P13)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P14)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P15)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P16)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P17)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P18)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P19)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P20)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P21)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P22)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P23)).toEqual(true);
  expect(multiBitFieldRemove.has(TestPermissions.P24)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P25)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P26)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P27)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P28)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P29)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P30)).toEqual(true);
  expect(multiBitFieldRemove.has(TestPermissions.P31)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P32)).toEqual(false);
});

test('hasAllFromBitfield', () => {
  expect(multiBitField.hasAllFromBitfield(multiBitFieldRemove)).toEqual(true);
  expect(multiBitFieldRemove.hasAllFromBitfield(multiBitField)).toEqual(false);
  expect(multiBitField.hasAllFromBitfield(emptyBitField)).toEqual(true);
  expect(multiBitField.hasAllFromBitfield(oneBitBitfield)).toEqual(false);
});


const TestPermissions2 = {
  P01: 1n << 0n,
  P02: 1n << 799n,
  P03: 18n,
  P04: 1n << 799n,
}

const TestPermissions3 = {
  P01: 1n << 0n,
  P02: 1n << 799n,
  P04: 1n << 799n,
}

test('invalidBitFieldErrors', () => {
  expect(() => { new BitField(TestPermissions2) }).toThrow();
  expect(() => { new BitField(TestPermissions3) }).toThrow();
  expect(() => { new BitField(TestPermissions) }).not.toThrow();
});