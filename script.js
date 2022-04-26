/* 
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/

function countDuplicate(str) {
  debugger;
  let count = 0;
  const strArr = str.split("");
  const resArr = [];
  strArr.forEach((letter) => {
    const test = new RegExp(`${letter}`, "gi");
    if (!resArr.includes(letter.toLowerCase())) {
      if (str.match(test).length < 0);
      {
        console.log(typeof str.match(test));
        console.log(typeof str.match(test).length);
        count++;
      }
      resArr.push(letter.toLowerCase());
    }
  });
}

countDuplicate("Indivisibilities");
