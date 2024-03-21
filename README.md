# Custom Bitfield

This is a utility package that allows you to create your own bitfields for things such as permission management for efficient comparison and storage.
It depends on bigints **(`123n` notation)**, and therefore there 

## Usage:
### 1. Create a Flag Map
In order to create a valid flag map to use, all numbers in it need to be of type `bigint`, be **powers of two**, and all values in it need to be unique. The suggested approach is as follows:
```js
const MyFlagMap = {
	AdminAccess: 1n << 0n,
	ReadAccess:  1n << 1n,
	WriteAccess: 1n << 2n,
	EditAccess:  1n << 3n,
	// ...
}
```
You can add however many bits / flags you need, however, please keep two things in mind:
> [!NOTE]
> The amount of bitshifts you do, such as `1n << 9999n` determines the size of your bitfield in bits. Starting your first entry with a bitshift of 9999 bits ensures that your bitfield is always at least 10'000 bits large. It therefore makes most sense to avoid large bitshifts and start with small ones first.

> [!WARNING]
> Once you store and retrieve bits in a bitfield, any changes to the meanings or values of any existing flags will mess up all your previously stored values, as they **will be interpreted according to the new flag map, not the one they were initialised with**. Therefore, it makes most sense to **only add new permissions to the end** of the flag map and always choose a value that has never been used before.
> **Never reassign values in the flag map**, unless you know exactly what you are doing.

### 2. Create the Bitfield
A bitfield needs a valid flag map to be created. If the flag map is invalid, this step will throw an error.
```js
const myBitField = new BitField(MyFlagMap);
```

### 3. Edit the Bitfield
#### Adding Bits to the Bitfield
```js
myBitfield.add(MyFlagMap.EditAccess);
myBitfield.add(MyFlagMap.ReadAccess);
myBitfield.addAll([ MyFlagMap.EditAccess, MyFlagMap.ReadAccess ]);
myBitfield.addAllFromBitfield(someOtherBitfield);
```

#### Removing Bits from the Bitfield
```js
myBitfield.remove(MyFlagMap.EditAccess);
myBitfield.removeAll([ MyFlagMap.EditAccess, MyFlagMap.AdminAccess ]);
myBitfield.removeAllFromBitfield(someOtherBitfield);
myBitfield.reset(); // removes ALL bits from the bitfield
```

### 4. Query and Compare the Bitfield
#### Check if the Bitfield Has Some or All Flags
```js
myBitfield.has(MyFlagMap.EditAccess); // these functions all return a boolean
myBitfield.hasAll([ MyFlagMap.EditAccess, MyFlagMap.ReadAccess ]);
myBitfield.hasAllFromBitfield(someOtherBitfield);
myBitfield.hasAny([ MyFlagMap.EditAccess, MyFlagMap.AdminAccess ]);
myBitfield.hasAnyFromBitfield(someOtherBitfield);
```
#### Turn the Bitfield Into an Array of Flags
```js
const foundFlags = myBitfield.toArray(); // returns a bigint[]
if (foundFlags.includes(MyFlagMap.AdminAccess)) console.log("Has Admin Access.");
if (foundFlags.includes(MyFlagMap.ReadAccess))  console.log("Has Read Access.");
if (foundFlags.includes(MyFlagMap.WriteAccess)) console.log("Has Write Access.");
if (foundFlags.includes(MyFlagMap.EditAccess))  console.log("Has Edit Access.");
```
#### Find Which Flags Specified in the Function Parameter Are Missing From This Bitfield
```js
// these all return a bigint[] of all missing flags.
// Assuming our bitfield has EditAccess and ReadAccess, we get the following results:
myBitfield.missing(MyFlagMap.AdminAccess); // [ MyFlagMap.AdminAccess ]
myBitfield.missing(MyFlagMap.EditAccess); // []
myBitfield.missingFrom([ MyFlagMap.ReadAccess, MyFlagMap.AdminAccess ]); // [ MyFlagMap.AdminAccess ]
myBitfield.missingFromBitfield(someOtherBitfield);
```

### 5. Advanced Usage:
In case you wish to use the bitfield with bigints instead of your predefined flags and other bitfields, this is possible as well.
```js
myBitfield.add(0b1110n); // Set the flags for Read, Write and Edit Access.
myBitfield.addAll([ 0b1000n, 0b1100n, 0b0101n ]); // Equivalent: myBitfield.add(0b1101)

myBitfield.remove(0b0010n); // Remove the flag for Read Access. Equivalent: myBitfield.remove(2n)
myBitfield.removeAll([ 0b0011n, 0b0001n ]); // Equivalent: myBitfield.remove(0b0011)

myBitfield.has(0b1100n); // Are ALL the bits present, i.e. do we have Write AND Edit access?
myBitfield.hasAll([ 0b1100n, 0b0010n ]); // Equivalent: myBitfield.has(0b1110n)

myBitfield.anyBits(0b0101n); // Are ANY bits present, i.e. do we have Admin OR Write access?
myBitfield.hasAny([ 0b0100n, 0b0011n ]); // Equivalent: myBitfield.anyBits(0b0111n)

myBitfield.missing(0b1111n); // Which bits set in 0b1111n are not set in the bitfield?
myBitfield.missing(0b1100n); // Which bits set in 0b1100n are not set in the bitfield?
```
(As you'll have larger bitfields, it might make sense to use decimal or hexadecimal bigint notation.)

If you like this library (and can spare a coin) consider to [![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/B0B0MH76V)