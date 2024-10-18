export const selectionSort = async (array, setArray, setIsSorting) => {
    let arr = array.slice();
    let n = arr.length;
    setIsSorting(true);
    
    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        await changeColor(j, minIdx, 'compare');
  
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
  
        await changeColor(j, minIdx, 'default');
      }
  
      if (minIdx !== i) {
        await changeColor(i, minIdx, 'swap');
        swap(arr, i, minIdx);
        setArray([...arr]);
        await changeColor(i, minIdx, 'default');
      }
    }
    setIsSorting(false);
  };
  
  const changeColor = (idx1, idx2, action) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const arrayBars = document.getElementsByClassName('array-bar');
        if (action === 'compare') {
          arrayBars[idx1].style.backgroundColor = 'yellow';
          arrayBars[idx2].style.backgroundColor = 'yellow';
        } else if (action === 'swap') {
          arrayBars[idx1].style.backgroundColor = 'red';
          arrayBars[idx2].style.backgroundColor = 'red';
        } else {
          arrayBars[idx1].style.backgroundColor = 'turquoise';
          arrayBars[idx2].style.backgroundColor = 'turquoise';
        }
        resolve();
      }, 100);
    });
  };
  
  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };
  