// On this function we take one number as parameter an convert it to HEX value.
const singleToHex = (n) => {
  if (n < 0) {
    return "00";
  }
  if (n > 255) {
    return "FF";
  }
  // Convert  number to HEX using toString method with 16 as parameter HEX = 16
  return ("0" + Number(n).toString(16)).slice(-2).toUpperCase();
};

const rgbToHex = (r, g, b) => {
  return "#" + singleToHex(r) + singleToHex(g) + singleToHex(b);
};

console.log(rgbToHex(255, 255, 300));
