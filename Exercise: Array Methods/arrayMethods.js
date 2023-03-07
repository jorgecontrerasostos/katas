function transformToObjects(numberArray) {
  let arrayOfObjects = [];
  numberArray.map((e) => {
    arrayOfObjects.push({ value: e });
  });
  return arrayOfObjects;
}
console.log(transformToObjects([1, 2, 3]));
