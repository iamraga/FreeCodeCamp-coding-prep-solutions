function selectionSort(array) {
  // change code below this line
  let currentIndex = 0;
  let minIndex = 0;

  //Considering each index for positioning
  for(let i=currentIndex; i<array.length; i++) {

    //Looping through the rest of the array to find the min value
    for(let j=currentIndex; j<array.length; j++) {
      //Update min index
      if(array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    //Swap the min value from the array with the current index
    [array[currentIndex], array[minIndex]] = [array[minIndex], array[currentIndex]];

    //Now the currentIndex has the correct value
    //Jump to the next index and repeat the process
    currentIndex++; 
    minIndex = currentIndex;
  }
  return array;
  // change code above this line
}


selectionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
