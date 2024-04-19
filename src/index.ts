export class BitField {
  private bitfield: bigint;
  private flags: bigint[];
  private fullBitfield: bigint; // the bitfield that has all flags from the flagMap set

  /**
   * Creates a new bitfield and initialises it to 0 (no flags set).
   * Takes the map of flags that construct the bitfield. Checks the flag map for valid construction.
   * This flag map will also be used to perform any `missing` check later on.
   *
   * @param flagMap - an object that maps strings to bigints. All bigints need to be unique and powers of two.
   * They can be constructed like `1n << 0n` ... `1n << 100n` (to allow for example 101 flags in the map).
   *
   * Check the [README](https://github.com/Zariem/bitfield) for further information on
   * how to construct the flagMap.
   */
  constructor(flagMap: { [s: string]: bigint }) {
    this.flags = Object.values(flagMap);
    this.checkFlagMapValidity();
    this.fullBitfield = this.calcFullBitfield();
    this.bitfield = 0n;
  }

  /**
   * Adds bits to the bitfield. Consists of a bitwise OR of the bits.
   * Any bits that are already present will remain present.
   * Any bits that are not already present will be present in the bitfield after this operation.
   * @param bits - the bits to be added.
   */
  add(bits: bigint): void {
    this.bitfield |= bits; // bitwise OR with bits
  }

  /**
   * Adds all bits of an array to the bitfield. Consists of a bitwise OR of the bits.
   * Any bits that are already present will remain present.
   * Any bits that are not already present will be present in the bitfield after this operation.
   * @param bits - the array of bits to be added.
   */
  addAll(bits: bigint[]): void {
    for (const b of bits) {
      this.add(b);
    }
  }

  /**
   * Adds all bits of another bitfield to this bitfield. Keeps bits that this bitfield already has.
   * @param otherBitField
   */
  addAllFromBitfield(otherBitField: BitField): void {
    this.add(otherBitField.bitfield);
  }

  /**
   * Removes bits from the bitfield. Consists of a bitwise AND NOT of the bits.
   * Any bits that were both in the bitfield and in the specified `bits` parameter will be zero/removed.
   * Any bits that were in the bitfield but not in the `bits` parameter will remain in the bitfield.
   * @param bits - the bits to be removed
   */
  remove(bits: bigint): void {
    this.bitfield &= ~bits; // bitwise AND with negated bits
  }

  /**
   * Removes all bits of an array from the bitfield. Consists of a bitwise AND NOT of the bits.
   * Any bits that were both in the bitfield and in the specified `bits` parameter will be zero/removed.
   * Any bits that were in the bitfield but not in the `bits` parameter will remain in the bitfield.
   * @param bits - the array of bits to be removed
   */
  removeAll(bits: bigint[]): void {
    for (const b of bits) {
      this.remove(b);
    }
  }

  /**
   * Removes all bits present in the `otherBitfield` from this bitfield.
   * (Only modifies this bitfield, not the other one.)
   * @param otherBitField - the other bitfield whose bits we remove from this one.
   */
  removeAllFromBitfield(otherBitField: BitField): void {
    this.remove(otherBitField.bitfield);
  }

  /**
   * Removes all bits from this bitfield, resetting it to 0.
   */
  reset(): void {
    this.bitfield = 0n;
  }

  /**
   * Check if all the bits in the `bits` parameter occur in the bitfield.
   * @param bits - the bits that we check against
   * @returns Whether all the specified bits in the `bits` parameter are present in the bitfield.
   */
  has(bits: bigint): boolean {
    return (this.bitfield & bits) === bits;
  }

  /**
   * Check if all the bits specified in each entry of the `bits` array occur in the bitfield.
   * @param bits - the array of bits that we check against
   * @returns Whether all the specified bits in each entry of the `bits` parameter are present in the bitfield.
   */
  hasAll(bits: bigint[]): boolean {
    for (const b of bits) {
      if (!this.has(b)) {
        return false;
      }
    }
    return true;
  }

  /**
   * Compares two bitfields and checks if this bitfield has all bits (and potentially more) than the `otherBitField`.
   * @param otherBitfield - the other bitfield to compare against
   * @returns Whether all the bits occurring in the other bitfield are present in this bitfield.
   */
  hasAllFromBitfield(otherBitfield: BitField): boolean {
    return this.has(otherBitfield.bitfield);
  }

  /**
   * Check if any of the bits in the `bits` parameter occur in the bitfield.
   * @param bits - the bits that we check against
   * @returns Whether any of the specified bits in the `bits` parameter are present in the bitfield.
   */
  anyBits(bits: bigint): boolean {
    return (this.bitfield & bits) !== 0n;
  }

  /**
   * Check if any of the bits specified in each entry of the `bits` array occur in the bitfield.
   * @param bits - the array of bits that we check against
   * @returns Whether any of the specified bits in each entry of the `bits` parameter are present in the bitfield.
   */
  hasAny(bits: bigint[]): boolean {
    for (const b of bits) {
      if (this.anyBits(b)) {
        return true;
      }
    }
    return false;
  }

  /**
   * Compares two bitfields and checks if this bitfield has any of the bits from (and potentially more bits than) the `otherBitField`.
   * @param otherBitfield - the other bitfield to compare against
   * @return Whether any of the bits occurring in the other bitfield are present in this bitfield.
   */
  hasAnyFromBitfield(otherBitfield: BitField): boolean {
    return this.anyBits(otherBitfield.bitfield);
  }

  /**
   * Break down this bitfield into all of its individual bitflags. Only returns bitflags specified in the flagMap of this PermissionsBitfield.
   * @returns An array of bitflags (that can be found in the flagMap) that combined to form this bitfield.
   */
  toArray(): bigint[] {
    return this.getAllFlagsOf(this.bitfield);
  }

  /**
   * Checks which bits specified in `bits` are missing from the bitfield. Only returns bitflags specified in the flagMap of this PermissionsBitfield.
   * @param bits - the bits that we check against
   * @returns An array of flags from the bitfield's flagMap that occur in the `bits` parameter but not in the bitfield.
   */
  missing(bits: bigint): bigint[] {
    const missingPermissions = bits & ~this.bitfield;
    return this.getAllFlagsOf(missingPermissions);
  }

  /**
   * Checks which of the bits specified in the `bits` array are missing from the bitfield.
   * Only returns each bitflag that is found missing once. Only returns bitflags specified in the flagMap of this PermissionsBitfield.
   * @param bits - the array of bits that we check against
   * @returns An array of flags from the bitfield's flagMap that occur in the `bits` parameter but not in the bitfield.
   */
  missingFrom(bits: bigint[]): bigint[] {
    let combinedBits: bigint = 0n;
    for (const bit of bits) {
      combinedBits |= bit;
    }
    return this.missing(combinedBits);
  }

  /**
   * Checks which of the bits in the bitfield of `otherBitfield` array are missing from this bitfield.
   * Only returns each bitflag that is found missing once. Only returns bitflags specified in the flagMap of this PermissionsBitfield.
   * @param otherBitfield - the other bitfield to compare against
   * @returns An array of flags from the bitfield's flagMap that occur in the `bits` parameter but not in the bitfield.
   */
  missingFromBitfield(otherBitfield: BitField): bigint[] {
    return this.missing(otherBitfield.bitfield);
  }

  /**
   * Turns the bitfield's value into a base-10 number (digits from 0-9) and represents it as a string.
   * Can be used to serialise or store the bitfield as a string. To deserialise, use `fromString(str)`.
   * @returns The serialisable bitfield value as a string.
   */
  toString(): string {
    return this.bitfield.toString();
  }

  /**
   * Fills the bitfield's value through a base-10 number given from a string. Should only be used with values
   * previously converted with `bitfield.toString()` and checked for validity with `isValidValue(str)`.
   *
   * Does __no__ checks on whether the given number is negative, or on whether all bits that are set in the
   * given value also occur in the flagMap. Given an empty string, turns it into an empty bitfield.
   *
   * If you wish to discard any invalid numbers, use `isValidValue(str)` first.
   * If you want the special cases to throw errors instead, use `fromStringSafe(str)` instead.
   *
   * @param str - the string used to initialise the bitfield
   * @throws SyntaxError if the given input string cannot be parsed as a BigInt.
   */
  fromStringUnsafe(str: string): void {
    this.bitfield = BigInt(str);
  }

  /**
   * Fills the bitfield's value through a base-10 number given from a string. Should only be used with values
   * previously converted with `bitfield.toString()`.
   *
   * Automatically checks for string validity and resets the bitfield to 0 if the
   * value is not a number, or if the value contains any bits which the flagMap doesn't contain.
   * For an unsafe alternative that accepts numbers that are larger than what the flagMap supports, use `fromStringUnsafe(str)`.
   * @param str - the string used to initialise the bitfield
   * @throws SyntaxError if the given input string cannot be parsed as a BigInt.
   * @throws RangeError if the given input string is a negative number.
   * @throws RangeError if the given input string contains more bits than the flag map supports.
   */
  fromStringSafe(str: string): void {
    this.reset();
    if (str.length === 0) {
      throw new SyntaxError('BitField does not support fromString() calls with empty strings.');
    }
    const bits = BigInt(str); // throws an error if it is not a number
    if (bits < 0n) {
      throw new RangeError('BitField does not support fromString() calls with negative numbers. (' + bits + ')');
    }
    if ((bits & ~this.fullBitfield) !== 0n) {
      throw new RangeError(
        'BitField does not support fromString() with numbers that do not fit the given flagMap. ' +
          'Given number had some bits set that the flagmap does not support.',
      );
    }
    this.bitfield = bits;
  }

  /**
   * Checks whether a given string would convert to be a valid bitfield value. This returns false if the string
   * can not be parsed as a number, is empty, is negative (< 0n) or if it contains more bits than the bitfield supports.
   *
   * If you only care about checking if the value is a valid number and non-negative, but don't care about it containing
   * more bits than the bitfield supports, use `isValidValueSoft(str)`.
   *
   * @param str - the string to be checked for validity to initialise the bitfield
   * @returns true if the input string can be used to initialise this bitfield with `bitfield.fromStringUnsafe(str)`
   */
  isValidValue(str: string): boolean {
    if (str.length === 0) {
      return false;
    }
    try {
      const bits = BigInt(str);
      return bits >= 0n && (bits & ~this.fullBitfield) === 0n; // ensure only bits of the bitfield are set
    } catch (error) {
      return false;
    }
  }

  /**
   * A more lenient function to check validity than `isValidValue(str)`.
   *
   * Checks whether a given string would convert to be a valid bitfield value. This returns false if the string
   * can not be parsed as a number, or if it is negative (<0n).
   *
   * Does __not__ check if it contains more bits than the bitfield supports. If you want this functionality, use
   * `isValidValue(str)`.
   * __Allows empty strings__ as these will be parsed as an empty bitfield with `fromStringUnsafe('')`.
   *
   * @param str - the string to be checked for validity to initialise the bitfield
   * @returns true if the input string can be used to initialise this bitfield with `bitfield.fromStringUnsafe(str)`
   */
  isValidValueSoft(str: string): boolean {
    try {
      const bits = BigInt(str);
      return bits >= 0n;
    } catch (error) {
      return false;
    }
  }

  /**
   * Break down a bitflag or bigint number into all underlying bitflags. Only returns bitflags specified in the flagMap of this PermissionsBitfield.
   * @param bits - the bitfield that is to be broken down into seperate bitflags.
   * @returns An array of bitflags (that can be found in the flagMap) that combined to form `bits`.
   */
  private getAllFlagsOf(bits: bigint) {
    const result = [];
    for (const value of this.flags) {
      if ((bits & value) === value) {
        result.push(value); // the value was present
      }
    }
    return result;
  }

  /**
   * Checks whether all the number values in the flag map are valid.
   * This ensures that there are no duplicate numbers, and all numbers are powers of two
   * (i.e. all numbers contain only one bit that is 1, if represented in binary.)
   * @param flagMap - the flag map that is being checked
   */
  private checkFlagMapValidity(): void {
    const foundValues: bigint[] = [];

    for (const value of this.flags) {
      // check for duplicate values
      if (foundValues.includes(value)) {
        throw new Error(
          'Found a duplicate value in flag map: "' + value + '" - Please ensure all your values are unique!',
        );
      } else {
        foundValues.push(value);
        // check if the value is a power of two
        if ((value & (value - 1n)) !== 0n) {
          throw new Error(
            'Found a value that is not a power of two: "' +
              value +
              '" - Please ensure all your values are powers of two!',
          );
        }
      }
    }
  }

  /**
   * Create a bitfield from the flag map, where every flag is set to true.
   * @returns - a bitfield that contains all flags that the flag map has
   */
  private calcFullBitfield(): bigint {
    let tempBitfield = 0n;
    for (const value of this.flags) {
      tempBitfield |= value; // add all the flags to the full bitfield
    }
    return tempBitfield;
  }
}
