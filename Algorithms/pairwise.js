function pairwise(arr, arg) {
  let valueObj = {}; //Object for all values with indices
  let sum = 0; //Initialise sum
  for(let i=0; i<arr.length; i++) {
    //Get the compliment of current value 
    //Compliment is the number that should be added to the current value to get the sum
    let compliment = arg - arr[i]; 

    //Check if we already have the compliment
    if(valueObj.hasOwnProperty(compliment)) {
      let indexArr = valueObj[compliment]; //Get the indices of the compliment
      if(indexArr.length === 0) { 
        //If the indexArray is empty, add current value to values object
        valueObj[arr[i]] = [i];
        continue;
      }
      let compIndex = indexArr.shift(); //Get the first value of the index
      sum += compIndex + i; //Add the current index and the compliment index
    }
    else if(valueObj.hasOwnProperty(arr[i])){
      //If the value is repeated, add to the array of indices for that value
      (valueObj[arr[i]]).push(i);
    }
    else {
      //If encountering the value for first time, add in our values object
      valueObj[arr[i]] = [i];
    }
  }
  console.log(sum);
  return sum;
}

pairwise([1,1,1],2);
