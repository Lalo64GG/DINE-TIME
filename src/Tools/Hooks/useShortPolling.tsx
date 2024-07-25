import { useState, useEffect } from 'react';

export const useShortPolling = (url: string, pollingInterval = 5000) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        if(error instanceof Error)
        setError(error.message);
      }
    };

    fetchData(); // Initial fetch

    const intervalId = setInterval(fetchData, pollingInterval);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [url, pollingInterval]);

  return { data, error };
};

