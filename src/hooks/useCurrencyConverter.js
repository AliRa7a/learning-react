import { useState, useEffect } from "react";

const useCurrencyConverter = (apiKey, from, to, amount) => {
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const convertCurrencies = async () => {
      try {
        const url = `https://api.apilayer.com/fixer/convert?to=${to}&from=${from}&amount=${amount}`;
        const response = await fetch(url, {
          headers: {
            apikey: apiKey,
          },
        });
        const data = await response.json();
        setConvertedAmount(data.result);
        setLoading(false);
      } catch (error) {
        console.error("Error converting currencies:", error);
        setLoading(false);
      }
    };

    convertCurrencies();
    return () => {};
  }, [apiKey, from, to, amount]);

  return { convertedAmount, loading };
};

export default useCurrencyConverter;
