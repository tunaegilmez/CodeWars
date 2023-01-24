//https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str) {
  let count = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < str.length; i++) {
    vowels.forEach(function (letter) {
      if (str[i] === letter) {
        count++;
      }
    });
  }
  return count;
}
