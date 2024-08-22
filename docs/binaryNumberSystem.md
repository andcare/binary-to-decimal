# What is a Binary Number System?

A Binary Number is made up of only 0s and 1s. It is a number expressed in the
_base-2 numerical system_ or _binary numberal system_, a method for
representing numbers that uses only two symbols for the natural numbers.

Binary Number System is the number system in which we use two digits, 0s and
1s, to perform all the necessary oprations. In the Binary Number System, we
have a base of 2. The base of the Binary Number System is also called the
_radix_ of the number system.

We represent the number as:
11001<sub>2</sub>

- Each digits are called "bit"

## Binary Number Table

| Decimal Number | Binary Number | Decimal Number | Binary Number |
| -------------- | ------------- | -------------- | ------------- |
| 1              | 001           | 11             | 1011          |
| 2              | 010           | 12             | 1100          |
| 3              | 011           | 13             | 1101          |
| 4              | 100           | 14             | 1110          |
| 5              | 101           | 15             | 1111          |
| 6              | 110           | 16             | 10000         |
| 7              | 111           | 17             | 10001         |
| 8              | 1000          | 18             | 10010         |
| 9              | 1001          | 19             | 10011         |
| 10             | 1010          | 20             | 10100         |

## Binary to Decimal Conversion

A Binary number is converted into a decimal number by **_multiplying each digit
of the binary number by the power of either 1 or 0 to the corresponding power
of 2_**.

```binary
    The given binary number is 10011
    10011 = (1x2^4) + (0x2^3) + (0x2^2) + (1x2^2) + (1x2^0)

    10011 =   16    +   0     +    0    +    2    +    1     = 19

    Hence, the binary number 10011 is expressed as 19
```

The idea is to extract the digits of a given binary number starting from the
rightmost digit and keep a variable `decimal_value`.

At the time of extracting digits from the binary number, multiply the digit
with the proper base (power of 2) and add it to the variable `decimal value`

In the end, the variable `decimal_value` will store the required decimal
number.

```javascript
const decimal_value = ((1 * 2) ^ 2) + ((1 * 2) ^ 1) + ((1 * 2) ^ 0);
// decimal_value = 7
```

```javascript
const binaryToDecimal = () => {
  let num = n;
  let dec_value = 0;

  let base = 1;

  let temp = num;

  while (temp) {
    let last_digit = temp % 10;
    temp = Math.floor(temp / 10);

    dec_value += last_digit * base;

    base = base * 2;
  }

  return dec_value;
};
```

### Converstion Process

The conversiont process involves understanding the place value of each digit
in the binary number and using it to calculate the equivalent decimal number.

1. List the powers of 2: Write down the powers of 2 from right to left,
   starting at 2^0 and incresing the exponent by 1 for each position to the
   left.
2. Align the Binary Number: Write the binary number below the powers of 2,
   aligning each digit withits corresponding power of 2.
3. Multiply each Binary Digit by its power of 2: For each digit in the binary
   number, multiply the digit by the corresponding power of 2 it's aligned
   with.
4. sum the Products: Add together all the products from the previous step.
   This sum is the decimal equivalent of the binary number.


**Binary Number System** 

A **Binary Number** is a symbol expressed in the *base-2* [numeral system](https://en.wikipedia.org/wiki/Numeral_system). It is used to represent various numbers using only two symbols, typically `0` and `1`. The base-2 numeral system is a [positional notation](https://en.wikipedia.org/wiki/Positional_notation) with a radix (or base) of 2. Each digit is reffered as a bit, or binary digit.

In a Binary Number System, any number can be represented by a sequence of
**bits** (binary digits). Any of the following can be interpreted as the
binary numeric value of 242:

1 1 1 1 0 0 1 0
| | | | - - | -
☒ ☒ ☒ ☒ ☐ ☐ ☒ ☐

In keeping with the customary representation of numerals using Arabic
Numerals, binary numbers are commonly written using the symbols **0** and **1**. 

100101<sub>2</sub> (a subscript indicating base-2 (binary) notation)


**Decimal Number System**

The number system that represents a number in terms of 0 to 9 digits. The
radix (or base) of a number in this system is 10. In a Decimal Number System,
a number is expressed in terms of power of 10; the positions of successive
digits to the left of the decimal point represents units, tens, hundreds,
thousands, and so on.


**Binary to Decimal Conversion** 

A Binary Number is converted into Decimal Number by multiplying each digit of
the Binary Number by the power of either 1 or 0 to the corresponding power of
2. 

Formula: 
```Math
D = (an-1 × 2n-1) +…+(a3 × 23) + (a2 × 22) + (a1 × 21) + (a0 × 20)
```

Example:
```Math
    The given binary number is (10011)2.

    (10011)2 = (1 × 24) + (0 × 23) + (0 × 22) + (1 × 21) + (1 × 20)

    = 16 + 0 + 0 + 2 + 1 = (19)10

    Hence, the binary number (10011)2 is expressed as (19)10.
```


