function permAlone(str) {
  //Getting all the permutations of the given string
  const results = permutations(str);
  let num = results.length;

  //Iterating through the permutations
  outer: for(let i=0; i<results.length; i++) {
    let eachStr = results[i];
    //Iterating through each string and looking for repeated characters
    for(let j=0; j<eachStr.length-1; j++) {
      if(eachStr[j] === eachStr[j+1]) {
        num--; //Reduce count if repeated characters are found
        continue outer;
      }
    }
  }
  console.log(num);
  return num;
}

function permutations(str) {
  var results = [];
  if(str.length === 1) { //Return the string if it has only one value
    return [str];
  }

  for(let i=0; i<str.length; i++) {
    //Taking each letter from string
    let letter = str[i];
    //Getting all the remaining letters
    let otherLetters = str.substring(0,i) + str.substring(i+1);
    //Call the permutations function for the remaining letters
    let innerPermutations = permutations(otherLetters);
    innerPermutations.forEach((eachPerm) => {
      results.push(letter + eachPerm);
    });
  }
  return results;  
}

permAlone('aab');
