const rot13 = (str) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (alphabet.indexOf(str[i]) == -1) {
      result += str[i];
    } else {
      let strIndex = (alphabet.indexOf(str[i]) + 13) % 26;
      result += alphabet[strIndex];
    }
  }

  return result;
};
