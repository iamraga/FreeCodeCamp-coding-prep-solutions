function insertionSort(array) {
  // change code below this line
  let index = 0;
  //Iterating through array
  for(let i=1; i<array.length; i++) {
    //If this value is lesser than previous value
    if(array[i] < array[i-1]) {
      index = i; //Set current index for swapping
      for(let j=i-1; j>=0; j--) {
        if(array[j] > array[index]) { 
          //Swap to previous index till the number reaches correct index
          [array[index], array[j]] = [array[j], array[index]];
          index = j;
        }
      }
    }
  }
  return array;
  // change code above this line
}

insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
