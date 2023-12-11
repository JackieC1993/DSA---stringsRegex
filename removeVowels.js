//Input is a string, output is a string with the vowels removed
//What are vowels? => a, e, i, o, u
//ex: "hello" => "hll"
//ex: "Gaspare" => "GSPR"

//Create empty string to hold our new string(consonants)
//Iterate over the string parameter
//Check if letter at each iteration is a vowel
//If it is isn't a vowel add it to the new string
//If it IS a vowel, we can leave it alone and keep going
//Return the new string

const disemvowelWord = (word) => {
  //Create empty string to hold our new string(consonants)
  let newStr = ""

  //iterate over our string parameter
  for (let i = 0; i < word.length; i++) {
      //Check if the letter at each iteration is a vowel
      if (
          word[i].toLowerCase() === "a" &&
          word[i].toLowerCase() === "e" &&
          word[i].toLowerCase() === "i" &&
          word[i].toLowerCase() === "o" &&
          word[i].toLowerCase() === "u"
      ) {
          newStr += word[i]
      }
  }
  return newStr
}
//4. Refactor and Revise
const disemvowelWord = (word) => {
  //Create empty string to hold our new string(consonants)
  let newStr = ""
  word = word.toLowerCase()

  //iterate over our string parameter
  for (let i = 0; i < word.length; i++) {
      //Check if the letter at each iteration is a vowel
      if (
          word[i] === "a" &&
          word[i] === "e" &&
          word[i] === "i" &&
          word[i] === "o" &&
          word[i] === "u"
      ) {
          newStr += word[i]
      }
  }
  return newStr
}
[1:43 PM]
//You could also use word = word.slice(0,i) + word,slice(i + 1); i--;

const disemvowelWord2 = (word) => {
  for (let i = 0; i < word.length; i++) {
      if (
          word[i].toLowerCase() === "a" 
          word[i].toLowerCase() === "e" 
          word[i].toLowerCase() === "i" 
          word[i].toLowerCase() === "o" 
          word[i].toLowerCase() === "u"
      ) {
          word = word.slice(0, i) + word.slice(i + 1);
          i--;
      }
  }
  return word;
};
console.log(disemvowelWord2("Sean"))
//Returns "San" if we omit the 'i--'
[1:43 PM]
// //Using a Regular Expression
// const disemvowelWord3 = (word) => {
//     const regex = /a/
//     for (let i = 0; i < word.length; i++) {
//         //.match () will return an array if the regex values are found (even empty arrays/objects are truthy)
//         //or will return undefined if it is not found (falsy)
//         if (word[i].match(regex)) {             //regex.test(word[i])
//             //Do something
//             console.log(word[i].match(regex))
//         }
//     }
// }
// console.log(disemvowelWord3("Gaspare"))

const disemvowelWord3 = (word) => {
  //Pattern below searches for "ao"
  //Pattern searches for the first instance that matches either 'a' or 'o'
  //const regex = /ao/
  //Pattern searches for ALL instances that matches either 'a' or 'o'
  // const regex = /[ao]/g
  //Pattern searches for ALL (g: for global)instances that matches either 'a', 'e', 'i', 'o', 'u'  => (gi: i next to g includes lowercase vowels)
  const regex = /[aeiou]/gi
  // .replace: Replaces the values of regex that it finds in the the string with an empty ""
  // return word.replace(regex, "")
  //.match () will return an array if the regex values are found (even empty arrays/objects are truthy)
  //or will return undefined if it is not found (falsy)

}


console.log(disemvowelWord3("Jackie"))