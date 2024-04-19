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

const oneBitBitField = new BitField(TestPermissions);
oneBitBitField.add(TestPermissions.P01);

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

const fullBitField = new BitField(TestPermissions);
fullBitField.add(0xffffffffffffffffffn);

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
  expect(oneBitBitField.has(TestPermissions.P01)).toEqual(true);
});

test('no other entry added', () => {
  expect(oneBitBitField.has(TestPermissions.P02)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P03)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P04)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P05)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P06)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P07)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P08)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P09)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P10)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P11)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P12)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P13)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P14)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P15)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P16)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P17)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P18)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P19)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P20)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P21)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P22)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P23)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P24)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P25)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P26)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P27)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P28)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P29)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P30)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P31)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P32)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P33)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P34)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P35)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P36)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P37)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P38)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P39)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P40)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P41)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P42)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P43)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P44)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P45)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P46)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P47)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P48)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P49)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P50)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P51)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P52)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P53)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P54)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P55)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P56)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P57)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P58)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P59)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P60)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P61)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P62)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P63)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P64)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P65)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P66)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P67)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P68)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P69)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P70)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P71)).toEqual(false);
  expect(oneBitBitField.has(TestPermissions.P72)).toEqual(false);
});

test('no other entry added count', () => {
  expect(oneBitBitField.missing(0xf134n).length).toEqual(8);
  expect(oneBitBitField.missing(0xf143n).length).toEqual(7);
  expect(oneBitBitField.missing(0xffffn).length).toEqual(15);
  expect(oneBitBitField.missing(0xffffffffn).length).toEqual(31);
  expect(oneBitBitField.missing(0xffffffffffn).length).toEqual(39);
  expect(oneBitBitField.missing(0xffffffffffffffffffn).length).toEqual(71);
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

test('single bit missing', () => {
  expect(multiBitField.missing(TestPermissions.P01)).toStrictEqual([TestPermissions.P01]);
  expect(multiBitField.missing(TestPermissions.P02)).toStrictEqual([TestPermissions.P02]);
  expect(multiBitField.missing(TestPermissions.P03)).toStrictEqual([TestPermissions.P03]);
  expect(multiBitField.missing(TestPermissions.P04)).toStrictEqual([]);
  expect(multiBitField.missing(TestPermissions.P05)).toStrictEqual([]);
  expect(multiBitField.missing(TestPermissions.P06)).toStrictEqual([TestPermissions.P06]);
  expect(multiBitField.missing(TestPermissions.P07)).toStrictEqual([TestPermissions.P07]);
  expect(multiBitField.missing(TestPermissions.P08)).toStrictEqual([TestPermissions.P08]);
  expect(multiBitField.missing(TestPermissions.P09)).toStrictEqual([TestPermissions.P09]);
  expect(multiBitField.missing(TestPermissions.P10)).toStrictEqual([TestPermissions.P10]);
  expect(multiBitField.missing(TestPermissions.P11)).toStrictEqual([TestPermissions.P11]);
  expect(multiBitField.missing(TestPermissions.P12)).toStrictEqual([]);
  expect(multiBitField.missing(TestPermissions.P13)).toStrictEqual([TestPermissions.P13]);
  expect(multiBitField.missing(TestPermissions.P14)).toStrictEqual([TestPermissions.P14]);
  expect(multiBitField.missing(TestPermissions.P15)).toStrictEqual([TestPermissions.P15]);
  expect(multiBitField.missing(TestPermissions.P16)).toStrictEqual([TestPermissions.P16]);
  expect(multiBitField.missing(TestPermissions.P17)).toStrictEqual([TestPermissions.P17]);
  expect(multiBitField.missing(TestPermissions.P18)).toStrictEqual([TestPermissions.P18]);
  expect(multiBitField.missing(TestPermissions.P19)).toStrictEqual([TestPermissions.P19]);
  expect(multiBitField.missing(TestPermissions.P20)).toStrictEqual([TestPermissions.P20]);
  expect(multiBitField.missing(TestPermissions.P21)).toStrictEqual([TestPermissions.P21]);
  expect(multiBitField.missing(TestPermissions.P22)).toStrictEqual([TestPermissions.P22]);
  expect(multiBitField.missing(TestPermissions.P23)).toStrictEqual([]);
  expect(multiBitField.missing(TestPermissions.P24)).toStrictEqual([TestPermissions.P24]);
  expect(multiBitField.missing(TestPermissions.P25)).toStrictEqual([TestPermissions.P25]);
  expect(multiBitField.missing(TestPermissions.P26)).toStrictEqual([TestPermissions.P26]);
  expect(multiBitField.missing(TestPermissions.P27)).toStrictEqual([TestPermissions.P27]);
  expect(multiBitField.missing(TestPermissions.P28)).toStrictEqual([TestPermissions.P28]);
  expect(multiBitField.missing(TestPermissions.P29)).toStrictEqual([TestPermissions.P29]);
  expect(multiBitField.missing(TestPermissions.P30)).toStrictEqual([]);
  expect(multiBitField.missing(TestPermissions.P31)).toStrictEqual([TestPermissions.P31]);
  expect(multiBitField.missing(TestPermissions.P32)).toStrictEqual([TestPermissions.P32]);
  expect(multiBitField.missing(TestPermissions.P33)).toStrictEqual([TestPermissions.P33]);
  expect(multiBitField.missing(TestPermissions.P34)).toStrictEqual([TestPermissions.P34]);
  expect(multiBitField.missing(TestPermissions.P35)).toStrictEqual([TestPermissions.P35]);
  expect(multiBitField.missing(TestPermissions.P36)).toStrictEqual([TestPermissions.P36]);
  expect(multiBitField.missing(TestPermissions.P37)).toStrictEqual([TestPermissions.P37]);
  expect(multiBitField.missing(TestPermissions.P38)).toStrictEqual([TestPermissions.P38]);
  expect(multiBitField.missing(TestPermissions.P39)).toStrictEqual([TestPermissions.P39]);
  expect(multiBitField.missing(TestPermissions.P40)).toStrictEqual([TestPermissions.P40]);
  expect(multiBitField.missing(TestPermissions.P41)).toStrictEqual([TestPermissions.P41]);
  expect(multiBitField.missing(TestPermissions.P42)).toStrictEqual([TestPermissions.P42]);
  expect(multiBitField.missing(TestPermissions.P43)).toStrictEqual([TestPermissions.P43]);
  expect(multiBitField.missing(TestPermissions.P44)).toStrictEqual([TestPermissions.P44]);
  expect(multiBitField.missing(TestPermissions.P45)).toStrictEqual([]);
  expect(multiBitField.missing(TestPermissions.P46)).toStrictEqual([TestPermissions.P46]);
  expect(multiBitField.missing(TestPermissions.P47)).toStrictEqual([]);
  expect(multiBitField.missing(TestPermissions.P48)).toStrictEqual([TestPermissions.P48]);
  expect(multiBitField.missing(TestPermissions.P49)).toStrictEqual([TestPermissions.P49]);
  expect(multiBitField.missing(TestPermissions.P50)).toStrictEqual([TestPermissions.P50]);
  expect(multiBitField.missing(TestPermissions.P51)).toStrictEqual([TestPermissions.P51]);
  expect(multiBitField.missing(TestPermissions.P52)).toStrictEqual([TestPermissions.P52]);
  expect(multiBitField.missing(TestPermissions.P53)).toStrictEqual([TestPermissions.P53]);
  expect(multiBitField.missing(TestPermissions.P54)).toStrictEqual([TestPermissions.P54]);
  expect(multiBitField.missing(TestPermissions.P55)).toStrictEqual([TestPermissions.P55]);
  expect(multiBitField.missing(TestPermissions.P56)).toStrictEqual([TestPermissions.P56]);
  expect(multiBitField.missing(TestPermissions.P57)).toStrictEqual([TestPermissions.P57]);
  expect(multiBitField.missing(TestPermissions.P58)).toStrictEqual([TestPermissions.P58]);
  expect(multiBitField.missing(TestPermissions.P59)).toStrictEqual([TestPermissions.P59]);
  expect(multiBitField.missing(TestPermissions.P60)).toStrictEqual([TestPermissions.P60]);
  expect(multiBitField.missing(TestPermissions.P61)).toStrictEqual([TestPermissions.P61]);
  expect(multiBitField.missing(TestPermissions.P62)).toStrictEqual([]);
  expect(multiBitField.missing(TestPermissions.P63)).toStrictEqual([TestPermissions.P63]);
  expect(multiBitField.missing(TestPermissions.P64)).toStrictEqual([TestPermissions.P64]);
  expect(multiBitField.missing(TestPermissions.P65)).toStrictEqual([TestPermissions.P65]);
  expect(multiBitField.missing(TestPermissions.P66)).toStrictEqual([TestPermissions.P66]);
  expect(multiBitField.missing(TestPermissions.P67)).toStrictEqual([TestPermissions.P67]);
  expect(multiBitField.missing(TestPermissions.P68)).toStrictEqual([]);
  expect(multiBitField.missing(TestPermissions.P69)).toStrictEqual([TestPermissions.P69]);
  expect(multiBitField.missing(TestPermissions.P70)).toStrictEqual([TestPermissions.P70]);
  expect(multiBitField.missing(TestPermissions.P71)).toStrictEqual([]);
  expect(multiBitField.missing(TestPermissions.P72)).toStrictEqual([TestPermissions.P72]);
});

test('multiple bits missing pt.2', () => {
  expect(multiBitField.missingFrom([])).toStrictEqual([]);
  expect(multiBitField.missingFrom([TestPermissions.P01])).toStrictEqual([TestPermissions.P01]);
  expect(multiBitField.missingFrom([TestPermissions.P02])).toStrictEqual([TestPermissions.P02]);
  expect(multiBitField.missingFrom([TestPermissions.P03])).toStrictEqual([TestPermissions.P03]);
  expect(multiBitField.missingFrom([TestPermissions.P04])).toStrictEqual([]);
  expect(multiBitField.missingFrom([TestPermissions.P05])).toStrictEqual([]);
  expect(multiBitField.missingFrom([TestPermissions.P06])).toStrictEqual([TestPermissions.P06]);
  expect(multiBitField.missingFrom([TestPermissions.P07])).toStrictEqual([TestPermissions.P07]);
  expect(multiBitField.missingFrom([TestPermissions.P08])).toStrictEqual([TestPermissions.P08]);
  expect(multiBitField.missingFrom([TestPermissions.P09])).toStrictEqual([TestPermissions.P09]);
  expect(multiBitField.missingFrom([TestPermissions.P10])).toStrictEqual([TestPermissions.P10]);
  expect(multiBitField.missingFrom([TestPermissions.P11])).toStrictEqual([TestPermissions.P11]);
  expect(multiBitField.missingFrom([TestPermissions.P12])).toStrictEqual([]);
  expect(multiBitField.missingFrom([TestPermissions.P13])).toStrictEqual([TestPermissions.P13]);
  expect(multiBitField.missingFrom([TestPermissions.P14])).toStrictEqual([TestPermissions.P14]);
  expect(multiBitField.missingFrom([TestPermissions.P15])).toStrictEqual([TestPermissions.P15]);
  expect(multiBitField.missingFrom([TestPermissions.P16])).toStrictEqual([TestPermissions.P16]);
  expect(multiBitField.missingFrom([TestPermissions.P17])).toStrictEqual([TestPermissions.P17]);
  expect(multiBitField.missingFrom([TestPermissions.P18])).toStrictEqual([TestPermissions.P18]);
  expect(multiBitField.missingFrom([TestPermissions.P19])).toStrictEqual([TestPermissions.P19]);
  expect(multiBitField.missingFrom([TestPermissions.P20])).toStrictEqual([TestPermissions.P20]);
  expect(multiBitField.missingFrom([TestPermissions.P21])).toStrictEqual([TestPermissions.P21]);
  expect(multiBitField.missingFrom([TestPermissions.P22])).toStrictEqual([TestPermissions.P22]);
  expect(multiBitField.missingFrom([TestPermissions.P23])).toStrictEqual([]);
  expect(multiBitField.missingFrom([TestPermissions.P24])).toStrictEqual([TestPermissions.P24]);
  expect(multiBitField.missingFrom([TestPermissions.P25])).toStrictEqual([TestPermissions.P25]);
  expect(multiBitField.missingFrom([TestPermissions.P26])).toStrictEqual([TestPermissions.P26]);
  expect(multiBitField.missingFrom([TestPermissions.P27])).toStrictEqual([TestPermissions.P27]);
  expect(multiBitField.missingFrom([TestPermissions.P28])).toStrictEqual([TestPermissions.P28]);
  expect(multiBitField.missingFrom([TestPermissions.P29])).toStrictEqual([TestPermissions.P29]);
  expect(multiBitField.missingFrom([TestPermissions.P30])).toStrictEqual([]);
  expect(multiBitField.missingFrom([TestPermissions.P31])).toStrictEqual([TestPermissions.P31]);
  expect(multiBitField.missingFrom([TestPermissions.P32])).toStrictEqual([TestPermissions.P32]);
  expect(multiBitField.missingFrom([TestPermissions.P33])).toStrictEqual([TestPermissions.P33]);
  expect(multiBitField.missingFrom([TestPermissions.P34])).toStrictEqual([TestPermissions.P34]);
  expect(multiBitField.missingFrom([TestPermissions.P35])).toStrictEqual([TestPermissions.P35]);
  expect(multiBitField.missingFrom([TestPermissions.P36])).toStrictEqual([TestPermissions.P36]);
  expect(multiBitField.missingFrom([TestPermissions.P37])).toStrictEqual([TestPermissions.P37]);
  expect(multiBitField.missingFrom([TestPermissions.P38])).toStrictEqual([TestPermissions.P38]);
  expect(multiBitField.missingFrom([TestPermissions.P39])).toStrictEqual([TestPermissions.P39]);
  expect(multiBitField.missingFrom([TestPermissions.P40])).toStrictEqual([TestPermissions.P40]);
  expect(multiBitField.missingFrom([TestPermissions.P41])).toStrictEqual([TestPermissions.P41]);
  expect(multiBitField.missingFrom([TestPermissions.P42])).toStrictEqual([TestPermissions.P42]);
  expect(multiBitField.missingFrom([TestPermissions.P43])).toStrictEqual([TestPermissions.P43]);
  expect(multiBitField.missingFrom([TestPermissions.P44])).toStrictEqual([TestPermissions.P44]);
  expect(multiBitField.missingFrom([TestPermissions.P45])).toStrictEqual([]);
  expect(multiBitField.missingFrom([TestPermissions.P46])).toStrictEqual([TestPermissions.P46]);
  expect(multiBitField.missingFrom([TestPermissions.P47])).toStrictEqual([]);
  expect(multiBitField.missingFrom([TestPermissions.P48])).toStrictEqual([TestPermissions.P48]);
  expect(multiBitField.missingFrom([TestPermissions.P49])).toStrictEqual([TestPermissions.P49]);
  expect(multiBitField.missingFrom([TestPermissions.P50])).toStrictEqual([TestPermissions.P50]);
  expect(multiBitField.missingFrom([TestPermissions.P51])).toStrictEqual([TestPermissions.P51]);
  expect(multiBitField.missingFrom([TestPermissions.P52])).toStrictEqual([TestPermissions.P52]);
  expect(multiBitField.missingFrom([TestPermissions.P53])).toStrictEqual([TestPermissions.P53]);
  expect(multiBitField.missingFrom([TestPermissions.P54])).toStrictEqual([TestPermissions.P54]);
  expect(multiBitField.missingFrom([TestPermissions.P55])).toStrictEqual([TestPermissions.P55]);
  expect(multiBitField.missingFrom([TestPermissions.P56])).toStrictEqual([TestPermissions.P56]);
  expect(multiBitField.missingFrom([TestPermissions.P57])).toStrictEqual([TestPermissions.P57]);
  expect(multiBitField.missingFrom([TestPermissions.P58])).toStrictEqual([TestPermissions.P58]);
  expect(multiBitField.missingFrom([TestPermissions.P59])).toStrictEqual([TestPermissions.P59]);
  expect(multiBitField.missingFrom([TestPermissions.P60])).toStrictEqual([TestPermissions.P60]);
  expect(multiBitField.missingFrom([TestPermissions.P61])).toStrictEqual([TestPermissions.P61]);
  expect(multiBitField.missingFrom([TestPermissions.P62])).toStrictEqual([]);
  expect(multiBitField.missingFrom([TestPermissions.P63])).toStrictEqual([TestPermissions.P63]);
  expect(multiBitField.missingFrom([TestPermissions.P64])).toStrictEqual([TestPermissions.P64]);
  expect(multiBitField.missingFrom([TestPermissions.P65])).toStrictEqual([TestPermissions.P65]);
  expect(multiBitField.missingFrom([TestPermissions.P66])).toStrictEqual([TestPermissions.P66]);
  expect(multiBitField.missingFrom([TestPermissions.P67])).toStrictEqual([TestPermissions.P67]);
  expect(multiBitField.missingFrom([TestPermissions.P68])).toStrictEqual([]);
  expect(multiBitField.missingFrom([TestPermissions.P69])).toStrictEqual([TestPermissions.P69]);
  expect(multiBitField.missingFrom([TestPermissions.P70])).toStrictEqual([TestPermissions.P70]);
  expect(multiBitField.missingFrom([TestPermissions.P71])).toStrictEqual([]);
  expect(multiBitField.missingFrom([TestPermissions.P72])).toStrictEqual([TestPermissions.P72]);
  expect(
    multiBitField.missingFrom([
      TestPermissions.P04,
      TestPermissions.P05,
      TestPermissions.P12,
      TestPermissions.P23,
      TestPermissions.P30,
      TestPermissions.P45,
      TestPermissions.P47,
      TestPermissions.P62,
      TestPermissions.P68,
      TestPermissions.P71,
    ]),
  ).toStrictEqual([]);
  expect(
    multiBitField.missingFrom([
      TestPermissions.P04,
      TestPermissions.P05,
      TestPermissions.P12,
      TestPermissions.P68,
      TestPermissions.P71,
    ]),
  ).toStrictEqual([]);
  expect(
    multiBitField.missingFrom([
      TestPermissions.P02,
      TestPermissions.P30,
      TestPermissions.P45,
      TestPermissions.P47,
      TestPermissions.P62,
      TestPermissions.P68,
      TestPermissions.P71,
    ]),
  ).toStrictEqual([TestPermissions.P02]);
  expect(
    multiBitField.missingFrom([
      TestPermissions.P01,
      TestPermissions.P02,
      TestPermissions.P03,
      TestPermissions.P04,
      TestPermissions.P05,
      TestPermissions.P06,
      TestPermissions.P07,
      TestPermissions.P08,
      TestPermissions.P09,
      TestPermissions.P10,
      TestPermissions.P11,
      TestPermissions.P12,
      TestPermissions.P13,
      TestPermissions.P14,
      TestPermissions.P15,
      TestPermissions.P16,
      TestPermissions.P17,
      TestPermissions.P18,
      TestPermissions.P19,
      TestPermissions.P20,
      TestPermissions.P21,
      TestPermissions.P22,
      TestPermissions.P23,
      TestPermissions.P24,
      TestPermissions.P25,
      TestPermissions.P26,
      TestPermissions.P27,
      TestPermissions.P28,
      TestPermissions.P29,
      TestPermissions.P30,
      TestPermissions.P31,
      TestPermissions.P32,
      TestPermissions.P33,
      TestPermissions.P34,
      TestPermissions.P35,
      TestPermissions.P36,
      TestPermissions.P37,
      TestPermissions.P38,
      TestPermissions.P39,
      TestPermissions.P40,
      TestPermissions.P41,
      TestPermissions.P42,
      TestPermissions.P43,
      TestPermissions.P44,
      TestPermissions.P45,
      TestPermissions.P46,
      TestPermissions.P47,
      TestPermissions.P48,
      TestPermissions.P49,
      TestPermissions.P50,
      TestPermissions.P51,
      TestPermissions.P52,
      TestPermissions.P53,
      TestPermissions.P54,
      TestPermissions.P55,
      TestPermissions.P56,
      TestPermissions.P57,
      TestPermissions.P58,
      TestPermissions.P59,
      TestPermissions.P60,
      TestPermissions.P61,
      TestPermissions.P62,
      TestPermissions.P63,
      TestPermissions.P64,
      TestPermissions.P65,
      TestPermissions.P66,
      TestPermissions.P67,
      TestPermissions.P68,
      TestPermissions.P69,
      TestPermissions.P70,
      TestPermissions.P71,
      TestPermissions.P72,
    ]),
  ).toStrictEqual([
    TestPermissions.P01,
    TestPermissions.P02,
    TestPermissions.P03,
    TestPermissions.P06,
    TestPermissions.P07,
    TestPermissions.P08,
    TestPermissions.P09,
    TestPermissions.P10,
    TestPermissions.P11,
    TestPermissions.P13,
    TestPermissions.P14,
    TestPermissions.P15,
    TestPermissions.P16,
    TestPermissions.P17,
    TestPermissions.P18,
    TestPermissions.P19,
    TestPermissions.P20,
    TestPermissions.P21,
    TestPermissions.P22,
    TestPermissions.P24,
    TestPermissions.P25,
    TestPermissions.P26,
    TestPermissions.P27,
    TestPermissions.P28,
    TestPermissions.P29,
    TestPermissions.P31,
    TestPermissions.P32,
    TestPermissions.P33,
    TestPermissions.P34,
    TestPermissions.P35,
    TestPermissions.P36,
    TestPermissions.P37,
    TestPermissions.P38,
    TestPermissions.P39,
    TestPermissions.P40,
    TestPermissions.P41,
    TestPermissions.P42,
    TestPermissions.P43,
    TestPermissions.P44,
    TestPermissions.P46,
    TestPermissions.P48,
    TestPermissions.P49,
    TestPermissions.P50,
    TestPermissions.P51,
    TestPermissions.P52,
    TestPermissions.P53,
    TestPermissions.P54,
    TestPermissions.P55,
    TestPermissions.P56,
    TestPermissions.P57,
    TestPermissions.P58,
    TestPermissions.P59,
    TestPermissions.P60,
    TestPermissions.P61,
    TestPermissions.P63,
    TestPermissions.P64,
    TestPermissions.P65,
    TestPermissions.P66,
    TestPermissions.P67,
    TestPermissions.P69,
    TestPermissions.P70,
    TestPermissions.P72,
  ]);
});

test('missing from bitfield', () => {
  expect(multiBitField.missingFromBitfield(emptyBitField)).toStrictEqual([]);
  expect(multiBitField.missingFromBitfield(oneBitBitField)).toStrictEqual([TestPermissions.P01]);
  expect(multiBitField.missingFromBitfield(multiBitFieldRemove)).toStrictEqual([]);
  expect(multiBitField.missingFromBitfield(multiBitField)).toStrictEqual([]);
  expect(multiBitFieldRemove.missingFromBitfield(multiBitField)).toStrictEqual([
    TestPermissions.P05,
    TestPermissions.P12,
    TestPermissions.P45,
    TestPermissions.P47,
    TestPermissions.P62,
    TestPermissions.P68,
    TestPermissions.P71,
  ]);
  expect(multiBitField.missingFromBitfield(fullBitField)).toStrictEqual([
    TestPermissions.P01,
    TestPermissions.P02,
    TestPermissions.P03,
    TestPermissions.P06,
    TestPermissions.P07,
    TestPermissions.P08,
    TestPermissions.P09,
    TestPermissions.P10,
    TestPermissions.P11,
    TestPermissions.P13,
    TestPermissions.P14,
    TestPermissions.P15,
    TestPermissions.P16,
    TestPermissions.P17,
    TestPermissions.P18,
    TestPermissions.P19,
    TestPermissions.P20,
    TestPermissions.P21,
    TestPermissions.P22,
    TestPermissions.P24,
    TestPermissions.P25,
    TestPermissions.P26,
    TestPermissions.P27,
    TestPermissions.P28,
    TestPermissions.P29,
    TestPermissions.P31,
    TestPermissions.P32,
    TestPermissions.P33,
    TestPermissions.P34,
    TestPermissions.P35,
    TestPermissions.P36,
    TestPermissions.P37,
    TestPermissions.P38,
    TestPermissions.P39,
    TestPermissions.P40,
    TestPermissions.P41,
    TestPermissions.P42,
    TestPermissions.P43,
    TestPermissions.P44,
    TestPermissions.P46,
    TestPermissions.P48,
    TestPermissions.P49,
    TestPermissions.P50,
    TestPermissions.P51,
    TestPermissions.P52,
    TestPermissions.P53,
    TestPermissions.P54,
    TestPermissions.P55,
    TestPermissions.P56,
    TestPermissions.P57,
    TestPermissions.P58,
    TestPermissions.P59,
    TestPermissions.P60,
    TestPermissions.P61,
    TestPermissions.P63,
    TestPermissions.P64,
    TestPermissions.P65,
    TestPermissions.P66,
    TestPermissions.P67,
    TestPermissions.P69,
    TestPermissions.P70,
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
  expect(multiBitFieldRemove.has(TestPermissions.P33)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P34)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P35)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P36)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P37)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P38)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P39)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P40)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P41)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P42)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P43)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P44)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P45)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P46)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P47)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P48)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P49)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P50)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P51)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P52)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P53)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P54)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P55)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P56)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P57)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P58)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P59)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P60)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P61)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P62)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P63)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P64)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P65)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P66)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P67)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P68)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P69)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P70)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P71)).toEqual(false);
  expect(multiBitFieldRemove.has(TestPermissions.P72)).toEqual(false);
});

