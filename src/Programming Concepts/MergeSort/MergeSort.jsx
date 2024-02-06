import React, { useState } from "react";

const MergeSort = ({ data }) => {
  const [sortedData, setSortedData] = useState([]);

  const mergeSort = (array, temp, low, high) => {
    if (low < high) {
      const middle = Math.floor((low + high) / 2);
      mergeSort(array, temp, low, middle);
      mergeSort(array, temp, middle + 1, high);

      merge(array, temp, low, middle, high);
    }
  };

  const merge = (array, temp, low, middle, high) => {
    let left = low;
    let mid = middle + 1;
    let k = low;

    while (left <= middle && mid <= high) {
      if (array[left].category <= array[mid].category) {
        temp[k++] = array[left++];
      } else {
        temp[k++] = array[mid++];
      }
    }

    while (left <= middle) {
      temp[k++] = array[left++];
    }

    while (mid <= high) {
      temp[k++] = array[mid++];
    }

    for (let i = low; i <= high; i++) {
      array[i] = temp[i];
    }
  };

  const sortData = () => {
    const low = 0;
    const high = data.length - 1;
    let temp = new Array(data.length);
    let data1 = [...data];
    mergeSort(data1, temp, low, high);
    setSortedData(data1);
  };

  return (
    <div>
      <button onClick={sortData}>Sort by Category (MergeSort)</button>
      <ul>
        {sortedData.map((item) => (
          <li key={item.id}>
            {item.category} - {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MergeSort;
