import React, { useCallback, useEffect, useState } from "react";

const useFetch = (query, page) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  const sendQuery = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      // axios 통신부분 const res = await axios
      await setList((prev) => [new Set([...prev, ...res.data])]);
      setHasMore(res.data.docs.length > 0);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  }, [query, page]);

  useEffect(() => {
    sendQuery(query);
  }, [query, sendQuery, page]);
};

export default useFetch;