test('hasAllFromBitfield', () => {
  expect(multiBitField.hasAllFromBitfield(multiBitFieldRemove)).toEqual(true);
  expect(multiBitFieldRemove.hasAllFromBitfield(multiBitField)).toEqual(false);
  expect(multiBitField.hasAllFromBitfield(emptyBitField)).toEqual(true);
  expect(multiBitField.hasAllFromBitfield(oneBitBitField)).toEqual(false);
});

test('to array', () => {
  expect(emptyBitField.toArray()).toStrictEqual([]);
  expect(oneBitBitField.toArray()).toStrictEqual([TestPermissions.P01]);
  expect(multiBitField.toArray()).toStrictEqual([
    TestPermissions.P04,
    TestPermissions.P05,
    TestPermissions.P12,
    TestPermissions.P23,
    TestPermissions.P30,
    TestPermissions.P45,
    TestPermissions.P47,
    TestPermissions.P62,
    TestPermissions.P68,
    TestPermissions.P71,
  ]);
  expect(multiBitFieldRemove.toArray()).toStrictEqual([TestPermissions.P04, TestPermissions.P23, TestPermissions.P30]);
});

test('anyBits', () => {
  expect(multiBitField.anyBits(0xffffffffn)).toEqual(true);
  expect(multiBitField.anyBits(0x0n)).toEqual(false);
  expect(multiBitField.anyBits(0x482000500020400818n)).toEqual(true);
  expect(multiBitField.anyBits(0x400000000000000000n)).toEqual(true);
  expect(multiBitField.anyBits(0x080000000000000000n)).toEqual(true);
  expect(multiBitField.anyBits(0x002000000000000000n)).toEqual(true);
  expect(multiBitField.anyBits(0x000000500000000000n)).toEqual(true);
  expect(multiBitField.anyBits(0x000000400000000000n)).toEqual(true);
  expect(multiBitField.anyBits(0x000000100000000000n)).toEqual(true);
  expect(multiBitField.anyBits(0x000000000020000000n)).toEqual(true);
  expect(multiBitField.anyBits(0x000000000000400000n)).toEqual(true);
  expect(multiBitField.anyBits(0x000000000000000800n)).toEqual(true);
  expect(multiBitField.anyBits(0x000000000000000010n)).toEqual(true);
  expect(multiBitField.anyBits(0x000000000000000008n)).toEqual(true);
  expect(multiBitField.anyBits(0x300000000000000000n)).toEqual(false);
  expect(multiBitField.anyBits(0x000000001000000000n)).toEqual(false);
  expect(multiBitField.anyBits(0x000fff0fff0f0ff000n)).toEqual(false);
  expect(multiBitField.anyBits(0x000fff0fff0f0ff000n)).toEqual(false);
  expect(multiBitField.anyBits(0xb7dfffafffdfbff7e7n)).toEqual(false);
  expect(multiBitField.anyBits(0xb7dfffafffdfbff7e7n)).toEqual(false);
  expect(multiBitField.anyBits(0xc7dfffafffdfbff7e7n)).toEqual(true);
  expect(multiBitField.anyBits(0xbfdfffafffdfbff7e7n)).toEqual(true);
  expect(multiBitField.anyBits(0xb7efffafffdfbff7e7n)).toEqual(true);
  expect(multiBitField.anyBits(0xb7ffffafffdfbff7e7n)).toEqual(true);
  expect(multiBitField.anyBits(0xb7dfffbfffdfbff7e7n)).toEqual(true);
  expect(multiBitField.anyBits(0xb7dfffcfffdfbff7e7n)).toEqual(true);
  expect(multiBitField.anyBits(0xb7dfffdfffdfbff7e7n)).toEqual(true);
  expect(multiBitField.anyBits(0xb7dfffefffdfbff7e7n)).toEqual(true);
  expect(multiBitField.anyBits(0xb7dfffffffdfbff7e7n)).toEqual(true);
  expect(multiBitField.anyBits(0xb7dfffafffefbff7e7n)).toEqual(true);
  expect(multiBitField.anyBits(0xb7dfffafffffbff7e7n)).toEqual(true);
  expect(multiBitField.anyBits(0xb7dfffafffdfcff7e7n)).toEqual(true);
  expect(multiBitField.anyBits(0xb7dfffafffdfdff7e7n)).toEqual(true);
  expect(multiBitField.anyBits(0xb7dfffafffdfeff7e7n)).toEqual(true);
  expect(multiBitField.anyBits(0xb7dfffafffdffff7e7n)).toEqual(true);
  expect(multiBitField.anyBits(0xb7dfffafffdfbff8e7n)).toEqual(true);
  expect(multiBitField.anyBits(0xb7dfffafffdfbff9e7n)).toEqual(true);
  expect(multiBitField.anyBits(0xb7dfffafffdfbffae7n)).toEqual(true);
  expect(multiBitField.anyBits(0xb7dfffafffdfbffbe7n)).toEqual(true);
  expect(multiBitField.anyBits(0xb7dfffafffdfbffce7n)).toEqual(true);
  expect(multiBitField.anyBits(0xb7dfffafffdfbffde7n)).toEqual(true);
  expect(multiBitField.anyBits(0xb7dfffafffdfbffee7n)).toEqual(true);
  expect(multiBitField.anyBits(0xb7dfffafffdfbfffe7n)).toEqual(true);
  expect(multiBitField.anyBits(0xb7dfffafffdfbff7f7n)).toEqual(true);
  expect(multiBitField.anyBits(0xb7dfffafffdfbff7e8n)).toEqual(true);
  expect(multiBitField.anyBits(0xb7dfffafffdfbff7e9n)).toEqual(true);
  expect(multiBitField.anyBits(0xb7dfffafffdfbff7ean)).toEqual(true);
  expect(multiBitField.anyBits(0xb7dfffafffdfbff7ebn)).toEqual(true);
  expect(multiBitField.anyBits(0xb7dfffafffdfbff7ecn)).toEqual(true);
  expect(multiBitField.anyBits(0xb7dfffafffdfbff7edn)).toEqual(true);
  expect(multiBitField.anyBits(0xb7dfffafffdfbff7een)).toEqual(true);
  expect(multiBitField.anyBits(0xb7dfffafffdfbff7efn)).toEqual(true);
});

