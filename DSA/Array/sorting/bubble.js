// Algorithm

// 1: Define An array of numbers.
// 2:Start from the beginning of the array.
// 3:Compare each pair of adjacent elements.
// 4:If the first element is greater than the second, swap them.
// 5:Repeat steps 2 and 3 for all elements in the array.
// 6:Repeat steps 1-4 for the entire array until no swaps are needed (i.e., the array is sorted).

let array = [56, 89, 78, 2, 36];

function bubbleSort(array) {
  let length = array.length;

  console.log(array);

  for (let i = 0; i < length - 1; i++) {
    console.log(`pass ${i}`);
    console.log(array[i] + " is array of i");

    for (let j = 0; j < length - i - 1; j++) {
      console.log(array[j] + " is array of j");
      console.log(`compairing array[i] and array[j]`);

      if (array[j] > array[j + 1]) {
        let swap;
        swap = array[j];
        array[j] = array[j + 1];
        array[j + 1] = swap;

        console.log(`${array}`);
      }
    }
  }
}

bubbleSort(array);
