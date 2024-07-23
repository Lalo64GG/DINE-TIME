import axios from 'axios';

const API_WEEKLY_SALES = 'https://estadisticaventas.onrender.com/sales/weekly';
const API_PROBABILITY = 'https://estadisticaventas.onrender.com/sales/probability';


export const fetchWeeklySales = async () => {
  try {
    const response = await axios.get(API_WEEKLY_SALES);
    return response.data;
  } catch (error) {
    console.error("Error fetching weekly sales data:", error);
    throw error; 
  }
};

export const fetchProbability = async () => {
  try {
    const response = await axios.get(API_PROBABILITY);
    return response.data;
  } catch (error) {
    console.error("Error fetching probability data:", error);
    throw error; 
  }
};