test('hasAny', () => {
  expect(multiBitField.hasAny([TestPermissions.P01])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P02])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P03])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P04])).toEqual(true);
  expect(multiBitField.hasAny([TestPermissions.P05])).toEqual(true);
  expect(multiBitField.hasAny([TestPermissions.P06])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P07])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P08])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P09])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P10])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P11])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P12])).toEqual(true);
  expect(multiBitField.hasAny([TestPermissions.P13])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P14])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P15])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P16])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P17])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P18])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P19])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P20])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P21])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P22])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P23])).toEqual(true);
  expect(multiBitField.hasAny([TestPermissions.P24])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P25])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P26])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P27])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P28])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P29])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P30])).toEqual(true);
  expect(multiBitField.hasAny([TestPermissions.P31])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P32])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P33])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P34])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P35])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P36])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P37])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P38])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P39])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P40])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P41])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P42])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P43])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P44])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P45])).toEqual(true);
  expect(multiBitField.hasAny([TestPermissions.P46])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P47])).toEqual(true);
  expect(multiBitField.hasAny([TestPermissions.P48])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P49])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P50])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P51])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P52])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P53])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P54])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P55])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P56])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P57])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P58])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P59])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P60])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P61])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P62])).toEqual(true);
  expect(multiBitField.hasAny([TestPermissions.P63])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P64])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P65])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P66])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P67])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P68])).toEqual(true);
  expect(multiBitField.hasAny([TestPermissions.P69])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P70])).toEqual(false);
  expect(multiBitField.hasAny([TestPermissions.P71])).toEqual(true);
  expect(multiBitField.hasAny([TestPermissions.P72])).toEqual(false);
  expect(
    multiBitField.hasAny([
      TestPermissions.P01,
      TestPermissions.P02,
      TestPermissions.P03,
      TestPermissions.P06,
      TestPermissions.P07,
      TestPermissions.P08,
      TestPermissions.P09,
      TestPermissions.P10,
      TestPermissions.P11,
      TestPermissions.P13,
      TestPermissions.P14,
      TestPermissions.P15,
      TestPermissions.P16,
      TestPermissions.P17,
      TestPermissions.P18,
      TestPermissions.P19,
      TestPermissions.P20,
      TestPermissions.P21,
      TestPermissions.P22,
      TestPermissions.P24,
      TestPermissions.P25,
      TestPermissions.P26,
      TestPermissions.P27,
      TestPermissions.P28,
      TestPermissions.P29,
      TestPermissions.P31,
      TestPermissions.P32,
      TestPermissions.P33,
      TestPermissions.P34,
      TestPermissions.P35,
      TestPermissions.P36,
      TestPermissions.P37,
      TestPermissions.P38,
      TestPermissions.P39,
      TestPermissions.P40,
      TestPermissions.P41,
      TestPermissions.P42,
      TestPermissions.P43,
      TestPermissions.P44,
      TestPermissions.P46,
      TestPermissions.P48,
      TestPermissions.P49,
      TestPermissions.P50,
      TestPermissions.P51,
      TestPermissions.P52,
      TestPermissions.P53,
      TestPermissions.P54,
      TestPermissions.P55,
      TestPermissions.P56,
      TestPermissions.P57,
      TestPermissions.P58,
      TestPermissions.P59,
      TestPermissions.P60,
      TestPermissions.P61,
      TestPermissions.P63,
      TestPermissions.P64,
      TestPermissions.P65,
      TestPermissions.P66,
      TestPermissions.P67,
      TestPermissions.P69,
      TestPermissions.P70,
      TestPermissions.P72,
    ]),
  ).toEqual(false);
  expect(
    multiBitField.hasAny([
      TestPermissions.P01,
      TestPermissions.P02,
      TestPermissions.P03,
      TestPermissions.P04,
      TestPermissions.P06,
      TestPermissions.P07,
      TestPermissions.P08,
      TestPermissions.P09,
      TestPermissions.P10,
      TestPermissions.P11,
      TestPermissions.P13,
      TestPermissions.P14,
      TestPermissions.P15,
      TestPermissions.P16,
      TestPermissions.P17,
      TestPermissions.P18,
      TestPermissions.P19,
      TestPermissions.P20,
      TestPermissions.P21,
      TestPermissions.P22,
      TestPermissions.P24,
      TestPermissions.P25,
      TestPermissions.P26,
      TestPermissions.P27,
      TestPermissions.P28,
      TestPermissions.P29,
      TestPermissions.P31,
      TestPermissions.P32,
      TestPermissions.P33,
      TestPermissions.P34,
      TestPermissions.P35,
      TestPermissions.P36,
      TestPermissions.P37,
      TestPermissions.P38,
      TestPermissions.P39,
      TestPermissions.P40,
      TestPermissions.P41,
      TestPermissions.P42,
      TestPermissions.P43,
      TestPermissions.P44,
      TestPermissions.P46,
      TestPermissions.P48,
      TestPermissions.P49,
      TestPermissions.P50,
      TestPermissions.P51,
      TestPermissions.P52,
      TestPermissions.P53,
      TestPermissions.P54,
      TestPermissions.P55,
      TestPermissions.P56,
      TestPermissions.P57,
      TestPermissions.P58,
      TestPermissions.P59,
      TestPermissions.P60,
      TestPermissions.P61,
      TestPermissions.P63,
      TestPermissions.P64,
      TestPermissions.P65,
      TestPermissions.P66,
      TestPermissions.P67,
      TestPermissions.P69,
      TestPermissions.P70,
      TestPermissions.P72,
    ]),
  ).toEqual(true);
  expect(
    multiBitField.hasAny([
      TestPermissions.P01,
      TestPermissions.P02,
      TestPermissions.P03,
      TestPermissions.P06,
      TestPermissions.P07,
      TestPermissions.P08,
      TestPermissions.P09,
      TestPermissions.P10,
      TestPermissions.P11,
      TestPermissions.P12,
      TestPermissions.P13,
      TestPermissions.P14,
      TestPermissions.P15,
      TestPermissions.P16,
      TestPermissions.P17,
      TestPermissions.P18,
      TestPermissions.P19,
      TestPermissions.P20,
      TestPermissions.P21,
      TestPermissions.P22,
      TestPermissions.P24,
      TestPermissions.P25,
      TestPermissions.P26,
      TestPermissions.P27,
      TestPermissions.P28,
      TestPermissions.P29,
      TestPermissions.P31,
      TestPermissions.P32,
      TestPermissions.P33,
      TestPermissions.P34,
      TestPermissions.P35,
      TestPermissions.P36,
      TestPermissions.P37,
      TestPermissions.P38,
      TestPermissions.P39,
      TestPermissions.P40,
      TestPermissions.P41,
      TestPermissions.P42,
      TestPermissions.P43,
      TestPermissions.P44,
      TestPermissions.P46,
      TestPermissions.P48,
      TestPermissions.P49,
      TestPermissions.P50,
      TestPermissions.P51,
      TestPermissions.P52,
      TestPermissions.P53,
      TestPermissions.P54,
      TestPermissions.P55,
      TestPermissions.P56,
      TestPermissions.P57,
      TestPermissions.P58,
      TestPermissions.P59,
      TestPermissions.P60,
      TestPermissions.P61,
      TestPermissions.P63,
      TestPermissions.P64,
      TestPermissions.P65,
      TestPermissions.P66,
      TestPermissions.P67,
      TestPermissions.P69,
      TestPermissions.P70,
      TestPermissions.P72,
    ]),
  ).toEqual(true);
  expect(
    multiBitField.hasAny([
      TestPermissions.P01,
      TestPermissions.P02,
      TestPermissions.P03,
      TestPermissions.P06,
      TestPermissions.P07,
      TestPermissions.P08,
      TestPermissions.P09,
      TestPermissions.P10,
      TestPermissions.P11,
      TestPermissions.P13,
      TestPermissions.P14,
      TestPermissions.P15,
      TestPermissions.P16,
      TestPermissions.P17,
      TestPermissions.P18,
      TestPermissions.P19,
      TestPermissions.P20,
      TestPermissions.P21,
      TestPermissions.P22,
      TestPermissions.P23,
      TestPermissions.P24,
      TestPermissions.P25,
      TestPermissions.P26,
      TestPermissions.P27,
      TestPermissions.P28,
      TestPermissions.P29,
      TestPermissions.P31,
      TestPermissions.P32,
      TestPermissions.P33,
      TestPermissions.P34,
      TestPermissions.P35,
      TestPermissions.P36,
      TestPermissions.P37,
      TestPermissions.P38,
      TestPermissions.P39,
      TestPermissions.P40,
      TestPermissions.P41,
      TestPermissions.P42,
      TestPermissions.P43,
      TestPermissions.P44,
      TestPermissions.P46,
      TestPermissions.P48,
      TestPermissions.P49,
      TestPermissions.P50,
      TestPermissions.P51,
      TestPermissions.P52,
      TestPermissions.P53,
      TestPermissions.P54,
      TestPermissions.P55,
      TestPermissions.P56,
      TestPermissions.P57,
      TestPermissions.P58,
      TestPermissions.P59,
      TestPermissions.P60,
      TestPermissions.P61,
      TestPermissions.P63,
      TestPermissions.P64,
      TestPermissions.P65,
      TestPermissions.P66,
      TestPermissions.P67,
      TestPermissions.P69,
      TestPermissions.P70,
      TestPermissions.P72,
    ]),
  ).toEqual(true);
  expect(
    multiBitField.hasAny([
      TestPermissions.P01,
      TestPermissions.P02,
      TestPermissions.P03,
      TestPermissions.P06,
      TestPermissions.P07,
      TestPermissions.P08,
      TestPermissions.P09,
      TestPermissions.P10,
      TestPermissions.P11,
      TestPermissions.P13,
      TestPermissions.P14,
      TestPermissions.P15,
      TestPermissions.P16,
      TestPermissions.P17,
      TestPermissions.P18,
      TestPermissions.P19,
      TestPermissions.P20,
      TestPermissions.P21,
      TestPermissions.P22,
      TestPermissions.P24,
      TestPermissions.P25,
      TestPermissions.P26,
      TestPermissions.P27,
      TestPermissions.P28,
      TestPermissions.P29,
      TestPermissions.P30,
      TestPermissions.P31,
      TestPermissions.P32,
      TestPermissions.P33,
      TestPermissions.P34,
      TestPermissions.P35,
      TestPermissions.P36,
      TestPermissions.P37,
      TestPermissions.P38,
      TestPermissions.P39,
      TestPermissions.P40,
      TestPermissions.P41,
      TestPermissions.P42,
      TestPermissions.P43,
      TestPermissions.P44,
      TestPermissions.P46,
      TestPermissions.P48,
      TestPermissions.P49,
      TestPermissions.P50,
      TestPermissions.P51,
      TestPermissions.P52,
      TestPermissions.P53,
      TestPermissions.P54,
      TestPermissions.P55,
      TestPermissions.P56,
      TestPermissions.P57,
      TestPermissions.P58,
      TestPermissions.P59,
      TestPermissions.P60,
      TestPermissions.P61,
      TestPermissions.P63,
      TestPermissions.P64,
      TestPermissions.P65,
      TestPermissions.P66,
      TestPermissions.P67,
      TestPermissions.P69,
      TestPermissions.P70,
      TestPermissions.P72,
    ]),
  ).toEqual(true);
  expect(
    multiBitField.hasAny([
      TestPermissions.P01,
      TestPermissions.P02,
      TestPermissions.P03,
      TestPermissions.P06,
      TestPermissions.P07,
      TestPermissions.P08,
      TestPermissions.P09,
      TestPermissions.P10,
      TestPermissions.P11,
      TestPermissions.P13,
      TestPermissions.P14,
      TestPermissions.P15,
      TestPermissions.P16,
      TestPermissions.P17,
      TestPermissions.P18,
      TestPermissions.P19,
      TestPermissions.P20,
      TestPermissions.P21,
      TestPermissions.P22,
      TestPermissions.P24,
      TestPermissions.P25,
      TestPermissions.P26,
      TestPermissions.P27,
      TestPermissions.P28,
      TestPermissions.P29,
      TestPermissions.P31,
      TestPermissions.P32,
      TestPermissions.P33,
      TestPermissions.P34,
      TestPermissions.P35,
      TestPermissions.P36,
      TestPermissions.P37,
      TestPermissions.P38,
      TestPermissions.P39,
      TestPermissions.P40,
      TestPermissions.P41,
      TestPermissions.P42,
      TestPermissions.P43,
      TestPermissions.P44,
      TestPermissions.P45,
      TestPermissions.P46,
      TestPermissions.P48,
      TestPermissions.P49,
      TestPermissions.P50,
      TestPermissions.P51,
      TestPermissions.P52,
      TestPermissions.P53,
      TestPermissions.P54,
      TestPermissions.P55,
      TestPermissions.P56,
      TestPermissions.P57,
      TestPermissions.P58,
      TestPermissions.P59,
      TestPermissions.P60,
      TestPermissions.P61,
      TestPermissions.P63,
      TestPermissions.P64,
      TestPermissions.P65,
      TestPermissions.P66,
      TestPermissions.P67,
      TestPermissions.P69,
      TestPermissions.P70,
      TestPermissions.P72,
    ]),
  ).toEqual(true);
  expect(
    multiBitField.hasAny([
      TestPermissions.P01,
      TestPermissions.P02,
      TestPermissions.P03,
      TestPermissions.P06,
      TestPermissions.P07,
      TestPermissions.P08,
      TestPermissions.P09,
      TestPermissions.P10,
      TestPermissions.P11,
      TestPermissions.P13,
      TestPermissions.P14,
      TestPermissions.P15,
      TestPermissions.P16,
      TestPermissions.P17,
      TestPermissions.P18,
      TestPermissions.P19,
      TestPermissions.P20,
      TestPermissions.P21,
      TestPermissions.P22,
      TestPermissions.P24,
      TestPermissions.P25,
      TestPermissions.P26,
      TestPermissions.P27,
      TestPermissions.P28,
      TestPermissions.P29,
      TestPermissions.P31,
      TestPermissions.P32,
      TestPermissions.P33,
      TestPermissions.P34,
      TestPermissions.P35,
      TestPermissions.P36,
      TestPermissions.P37,
      TestPermissions.P38,
      TestPermissions.P39,
      TestPermissions.P40,
      TestPermissions.P41,
      TestPermissions.P42,
      TestPermissions.P43,
      TestPermissions.P44,
      TestPermissions.P46,
      TestPermissions.P47,
      TestPermissions.P48,
      TestPermissions.P49,
      TestPermissions.P50,
      TestPermissions.P51,
      TestPermissions.P52,
      TestPermissions.P53,
      TestPermissions.P54,
      TestPermissions.P55,
      TestPermissions.P56,
      TestPermissions.P57,
      TestPermissions.P58,
      TestPermissions.P59,
      TestPermissions.P60,
      TestPermissions.P61,
      TestPermissions.P63,
      TestPermissions.P64,
      TestPermissions.P65,
      TestPermissions.P66,
      TestPermissions.P67,
      TestPermissions.P69,
      TestPermissions.P70,
      TestPermissions.P72,
    ]),
  ).toEqual(true);
  expect(
    multiBitField.hasAny([
      TestPermissions.P01,
      TestPermissions.P02,
      TestPermissions.P03,
      TestPermissions.P06,
      TestPermissions.P07,
      TestPermissions.P08,
      TestPermissions.P09,
      TestPermissions.P10,
      TestPermissions.P11,
      TestPermissions.P13,
      TestPermissions.P14,
      TestPermissions.P15,
      TestPermissions.P16,
      TestPermissions.P17,
      TestPermissions.P18,
      TestPermissions.P19,
      TestPermissions.P20,
      TestPermissions.P21,
      TestPermissions.P22,
      TestPermissions.P24,
      TestPermissions.P25,
      TestPermissions.P26,
      TestPermissions.P27,
      TestPermissions.P28,
      TestPermissions.P29,
      TestPermissions.P31,
      TestPermissions.P32,
      TestPermissions.P33,
      TestPermissions.P34,
      TestPermissions.P35,
      TestPermissions.P36,
      TestPermissions.P37,
      TestPermissions.P38,
      TestPermissions.P39,
      TestPermissions.P40,
      TestPermissions.P41,
      TestPermissions.P42,
      TestPermissions.P43,
      TestPermissions.P44,
      TestPermissions.P46,
      TestPermissions.P48,
      TestPermissions.P49,
      TestPermissions.P50,
      TestPermissions.P51,
      TestPermissions.P52,
      TestPermissions.P53,
      TestPermissions.P54,
      TestPermissions.P55,
      TestPermissions.P56,
      TestPermissions.P57,
      TestPermissions.P58,
      TestPermissions.P59,
      TestPermissions.P60,
      TestPermissions.P61,
      TestPermissions.P62,
      TestPermissions.P63,
      TestPermissions.P64,
      TestPermissions.P65,
      TestPermissions.P66,
      TestPermissions.P67,
      TestPermissions.P69,
      TestPermissions.P70,
      TestPermissions.P72,
    ]),
  ).toEqual(true);
  expect(
    multiBitField.hasAny([
      TestPermissions.P01,
      TestPermissions.P02,
      TestPermissions.P03,
      TestPermissions.P06,
      TestPermissions.P07,
      TestPermissions.P08,
      TestPermissions.P09,
      TestPermissions.P10,
      TestPermissions.P11,
      TestPermissions.P13,
      TestPermissions.P14,
      TestPermissions.P15,
      TestPermissions.P16,
      TestPermissions.P17,
      TestPermissions.P18,
      TestPermissions.P19,
      TestPermissions.P20,
      TestPermissions.P21,
      TestPermissions.P22,
      TestPermissions.P24,
      TestPermissions.P25,
      TestPermissions.P26,
      TestPermissions.P27,
      TestPermissions.P28,
      TestPermissions.P29,
      TestPermissions.P31,
      TestPermissions.P32,
      TestPermissions.P33,
      TestPermissions.P34,
      TestPermissions.P35,
      TestPermissions.P36,
      TestPermissions.P37,
      TestPermissions.P38,
      TestPermissions.P39,
      TestPermissions.P40,
      TestPermissions.P41,
      TestPermissions.P42,
      TestPermissions.P43,
      TestPermissions.P44,
      TestPermissions.P46,
      TestPermissions.P48,
      TestPermissions.P49,
      TestPermissions.P50,
      TestPermissions.P51,
      TestPermissions.P52,
      TestPermissions.P53,
      TestPermissions.P54,
      TestPermissions.P55,
      TestPermissions.P56,
      TestPermissions.P57,
      TestPermissions.P58,
      TestPermissions.P59,
      TestPermissions.P60,
      TestPermissions.P61,
      TestPermissions.P63,
      TestPermissions.P64,
      TestPermissions.P65,
      TestPermissions.P66,
      TestPermissions.P67,
      TestPermissions.P68,
      TestPermissions.P69,
      TestPermissions.P70,
      TestPermissions.P72,
    ]),
  ).toEqual(true);
  expect(
    multiBitField.hasAny([
      TestPermissions.P01,
      TestPermissions.P02,
      TestPermissions.P03,
      TestPermissions.P06,
      TestPermissions.P07,
      TestPermissions.P08,
      TestPermissions.P09,
      TestPermissions.P10,
      TestPermissions.P11,
      TestPermissions.P13,
      TestPermissions.P14,
      TestPermissions.P15,
      TestPermissions.P16,
      TestPermissions.P17,
      TestPermissions.P18,
      TestPermissions.P19,
      TestPermissions.P20,
      TestPermissions.P21,
      TestPermissions.P22,
      TestPermissions.P24,
      TestPermissions.P25,
      TestPermissions.P26,
      TestPermissions.P27,
      TestPermissions.P28,
      TestPermissions.P29,
      TestPermissions.P31,
      TestPermissions.P32,
      TestPermissions.P33,
      TestPermissions.P34,
      TestPermissions.P35,
      TestPermissions.P36,
      TestPermissions.P37,
      TestPermissions.P38,
      TestPermissions.P39,
      TestPermissions.P40,
      TestPermissions.P41,
      TestPermissions.P42,
      TestPermissions.P43,
      TestPermissions.P44,
      TestPermissions.P46,
      TestPermissions.P48,
      TestPermissions.P49,
      TestPermissions.P50,
      TestPermissions.P51,
      TestPermissions.P52,
      TestPermissions.P53,
      TestPermissions.P54,
      TestPermissions.P55,
      TestPermissions.P56,
      TestPermissions.P57,
      TestPermissions.P58,
      TestPermissions.P59,
      TestPermissions.P60,
      TestPermissions.P61,
      TestPermissions.P63,
      TestPermissions.P64,
      TestPermissions.P65,
      TestPermissions.P66,
      TestPermissions.P67,
      TestPermissions.P69,
      TestPermissions.P70,
      TestPermissions.P71,
      TestPermissions.P72,
    ]),
  ).toEqual(true);
});

