function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    // console.log(merge(left, right, array))
    return merge(left, right, array);
}

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};

const arr = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]

console.log(mergeSort(arr))


function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

function partition(array, start, end) {
    const pivot = array[end - 1];
    console.log('pivot', pivot)
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};


function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    console.log('middle', middle)
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    console.log('arr', array)
    return array;
};

const arr1 = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12]
console.log(quickSort(arr1))

const arr2 = [3, 9, 1, 14, 17, 24, 22, 20]
console.log(quickSort(arr2))


function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);

    left = mergeSort(left);
    right = mergeSort(right);
    // console.log(merge(left, right, array))
    return merge(left, right, array);
}

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }

    for (let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for (let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
};

const arr = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]

console.log(mergeSort(arr))


function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

function partition(array, start, end) {
    const pivot = array[end - 1];
    console.log('pivot', pivot)
    let j = start;
    for (let i = start; i < end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
};

//pivot could either be 14 or 17 

function quickSort(array, start = 0, end = array.length) {
    if (start >= end) {
        return array;
    }
    const middle = partition(array, start, end);
    console.log('middle', middle)
    array = quickSort(array, start, middle);
    array = quickSort(array, middle + 1, end);
    console.log('arr', array)
    return array;
};

const arr1 = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12]
console.log(quickSort(arr1))

const arr2 = [3, 9, 1, 14, 17, 24, 22, 20]
console.log(quickSort(arr2))
//last item [ 3, 9, 10, 12, 19, 14, 17, 16, 13, 15 ]
//1st item [ 3, 9, 10, 12, 13, 14, 15, 16, 19, 17 ]

let arr = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];

let arr2 = [3, 6, 8, 9, 4, 5, 7];

function partition(arr, start, end) {
  const pivot = arr[end - 1];
  let j = start;
  for (let i=start; i<end - 1; i++) {
    if (arr[i] <= pivot) {
      swap(arr, i, j);
      j++;
    }
  }
  swap(arr, end-1, j);
  return j;
  // let middleIndex = Math.floor((start+end)/2);
  // let pivot = arr[middleIndex];
  // let j = end-1;
  // for (let i=start; i < end -1; i++) {
  //   if (arr[i] >= pivot && arr[j] <= pivot)  {
  //     swap(arr, i, j);
  //     j++;
  //   }
  // }
  // swap(arr, end);
  // return j;
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function quickSort(arr, start=0, end=arr.length) {
  start = start;
  end = end;
  if (start >= end) {
    return arr;
  }
  const middle = partition(arr, start, end);
  arr = quickSort(arr, start, middle);
  arr = quickSort(arr, middle + 1, end);
  return arr;
  

}
