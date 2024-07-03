import { useEffect, useState } from "react";

export const useGet = (url : string) => {

  const apiKey = import.meta.env.VITE_API_KEY;

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, {
          headers: {
           'x-api-key': `${apiKey}`
          }
        });
        const data = await res.json();

        console.log(data);

        setData(data);
        setLoading(false);
      } catch (error) {
        console.log({
          msg: "Algo salio mal al hacer la petición GET",
          error,
        });
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
  };
};