test('hasAnyFromBitfield', () => {
  expect(emptyBitField.hasAnyFromBitfield(emptyBitField)).toEqual(false);
  expect(emptyBitField.hasAnyFromBitfield(oneBitBitField)).toEqual(false);
  expect(emptyBitField.hasAnyFromBitfield(multiBitField)).toEqual(false);
  expect(emptyBitField.hasAnyFromBitfield(multiBitFieldRemove)).toEqual(false);

  expect(oneBitBitField.hasAnyFromBitfield(emptyBitField)).toEqual(false);
  expect(oneBitBitField.hasAnyFromBitfield(oneBitBitField)).toEqual(true);
  expect(oneBitBitField.hasAnyFromBitfield(multiBitField)).toEqual(false);
  expect(oneBitBitField.hasAnyFromBitfield(multiBitFieldRemove)).toEqual(false);

  expect(multiBitField.hasAnyFromBitfield(emptyBitField)).toEqual(false);
  expect(multiBitField.hasAnyFromBitfield(oneBitBitField)).toEqual(false);
  expect(multiBitField.hasAnyFromBitfield(multiBitField)).toEqual(true);
  expect(multiBitField.hasAnyFromBitfield(multiBitFieldRemove)).toEqual(true);

  expect(multiBitFieldRemove.hasAnyFromBitfield(emptyBitField)).toEqual(false);
  expect(multiBitFieldRemove.hasAnyFromBitfield(oneBitBitField)).toEqual(false);
  expect(multiBitFieldRemove.hasAnyFromBitfield(multiBitField)).toEqual(true);
  expect(multiBitFieldRemove.hasAnyFromBitfield(multiBitFieldRemove)).toEqual(true);
});

