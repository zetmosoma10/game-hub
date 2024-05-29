import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((resp) => {
        setData(resp.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) setError(err.message);
        setIsLoading(false);
        console.log(err);
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;
