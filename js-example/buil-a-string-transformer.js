const originalString = "I love cats.";
console.log("Original string:");
console.log(originalString);


let replacedString = originalString.replace("cats", "dogs");

console.log("After using the replace() method:");
console.log(replacedString);

let exampleSentence = "I love cats and cats are so much fun!";
console.log("Original sentence:");
console.log(exampleSentence);

const dogsOnlySentence =exampleSentence.replaceAll("cats", "dogs");
console.log("Replacing all occurrences of cats with dogs:");
console.log(dogsOnlySentence);