const TestPermissions2 = {
  P01: 1n << 0n,
  P02: 1n << 799n,
  P03: 18n,
  P04: 1n << 799n,
};

const TestPermissions3 = {
  P01: 1n << 0n,
  P02: 1n << 799n,
  P04: 1n << 799n,
};

test('invalidBitFieldErrors', () => {
  expect(() => {
    new BitField(TestPermissions2);
  }).toThrow();
  expect(() => {
    new BitField(TestPermissions3);
  }).toThrow();
  expect(() => {
    new BitField(TestPermissions);
  }).not.toThrow();
});

const multiBitFieldClone = new BitField(TestPermissions);
multiBitFieldClone.addAllFromBitfield(multiBitField);

test('add all to bitfield (clone)', () => {
  expect(multiBitFieldClone.has(TestPermissions.P01)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P02)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P03)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P04)).toEqual(true);
  expect(multiBitFieldClone.has(TestPermissions.P05)).toEqual(true);
  expect(multiBitFieldClone.has(TestPermissions.P06)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P07)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P08)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P09)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P10)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P11)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P12)).toEqual(true);
  expect(multiBitFieldClone.has(TestPermissions.P13)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P14)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P15)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P16)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P17)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P18)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P19)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P20)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P21)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P22)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P23)).toEqual(true);
  expect(multiBitFieldClone.has(TestPermissions.P24)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P25)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P26)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P27)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P28)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P29)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P30)).toEqual(true);
  expect(multiBitFieldClone.has(TestPermissions.P31)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P32)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P33)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P34)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P35)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P36)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P37)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P38)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P39)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P40)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P41)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P42)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P43)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P44)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P45)).toEqual(true);
  expect(multiBitFieldClone.has(TestPermissions.P46)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P47)).toEqual(true);
  expect(multiBitFieldClone.has(TestPermissions.P48)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P49)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P50)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P51)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P52)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P53)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P54)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P55)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P56)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P57)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P58)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P59)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P60)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P61)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P62)).toEqual(true);
  expect(multiBitFieldClone.has(TestPermissions.P63)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P64)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P65)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P66)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P67)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P68)).toEqual(true);
  expect(multiBitFieldClone.has(TestPermissions.P69)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P70)).toEqual(false);
  expect(multiBitFieldClone.has(TestPermissions.P71)).toEqual(true);
  expect(multiBitFieldClone.has(TestPermissions.P72)).toEqual(false);
});

