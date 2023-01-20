// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript

function longestConsec(strarr, k) {
  // your code
  let resultStr = "";

  if (strarr && (strarr.length < k || k > strarr.length)) {
    return resultStr;
  }

  let combinedStringArray = [];

  for (let i = 0; i < strarr.length; i++) {
    let tmpIndex = 0;
    let tmpString = "";
    strarr.map((arrString, index) => {
      if (tmpIndex < k) {
        if (index >= i) {
          tmpString = tmpString + arrString;
          tmpIndex++;
        }
      } else {
        return;
      }
    });

    combinedStringArray = [...combinedStringArray, tmpString];
  }

  combinedStringArray = combinedStringArray.sort((a, b) => b.length - a.length);

  return combinedStringArray[0];
}
