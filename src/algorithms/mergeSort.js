export const mergeSort = async (array, setArray, setIsSorting) => {
    let arr = array.slice();
    setIsSorting(true);
  
    await mergeSortHelper(arr, 0, arr.length - 1, setArray);
    setIsSorting(false);
  };
  
  const mergeSortHelper = async (arr, left, right, setArray) => {
    if (left >= right) return;
    
    const middle = Math.floor((left + right) / 2);
    await mergeSortHelper(arr, left, middle, setArray);
    await mergeSortHelper(arr, middle + 1, right, setArray);
    await merge(arr, left, middle, right, setArray);
  };
  
  const merge = async (arr, left, middle, right, setArray) => {
    const leftArray = arr.slice(left, middle + 1);
    const rightArray = arr.slice(middle + 1, right + 1);
  
    let i = 0, j = 0, k = left;
  
    while (i < leftArray.length && j < rightArray.length) {
      await changeColor(k, null, 'current');
      if (leftArray[i] <= rightArray[j]) {
        arr[k] = leftArray[i];
        i++;
      } else {
        arr[k] = rightArray[j];
        j++;
      }
      setArray([...arr]);
      await changeColor(k, null, 'default');
      k++;
    }
  
    // Copy the remaining elements of leftArray[], if any
    while (i < leftArray.length) {
      arr[k] = leftArray[i];
      setArray([...arr]);
      await changeColor(k, null, 'current');
      i++;
      k++;
      await changeColor(k - 1, null, 'default');
    }
  
    // Copy the remaining elements of rightArray[], if any
    while (j < rightArray.length) {
      arr[k] = rightArray[j];
      setArray([...arr]);
      await changeColor(k, null, 'current');
      j++;
      k++;
      await changeColor(k - 1, null, 'default');
    }
  };
  
  // Helper function to change colors during sorting
  const changeColor = (idx1, idx2, action) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const arrayBars = document.getElementsByClassName('array-bar');
        if (action === 'current') {
          arrayBars[idx1].style.backgroundColor = 'blue';
        } else {
          arrayBars[idx1].style.backgroundColor = 'turquoise';
        }
        resolve();
      }, 300); // Adjust speed here (300ms delay for merge steps)
    });
  };
  