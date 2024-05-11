import { useState, useEffect } from "react";

const useCurrencySymbols = (apiKey) => {
  const [symbols, setSymbols] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSymbols = async () => {
      try {
        const response = await fetch("https://api.apilayer.com/fixer/symbols", {
          headers: {
            apikey: apiKey,
          },
        });
        const data = await response.json();
        setSymbols(data.symbols);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching currency symbols:", error);
        setLoading(false);
      }
    };

    fetchSymbols();
    return () => {};
  }, [apiKey]);

  return { symbols, loading };
};

export default useCurrencySymbols;
