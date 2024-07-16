// Tools/Hooks/useAdminInfo.ts
import { useEffect, useState } from "react";
import { useGet } from "./useGet";

const url = import.meta.env.VITE_API_URL;

export const useAdminInfo = () => {
  const [adminInfo, setAdminInfo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const token = localStorage.getItem("token");
  const id = localStorage.getItem("uid");

  const { data } = useGet(
    `${url}/admin/${id}`,
    token || ""
  );

  useEffect(() => {
    if (!token || !id) {
      setLoading(false);
      setError("No token or ID found");
      return;
    }

    if (data) {
      setAdminInfo(data);
      setLoading(false);
    }

  }, [data]);

  return { adminInfo, loading, error };
};
