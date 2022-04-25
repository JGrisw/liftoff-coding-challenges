function FirstReverse(str) {
  let array = str.split("");
  let newStr = [];
  for (let i = 0; i < array.length; i++) {
    newStr = unshift(array[i]);
  }
  str = newStr.join("");
  return str;
}

// keep this function call here
console.log(FirstReverse(readline()));
