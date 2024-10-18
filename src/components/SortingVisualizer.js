import React, { useState } from 'react';
import './SortingVisualizer.css';
import { bubbleSort } from '../algorithms/bubbleSort';
import { selectionSort } from '../algorithms/selectionSort';
import { insertionSort } from '../algorithms/insertionSort';
import { mergeSort } from '../algorithms/mergeSort';

const SortingVisualizer = () => {
  const [array, setArray] = useState([50, 40, 30, 60, 20, 90, 10, 70, 80, 100]);
  const [isSorting, setIsSorting] = useState(false);

  const resetArray = () => {
    setArray([50, 40, 30, 60, 20, 90, 10, 70, 80, 100]);
  };

  return (
    <div>
      <h1>Sorting Visualizer</h1>
      <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              height: `${value}px`,
              backgroundColor: 'turquoise', // Default color
            }}
          ></div>
        ))}
      </div>
      <div className="button-container">
        <button onClick={resetArray} disabled={isSorting}>Reset Array</button>
        <button onClick={() => bubbleSort(array, setArray, setIsSorting)} disabled={isSorting}>Bubble Sort</button>
        <button onClick={() => selectionSort(array, setArray, setIsSorting)} disabled={isSorting}>Selection Sort</button>
        <button onClick={() => insertionSort(array, setArray, setIsSorting)} disabled={isSorting}>Insertion Sort</button>
        <button onClick={() => mergeSort(array, setArray, setIsSorting)} disabled={isSorting}>Merge Sort</button>
      </div>
    </div>
  );
};

export default SortingVisualizer;
