import React from 'react';
import MergeSort from './MergeSort';

const MergeSortHome = () => {
  const data = [
    {
      "id": 1,
      "name": "Item 1",
      "category": "Category B"
    },
    {
      "id": 2,
      "name": "Item 2",
      "category": "Category D"
    },
    {
      "id": 3,
      "name": "Item 3",
      "category": "Category C"
    },
    {
      "id": 4,
      "name": "Item 4",
      "category": "Category A"
    },
    {
      "id": 5,
      "name": "Item 5",
      "category": "Category A"
    }
  ];

  return (
    <div>
      <h1>Your Application</h1>
      <MergeSort data={data} />
    </div>
  );
};

export default MergeSortHome;
