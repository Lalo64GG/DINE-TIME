const API_WEEKLY_SALES = 'https://estadisticadinetime.zapto.org/sales/weekly';
const API_PROBABILITY = 'https://estadisticadinetime.zapto.org/sales/probability';

export const fetchWeeklySales = async () => {
  const response = await fetch(API_WEEKLY_SALES);
  const data = await response.json();
  return data;
};

export const fetchProbability = async () => {
  const response = await fetch(API_PROBABILITY);
  const data = await response.json();
  return data;
};