const multiBitFieldClone2 = new BitField(TestPermissions);
multiBitFieldClone2.add(0b1111n);
multiBitFieldClone2.addAllFromBitfield(multiBitField);

test('add all to bitfield pt.2', () => {
  expect(multiBitFieldClone2.has(TestPermissions.P01)).toEqual(true);
  expect(multiBitFieldClone2.has(TestPermissions.P02)).toEqual(true);
  expect(multiBitFieldClone2.has(TestPermissions.P03)).toEqual(true);
  expect(multiBitFieldClone2.has(TestPermissions.P04)).toEqual(true);
  expect(multiBitFieldClone2.has(TestPermissions.P05)).toEqual(true);
  expect(multiBitFieldClone2.has(TestPermissions.P06)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P07)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P08)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P09)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P10)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P11)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P12)).toEqual(true);
  expect(multiBitFieldClone2.has(TestPermissions.P13)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P14)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P15)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P16)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P17)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P18)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P19)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P20)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P21)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P22)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P23)).toEqual(true);
  expect(multiBitFieldClone2.has(TestPermissions.P24)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P25)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P26)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P27)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P28)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P29)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P30)).toEqual(true);
  expect(multiBitFieldClone2.has(TestPermissions.P31)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P32)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P33)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P34)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P35)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P36)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P37)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P38)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P39)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P40)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P41)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P42)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P43)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P44)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P45)).toEqual(true);
  expect(multiBitFieldClone2.has(TestPermissions.P46)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P47)).toEqual(true);
  expect(multiBitFieldClone2.has(TestPermissions.P48)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P49)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P50)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P51)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P52)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P53)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P54)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P55)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P56)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P57)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P58)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P59)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P60)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P61)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P62)).toEqual(true);
  expect(multiBitFieldClone2.has(TestPermissions.P63)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P64)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P65)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P66)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P67)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P68)).toEqual(true);
  expect(multiBitFieldClone2.has(TestPermissions.P69)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P70)).toEqual(false);
  expect(multiBitFieldClone2.has(TestPermissions.P71)).toEqual(true);
  expect(multiBitFieldClone2.has(TestPermissions.P72)).toEqual(false);
});

