/* 
bitcoin take over the world maybe who knows perhaps

return the lenght of shortest words in this example "3"

*/

function shortWords(str) {
  const strArr = str.split(" ");
  let shortestWord = strArr[0];

  strArr.forEach((word) => {
    if (word.length < shortestWord.length) {
      shortestWord = word;
    }
  });
  return shortestWord.length;
}

shortWords("bitcoin take over the world maybe who knows perhaps");
