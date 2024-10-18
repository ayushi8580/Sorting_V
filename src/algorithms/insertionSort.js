export const insertionSort = async (array, setArray, setIsSorting) => {
    let arr = array.slice();
    setIsSorting(true);
  
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];
      let j = i - 1;
  
      // Highlight the element being sorted
      await changeColor(i, null, 'current');
      
      // Move elements that are greater than key to one position ahead of their current position
      while (j >= 0 && arr[j] > key) {
        await changeColor(j, j + 1, 'swap');
        arr[j + 1] = arr[j];
        setArray([...arr]);
        j = j - 1;
  
        await changeColor(j + 1, j + 2, 'default'); // Reset color after swap
      }
      arr[j + 1] = key;
      setArray([...arr]);
  
      // Reset color after placing key in correct position
      await changeColor(i, null, 'default');
    }
  
    setIsSorting(false);
  };
  
  // Helper function to change colors during sorting
  const changeColor = (idx1, idx2, action) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const arrayBars = document.getElementsByClassName('array-bar');
        if (action === 'current') {
          arrayBars[idx1].style.backgroundColor = 'blue';
        } else if (action === 'swap') {
          arrayBars[idx1].style.backgroundColor = 'red';
          arrayBars[idx2].style.backgroundColor = 'red';
        } else {
          arrayBars[idx1].style.backgroundColor = 'turquoise';
          if (idx2 !== null) arrayBars[idx2].style.backgroundColor = 'turquoise';
        }
        resolve();
      }, 200); // Adjust speed here (200ms delay for each action)
    });
  };
  