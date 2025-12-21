import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useAxios = ({
  url,
  method = "GET",
  body = null,
  params = null,
  headers = {},
  immediate = true,
}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios({
        url,
        method,
        data: body,
        params,
        headers,
      });

      setData(response.data);
    } catch (err) {
      setError(err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  }, [url, method, body, params, headers]);

  useEffect(() => {
    if (immediate) {
      fetchData();
    }
  }, [fetchData, immediate]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
};

export default useAxios;
