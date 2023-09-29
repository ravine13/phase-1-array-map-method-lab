const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = function (){
  const newArray = tutorials.map(function(element){
    return titleCase(element);
  }); 
  return newArray;
}
function titleCase(str){
  const strArray = str.split(' ')
  const capitalizedWords = [];
  for (const word of strArray){
  //  console.log(word)
    const firstLetter = word.charAt(0).toLocaleUpperCase()
    const rest = word.slice(1);
    const newWord = firstLetter + rest;
    capitalizedWords.push(newWord);
  }
  return capitalizedWords.join(' ')
}
//console.log(titleCased());
//titleCase('What is the difference between stopPropagation and preventDefault?');
  
