// Polya Problem Solving Methodology
// 1. Understand the Problem
// A plaindrome is a word that will spell the same whether it is forward or backwards
// input is a string , output is a boolean



// 2. Make a plan
//write the function signature : const funcName = () => {}

// take the word and break it down into an array of single characters
// reverse the word that was broken into single characters, join the array of characters back together to be  a string 

// before/during comparison we change both the word and the backwards word to lower case => Radar != radaR 
// Compare the two words :
// if the word are equal to each other, return true 
// otherwise , return false




// 3. Write the code (execute the plan)
const isPalindrome = (word) => {
    // take the word and break it down into an array of single characters
// reverse the word that was broken into single characters, join the array of characters back together to be  a string 
    const reverseWord = word.split('').reverse().join("")
// Compare the two words :
// if the word are equal to each other, return true 
// otherwise , return false
//Before /during comparison we both the word and the backwars word to lower case => Radar != radaR 

// if (word.toLowerCase() ===  reverseWord){
// return true
// }else{
//     return false
// }
// }
//using a ternary operator
// return word.toLowerCase() === reverseWord.toLowerCase() ? true : false

//Simplifying bc the expression evaluates toa boolean already 

return word.toLowerCase() === reverseWord.toLowerCase()
}

console.log(isPalindrome ("radar"))
console.log(isPalindrome ("madam"))
console.log(isPalindrome ("Carlos"))



// 4. Refactor/revise
//make it case sensitive
//can we shorten this code

