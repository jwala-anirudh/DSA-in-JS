function recursiveLength(str) {
  if (str === "") {
    return 0;
  }

  return 1 + recursiveLength(str.substring(1));
}

console.log(recursiveLength("anirudh"));
