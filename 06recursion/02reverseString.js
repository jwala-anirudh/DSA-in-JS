function reverseString(str) {
  console.log(`current string: ${str}`);

  if (str === "") {
    return str;
  }

  // return str[str.length - 1] + reverseString(str.substring(0, str.length - 1));

  console.log(`calling method with ${str.substring(0, str.length - 1)}`);
  const reversePart = reverseString(str.substring(0, str.length - 1));
  const result = str[str.length - 1] + reversePart;
  console.log(
    `Reversing: Last char: ${
      str[str.length - 1]
    } added in front of ${reversePart} to form a result: ${result}`
  );
  return result;
}

console.log(reverseString("Hello"));
