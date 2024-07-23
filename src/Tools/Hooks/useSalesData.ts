import { useState, useEffect } from 'react';
import axios from 'axios';

interface SalesProbabilities {
  [key: string]: number;
}

interface SalesData {
  salesProbabilities: SalesProbabilities | null;
  weeklySales: number | null;
  loading: boolean;
}

const url = import.meta.env.VITE_API_URL;

export const useSalesData = (token: string | null): SalesData => {
  const [salesProbabilities, setSalesProbabilities] = useState<SalesProbabilities | null>(null);
  const [weeklySales, setWeeklySales] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [probResponse, weeklyResponse] = await Promise.all([
          axios.get(`${url}/sales/probability`, {
            headers: { Authorization: `Bearer ${token}` }
          }),
          axios.get(`${url}/sales/weekly`, {
            headers: { Authorization: `Bearer ${token}` }
          })
        ]);

        setSalesProbabilities(probResponse.data.sales_probabilities);
        setWeeklySales(weeklyResponse.data.weekly_sales);
      } catch (error) {
        console.error('Error fetching sales data', error);
      } finally {
        setLoading(false);
      }
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  return { salesProbabilities, weeklySales, loading };
};
