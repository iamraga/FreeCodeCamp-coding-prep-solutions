function swap(arr, x, y) {
    [arr[x], arr[y]] = [arr[y], arr[x]]; //Swap function using destructuring
}

function pivot(arr, left = 0, right = arr.length - 1) {
    let shift = left; //Setting the initial pivot to first element
    for(let i= left + 1; i <= right; i++) {
        //If current element is lesser than pivot element, swap it with the starting of the array and implement shift.
        if(arr[i] < arr[left]) { 
            swap(arr, i, ++shift);
        }
    }
    //After arranging, place the pivot element (First element) in its right place by swapping with the final shift value.
    swap(arr, shift, left);
    return shift;
}

function quickSort(array, left = 0, right = array.length - 1) {
    // Only change code below this line
    if(left < right) {
        let pivotIndex = pivot(array, left, right);

        quickSort(array, left, pivotIndex - 1);
        quickSort(array, pivotIndex + 1, right);
    }
    return array;
    // Only change code above this line
}
  