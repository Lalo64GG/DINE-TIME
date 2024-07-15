import { useEffect, useState } from "react";

export const useGet = (url : string, token?: string) => {

  const apiKey = import.meta.env.VITE_API_KEY;

  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      try {

        const headers: { [key: string]: string } = {
          "Content-Type": "application/json",
          "x-api-key": `${apiKey}`,
        };

        if (token) {
          headers["Authorization"] = ` ${token}`;
        }

        const res = await fetch(url, {
            headers: headers,
        });
        const data = await res.json();
        
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
