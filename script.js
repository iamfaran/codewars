// Complete the method/function so that it converts
//dash/underscore delimited words into camel casing.
//The first word within the output should be capitalized only
//if the original word was capitalized
//(known as Upper Camel Case, also often referred to as Pascal case).

/* 

Examples
1 -> "the-stealth-warrior" gets converted to "theStealthWarrior"
2 ->  "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

*/

// function toCamelCase(str) {
//   let firstCapital = false;
//   let res = "";
//   const strArr = str.split(/[-_]/);
//   strArr.forEach((word, index) => {
//     if (word.charAt() === word.charAt().toUpperCase()) {
//       firstCapital = true;
//     }
//     if (firstCapital) {
//       res += word.charAt().toUpperCase();
//       res += word.slice(1);
//       return;
//     }
//     if (index > 0) {
//       res += word.charAt().toUpperCase();
//       res += word.slice(1);
//     }
//   });

//   console.log(res);
// }

function toCamelCase(str) {
  debugger;
  str = str.split(/[-_]/);
  for (var i = 1; i < str.length; i++) {
    console.log(str[i].charAt(0).toUpperCase().concat(str[i].slice(1)));
    str[i] = str[i].charAt(0).toUpperCase().concat(str[i].slice(1));
  }
  return str.join("");
}
console.log(toCamelCase("the-stealth-warrior"));
