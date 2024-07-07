import { useState, useMemo } from 'react';

export const useSortedFood = (foodItems : any, sortBy: any) => {
  const [sortCriteria, setSortCriteria] = useState(sortBy);

  const sortedFood = useMemo(() => {
    return [...foodItems].sort((a, b) => {
      if (sortCriteria === 'rating') {
        return b.rating - a.rating;
      } else if (sortCriteria === 'price') {
        return a.price - b.price;
      }
      return 0;
    });
  }, [foodItems, sortCriteria]);

  return { sortedFood, setSortCriteria };
};