const customBitField = new BitField(TestPermissions);
customBitField.addAllFromBitfield(multiBitField);
customBitField.removeAllFromBitfield(multiBitFieldRemove);

test('remove all from bitfield', () => {
  expect(customBitField.has(TestPermissions.P01)).toEqual(false);
  expect(customBitField.has(TestPermissions.P02)).toEqual(false);
  expect(customBitField.has(TestPermissions.P03)).toEqual(false);
  expect(customBitField.has(TestPermissions.P04)).toEqual(false);
  expect(customBitField.has(TestPermissions.P05)).toEqual(true);
  expect(customBitField.has(TestPermissions.P06)).toEqual(false);
  expect(customBitField.has(TestPermissions.P07)).toEqual(false);
  expect(customBitField.has(TestPermissions.P08)).toEqual(false);
  expect(customBitField.has(TestPermissions.P09)).toEqual(false);
  expect(customBitField.has(TestPermissions.P10)).toEqual(false);
  expect(customBitField.has(TestPermissions.P11)).toEqual(false);
  expect(customBitField.has(TestPermissions.P12)).toEqual(true);
  expect(customBitField.has(TestPermissions.P13)).toEqual(false);
  expect(customBitField.has(TestPermissions.P14)).toEqual(false);
  expect(customBitField.has(TestPermissions.P15)).toEqual(false);
  expect(customBitField.has(TestPermissions.P16)).toEqual(false);
  expect(customBitField.has(TestPermissions.P17)).toEqual(false);
  expect(customBitField.has(TestPermissions.P18)).toEqual(false);
  expect(customBitField.has(TestPermissions.P19)).toEqual(false);
  expect(customBitField.has(TestPermissions.P20)).toEqual(false);
  expect(customBitField.has(TestPermissions.P21)).toEqual(false);
  expect(customBitField.has(TestPermissions.P22)).toEqual(false);
  expect(customBitField.has(TestPermissions.P23)).toEqual(false);
  expect(customBitField.has(TestPermissions.P24)).toEqual(false);
  expect(customBitField.has(TestPermissions.P25)).toEqual(false);
  expect(customBitField.has(TestPermissions.P26)).toEqual(false);
  expect(customBitField.has(TestPermissions.P27)).toEqual(false);
  expect(customBitField.has(TestPermissions.P28)).toEqual(false);
  expect(customBitField.has(TestPermissions.P29)).toEqual(false);
  expect(customBitField.has(TestPermissions.P30)).toEqual(false);
  expect(customBitField.has(TestPermissions.P31)).toEqual(false);
  expect(customBitField.has(TestPermissions.P32)).toEqual(false);
  expect(customBitField.has(TestPermissions.P33)).toEqual(false);
  expect(customBitField.has(TestPermissions.P34)).toEqual(false);
  expect(customBitField.has(TestPermissions.P35)).toEqual(false);
  expect(customBitField.has(TestPermissions.P36)).toEqual(false);
  expect(customBitField.has(TestPermissions.P37)).toEqual(false);
  expect(customBitField.has(TestPermissions.P38)).toEqual(false);
  expect(customBitField.has(TestPermissions.P39)).toEqual(false);
  expect(customBitField.has(TestPermissions.P40)).toEqual(false);
  expect(customBitField.has(TestPermissions.P41)).toEqual(false);
  expect(customBitField.has(TestPermissions.P42)).toEqual(false);
  expect(customBitField.has(TestPermissions.P43)).toEqual(false);
  expect(customBitField.has(TestPermissions.P44)).toEqual(false);
  expect(customBitField.has(TestPermissions.P45)).toEqual(true);
  expect(customBitField.has(TestPermissions.P46)).toEqual(false);
  expect(customBitField.has(TestPermissions.P47)).toEqual(true);
  expect(customBitField.has(TestPermissions.P48)).toEqual(false);
  expect(customBitField.has(TestPermissions.P49)).toEqual(false);
  expect(customBitField.has(TestPermissions.P50)).toEqual(false);
  expect(customBitField.has(TestPermissions.P51)).toEqual(false);
  expect(customBitField.has(TestPermissions.P52)).toEqual(false);
  expect(customBitField.has(TestPermissions.P53)).toEqual(false);
  expect(customBitField.has(TestPermissions.P54)).toEqual(false);
  expect(customBitField.has(TestPermissions.P55)).toEqual(false);
  expect(customBitField.has(TestPermissions.P56)).toEqual(false);
  expect(customBitField.has(TestPermissions.P57)).toEqual(false);
  expect(customBitField.has(TestPermissions.P58)).toEqual(false);
  expect(customBitField.has(TestPermissions.P59)).toEqual(false);
  expect(customBitField.has(TestPermissions.P60)).toEqual(false);
  expect(customBitField.has(TestPermissions.P61)).toEqual(false);
  expect(customBitField.has(TestPermissions.P62)).toEqual(true);
  expect(customBitField.has(TestPermissions.P63)).toEqual(false);
  expect(customBitField.has(TestPermissions.P64)).toEqual(false);
  expect(customBitField.has(TestPermissions.P65)).toEqual(false);
  expect(customBitField.has(TestPermissions.P66)).toEqual(false);
  expect(customBitField.has(TestPermissions.P67)).toEqual(false);
  expect(customBitField.has(TestPermissions.P68)).toEqual(true);
  expect(customBitField.has(TestPermissions.P69)).toEqual(false);
  expect(customBitField.has(TestPermissions.P70)).toEqual(false);
  expect(customBitField.has(TestPermissions.P71)).toEqual(true);
  expect(customBitField.has(TestPermissions.P72)).toEqual(false);
});

const customBitField2 = new BitField(TestPermissions);
customBitField2.addAllFromBitfield(multiBitField);
customBitField2.remove(TestPermissions.P12);

test('remove singular bit', () => {
  expect(customBitField2.has(TestPermissions.P01)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P02)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P03)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P04)).toEqual(true);
  expect(customBitField2.has(TestPermissions.P05)).toEqual(true);
  expect(customBitField2.has(TestPermissions.P06)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P07)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P08)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P09)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P10)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P11)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P12)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P13)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P14)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P15)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P16)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P17)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P18)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P19)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P20)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P21)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P22)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P23)).toEqual(true);
  expect(customBitField2.has(TestPermissions.P24)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P25)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P26)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P27)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P28)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P29)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P30)).toEqual(true);
  expect(customBitField2.has(TestPermissions.P31)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P32)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P33)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P34)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P35)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P36)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P37)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P38)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P39)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P40)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P41)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P42)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P43)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P44)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P45)).toEqual(true);
  expect(customBitField2.has(TestPermissions.P46)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P47)).toEqual(true);
  expect(customBitField2.has(TestPermissions.P48)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P49)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P50)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P51)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P52)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P53)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P54)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P55)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P56)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P57)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P58)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P59)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P60)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P61)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P62)).toEqual(true);
  expect(customBitField2.has(TestPermissions.P63)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P64)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P65)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P66)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P67)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P68)).toEqual(true);
  expect(customBitField2.has(TestPermissions.P69)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P70)).toEqual(false);
  expect(customBitField2.has(TestPermissions.P71)).toEqual(true);
  expect(customBitField2.has(TestPermissions.P72)).toEqual(false);
});

