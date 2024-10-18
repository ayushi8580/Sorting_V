export const bubbleSort = async (array, setArray, setIsSorting) => {
    let arr = array.slice();
    let n = arr.length;
    setIsSorting(true);
    
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        // Compare elements and highlight
        await changeColor(j, j + 1, 'compare');
  
        if (arr[j] > arr[j + 1]) {
          // Swap elements and highlight swap
          await changeColor(j, j + 1, 'swap');
          swap(arr, j, j + 1);
          setArray([...arr]);
        }
  
        // Reset color after comparison
        await changeColor(j, j + 1, 'default');
      }
    }
    setIsSorting(false);
  };
  
  // Helper function to change colors during sorting
  const changeColor = (idx1, idx2, action) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const arrayBars = document.getElementsByClassName('array-bar');
        if (action === 'compare') {
          arrayBars[idx1].style.backgroundColor = '#FFD700';  // Yellow for comparing
          arrayBars[idx2].style.backgroundColor = '#FFD700';
        } else if (action === 'swap') {
          arrayBars[idx1].style.backgroundColor = '#FF6347';  // Red for swapping
          arrayBars[idx2].style.backgroundColor = '#FF6347';
        } else {
          arrayBars[idx1].style.backgroundColor = 'turquoise';  // Default color
          if (idx2 !== null) arrayBars[idx2].style.backgroundColor = 'turquoise';
        }
        resolve();
      }, 100);  // Slightly faster but still visible
    });
  };
  
  
  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };
  