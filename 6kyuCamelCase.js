function solution(stringParam) {
  let arr = [];
  let x; //, y;
  let willReturnString = "";

  for (let i = 0; i < stringParam.length; i++) {
    let letter = stringParam[i];
    console.log("letter:", letter, "--", letter.charCodeAt(0));
    if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
      willReturnString = willReturnString + " " + letter;
    } else {
      willReturnString = willReturnString + letter;
    }
  }

  console.log(arr, "arr");
  return x;
  //   return string.indexOf(letter);
  //   return string.split();
}

("camelCasingTest");
console.log(solution("camelCasingTest"));
// console.log("C".charCodeAt(0));
