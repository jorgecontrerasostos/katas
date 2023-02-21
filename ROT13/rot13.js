const rot13 = (str) => {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const cipher = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM";

  return str.replace(/[a-z]/gi, (letter) => cipher[letters.indexOf(letter)]);
};
