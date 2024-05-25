// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  /*
  Pseudocode:

  Copy the original array
  Create an array to store the sorted values
  While the array is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Pop a value from the array
  - Create a new spot at the end of the array with null to help with comparisons
  - Walk through the sorted array in reverse order
  - Check if the value to the left is smaller than the new value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  Return the sorted array
  */

  // Your code here 
  let newArr = []
  arr.map(el => newArr.push(el));
  // let test = newArr.pop()
  // let sorted = [test];
  let sorted = [];

  while (newArr.length) {
    console.log(sorted.join(','));
    
    let el = newArr.pop() // el = 2
    
    // newArr.push(null);
    let length = sorted.length; // length = 7
    for (let i = sorted.length-1; i>=0; i--) {
      let el_sorted = sorted[i];

      if (el_sorted < el) { // el_sorted = 1; i = 0 .
        sorted.splice(i+1,0,el);
        i = -1;
        // console.log(sorted);
      }
      //   else {
      //   sorted[i-1] = el_sorted;
      //   sorted[i] = sorted[i-1];
      // }
    }
    let newLength = sorted.length;

    if (length === newLength) sorted.unshift(el);
  }
  return sorted;

}

// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  /*
  Pseudocode:

  Set a pointer dividing the array into sorted and unsorted halves
  Repeat while the unsorted half is not empty:
  - make sure you have a console.log(sorted.join(',')) as your first line in the while loop
  - Grab the first value from the unsorted half
  - For each value starting from the divider,
  - Check if the value to the left is smaller than the unsorted value
  - If so, you've reached the insertion point so exit the loop
  - If not shift the value to the right by 1 and continue
  - Insert the unsorted value at the break point
  - Increment the dividing pointer and repeat
  Return the mutated array
  */

  // Your code here 
}

module.exports = [insertionSort, insertionSortInPlace];


// note: 
// arr = [2,4,6,8,1,3,5,7,9];
// insertionSort(arr);


