export class BitField {
  private bitfield: bigint;
  private flags: bigint[];

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
    this.checkValidity();
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

  // check whether all numbers in the map are valid
  /**
   * Checks whether all the number values in the flag map are valid.
   * This ensures that there are no duplicate numbers, and all numbers are powers of two
   * (i.e. all numbers contain only one bit that is 1, if represented in binary.)
   * @param flagMap - the flag map that is being checked
   */
  private checkValidity(): void {
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
}
