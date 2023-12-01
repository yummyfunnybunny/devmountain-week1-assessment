// EXTRA CREDIT

// Return the strings common to both input arrays. Do not return duplicates.
// Ex.:
//   commonStrings(['a', 'b', 'c'], ['a', 'd', 'e']);
//   => ['a']
//   commonStrings(['zoo', 'space', 'zoo'], ['zoo', 'space', 'boat']);
//   => ['zoo', 'space']
function commonStrings(array1, array2) {
  const newArray = [];

  for (const item of array1) {
    if (array2.includes(item)) {
      if (!newArray.includes(item)) {
        newArray.push(item);
      }
    }
  }
  return newArray;
}

// Given three numbers, return a list of numbers from 1 to 100 that are
// divisible by at least one of a, b or c.
// Ex.:
//   divisibleByEither(50, 30, 29);
//   => [29, 30, 50, 58, 60, 87, 90, 100]
function divisibleByEither(a, b, c) {
  const divisibleNumbers = [];
  for (let i = 1; i <= 100; i++) {
    if (i % a === 0 || i % b === 0 || i % c === 0) {
      divisibleNumbers.push(i);
    }
  }
  return divisibleNumbers;
}

// Compress a string using the rules below and return the result. To compress a
// string, replace consecutive duplicate characters with a number and the
// character. For this compression, only count consecutive duplicate
// characters. If a character is not repeated, it should not be changed.
// Assume that all inputs are lowercased.
// Ex.:
//   compressString('aaa');
//   => '3a'
//   compressString('ssssbb');
//   => '4s2b'
//   compressString('ssssbbba');
//   => '4s3ba'
function compressString(string) {
  let letter = "";
  let letterCount = 1;
  let newString = "";

  for (let i = 0; i <= string.length; i++) {
    // finds a new letter
    if (string[i] != letter) {
      // add previous letter to the newString
      if (letter) {
        // check if letterCount is greater than 1 before adding it
        if (letterCount > 1) {
          newString += +letterCount;
        }
        newString += letter;
      }

      letter = string[i];
      letterCount = 1;
    } else {
      // found a duplicate letter
      letterCount++;
    }

    // reached the end, add the final letter and letter count
    if (i === string.length) {
      if (letterCount > 1) {
        newString += +letterCount;
        newString += letter;
      }
    }
  }

  return newString;
}

export { commonStrings, compressString, divisibleByEither };