const customBitField3 = new BitField(TestPermissions);
customBitField3.addAllFromBitfield(multiBitField);
customBitField3.reset();

test('reset', () => {
  expect(customBitField3.has(TestPermissions.P01)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P02)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P03)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P04)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P05)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P06)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P07)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P08)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P09)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P10)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P11)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P12)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P13)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P14)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P15)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P16)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P17)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P18)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P19)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P20)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P21)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P22)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P23)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P24)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P25)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P26)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P27)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P28)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P29)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P30)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P31)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P32)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P33)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P34)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P35)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P36)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P37)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P38)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P39)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P40)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P41)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P42)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P43)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P44)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P45)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P46)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P47)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P48)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P49)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P50)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P51)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P52)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P53)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P54)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P55)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P56)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P57)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P58)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P59)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P60)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P61)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P62)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P63)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P64)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P65)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P66)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P67)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P68)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P69)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P70)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P71)).toEqual(false);
  expect(customBitField3.has(TestPermissions.P72)).toEqual(false);
});

test('toString', () => {
  expect(emptyBitField.toString()).toEqual('0');
  expect(oneBitBitField.toString()).toEqual('1');
  expect(multiBitField.toString()).toEqual('1330471504277772699672');
  expect(multiBitFieldRemove.toString()).toEqual('541065224');
  expect(fullBitField.toString()).toEqual('4722366482869645213695');
  expect(multiBitFieldClone.toString()).toEqual('1330471504277772699672');
  expect(multiBitFieldClone2.toString()).toEqual('1330471504277772699679');
  expect(customBitField2.toString()).toEqual('1330471504277772697624');
  expect(customBitField3.toString()).toEqual('0');
});

test('fromStringUnsafe', () => {
  const testBitField = new BitField(TestPermissions);
  testBitField.fromStringUnsafe('0');
  expect(testBitField.toArray()).toStrictEqual([]);
  
  testBitField.fromStringUnsafe(oneBitBitField.toString());
  expect(testBitField.toArray()).toStrictEqual([TestPermissions.P01]);

  testBitField.fromStringUnsafe(multiBitField.toString());
  expect(testBitField.hasAllFromBitfield(multiBitField) && multiBitField.hasAllFromBitfield(testBitField)).toBe(true);

  testBitField.fromStringUnsafe(multiBitFieldRemove.toString());
  expect(testBitField.hasAllFromBitfield(multiBitFieldRemove) && multiBitFieldRemove.hasAllFromBitfield(testBitField)).toBe(true);

  testBitField.fromStringUnsafe(fullBitField.toString());
  expect(testBitField.hasAllFromBitfield(fullBitField) && fullBitField.hasAllFromBitfield(testBitField)).toBe(true);
  
  testBitField.fromStringUnsafe(multiBitFieldClone.toString());
  expect(testBitField.hasAllFromBitfield(multiBitFieldClone) && multiBitFieldClone.hasAllFromBitfield(testBitField)).toBe(true);
  
  testBitField.fromStringUnsafe(multiBitFieldClone2.toString());
  expect(testBitField.hasAllFromBitfield(multiBitFieldClone2) && multiBitFieldClone2.hasAllFromBitfield(testBitField)).toBe(true);
  
  testBitField.fromStringUnsafe(customBitField2.toString());
  expect(testBitField.hasAllFromBitfield(customBitField2) && customBitField2.hasAllFromBitfield(testBitField)).toBe(true);
  
  testBitField.fromStringUnsafe(customBitField3.toString());
  expect(testBitField.hasAllFromBitfield(customBitField3) && customBitField3.hasAllFromBitfield(testBitField)).toBe(true);

  expect(() => {
    testBitField.fromStringUnsafe('abc');
  }).toThrow();

  expect(() => {
    testBitField.fromStringUnsafe('');
  }).not.toThrow();

  expect(() => {
    testBitField.fromStringUnsafe('-1');
  }).not.toThrow();

  expect(() => {
    testBitField.fromStringUnsafe('4722366482869645213696');
  }).not.toThrow(); // 73rd bit set

  testBitField.fromStringUnsafe('4722366482869645213696');
  expect(testBitField.hasAllFromBitfield(emptyBitField) && emptyBitField.hasAllFromBitfield(testBitField));

  expect(() => {
    testBitField.fromStringUnsafe('9444732965739290427391');
  }).not.toThrow(); // 73 bits all full

  testBitField.fromStringUnsafe('9444732965739290427391');
  expect(testBitField.hasAllFromBitfield(fullBitField) && fullBitField.hasAllFromBitfield(testBitField));
});

test('fromStringSafe', () => {
  const testBitField = new BitField(TestPermissions);
  testBitField.fromStringSafe('0');
  expect(testBitField.toArray()).toStrictEqual([]);
  
  testBitField.fromStringSafe(oneBitBitField.toString());
  expect(testBitField.toArray()).toStrictEqual([TestPermissions.P01]);

  testBitField.fromStringSafe(multiBitField.toString());
  expect(testBitField.hasAllFromBitfield(multiBitField) && multiBitField.hasAllFromBitfield(testBitField)).toBe(true);

  testBitField.fromStringSafe(multiBitFieldRemove.toString());
  expect(testBitField.hasAllFromBitfield(multiBitFieldRemove) && multiBitFieldRemove.hasAllFromBitfield(testBitField)).toBe(true);

  testBitField.fromStringSafe(fullBitField.toString());
  expect(testBitField.hasAllFromBitfield(fullBitField) && fullBitField.hasAllFromBitfield(testBitField)).toBe(true);
  
  testBitField.fromStringSafe(multiBitFieldClone.toString());
  expect(testBitField.hasAllFromBitfield(multiBitFieldClone) && multiBitFieldClone.hasAllFromBitfield(testBitField)).toBe(true);
  
  testBitField.fromStringSafe(multiBitFieldClone2.toString());
  expect(testBitField.hasAllFromBitfield(multiBitFieldClone2) && multiBitFieldClone2.hasAllFromBitfield(testBitField)).toBe(true);
  
  testBitField.fromStringSafe(customBitField2.toString());
  expect(testBitField.hasAllFromBitfield(customBitField2) && customBitField2.hasAllFromBitfield(testBitField)).toBe(true);
  
  testBitField.fromStringSafe(customBitField3.toString());
  expect(testBitField.hasAllFromBitfield(customBitField3) && customBitField3.hasAllFromBitfield(testBitField)).toBe(true);

  expect(() => {
    testBitField.fromStringSafe('abc');
  }).toThrow();

  expect(() => {
    testBitField.fromStringSafe('');
  }).toThrow();

  expect(() => {
    testBitField.fromStringSafe('-1');
  }).toThrow();

  expect(() => {
    testBitField.fromStringSafe('4722366482869645213696');
  }).toThrow(); // 73rd bit set

  expect(() => {
    testBitField.fromStringSafe('9444732965739290427391');
  }).toThrow(); // 73 bits all full
});

test('isValidValue', () => {
  const testBitField = new BitField(TestPermissions);

  expect(testBitField.isValidValue('0')).toBe(true);
  expect(testBitField.isValidValue(oneBitBitField.toString())).toBe(true);
  expect(testBitField.isValidValue(multiBitField.toString())).toBe(true);
  expect(testBitField.isValidValue(multiBitFieldRemove.toString())).toBe(true);
  expect(testBitField.isValidValue(fullBitField.toString())).toBe(true);
  expect(testBitField.isValidValue(multiBitFieldClone.toString())).toBe(true);
  expect(testBitField.isValidValue(multiBitFieldClone2.toString())).toBe(true);
  expect(testBitField.isValidValue(customBitField2.toString())).toBe(true);
  expect(testBitField.isValidValue(customBitField3.toString())).toBe(true);
  expect(testBitField.isValidValue('abc')).toBe(false);
  expect(testBitField.isValidValue('')).toBe(false);
  expect(testBitField.isValidValue('-1')).toBe(false);
  expect(testBitField.isValidValue('4722366482869645213696')).toBe(false);
  expect(testBitField.isValidValue('9444732965739290427391')).toBe(false);
  expect(testBitField.isValidValue('4722366482869645213695')).toBe(true);
});

test('isValidValueSoft', () => {
  const testBitField = new BitField(TestPermissions);

  expect(testBitField.isValidValueSoft('0')).toBe(true);
  expect(testBitField.isValidValueSoft(oneBitBitField.toString())).toBe(true);
  expect(testBitField.isValidValueSoft(multiBitField.toString())).toBe(true);
  expect(testBitField.isValidValueSoft(multiBitFieldRemove.toString())).toBe(true);
  expect(testBitField.isValidValueSoft(fullBitField.toString())).toBe(true);
  expect(testBitField.isValidValueSoft(multiBitFieldClone.toString())).toBe(true);
  expect(testBitField.isValidValueSoft(multiBitFieldClone2.toString())).toBe(true);
  expect(testBitField.isValidValueSoft(customBitField2.toString())).toBe(true);
  expect(testBitField.isValidValueSoft(customBitField3.toString())).toBe(true);
  expect(testBitField.isValidValueSoft('abc')).toBe(false);
  expect(testBitField.isValidValueSoft('')).toBe(true);
  expect(testBitField.isValidValueSoft('-1')).toBe(false);
  expect(testBitField.isValidValueSoft('4722366482869645213696')).toBe(true);
  expect(testBitField.isValidValueSoft('9444732965739290427391')).toBe(true);
  expect(testBitField.isValidValueSoft('4722366482869645213695')).toBe(true);
});