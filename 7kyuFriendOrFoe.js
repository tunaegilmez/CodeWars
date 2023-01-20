//https://www.codewars.com/kata/55b42574ff091733d900002f/train/javascript

function friend(friends) {
  let arr = [];
  friends.map((myFriend) => {
    if (myFriend.match(/^[a-zA-Z]*$/g) !== null && myFriend.length == 4) {
      arr.push(myFriend);
    }
  });
  return arr;
}
