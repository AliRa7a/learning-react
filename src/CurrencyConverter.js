import React, { useState } from "react";
import useCurrencySymbols from "./hooks/useCurrencySymbols";
import useCurrencyConverter from "./hooks/useCurrencyConverter";

const CurrencyConverter = ({ apiKey }) => {
  const [fromCurrency, setFromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("");
  const [amount, setAmount] = useState(1);

  const { symbols, loading: symbolsLoading } = useCurrencySymbols(apiKey);
  const { convertedAmount, loading: converterLoading } = useCurrencyConverter(
    apiKey,
    fromCurrency,
    toCurrency,
    amount
  );

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      <div className="mb-4">
        <label className="block mb-2">From:</label>
        <select
          className="w-full px-3 py-2 border rounded-md"
          value={fromCurrency}
          onChange={handleFromCurrencyChange}
        >
          {symbolsLoading ? (
            <option>Loading...</option>
          ) : (
            Object.keys(symbols).map((symbol) => (
              <option key={symbol} value={symbol}>
                {symbol} - {symbols[symbol]}
              </option>
            ))
          )}
        </select>
      </div>
      <div className="mb-4">
        <label className="block mb-2">Amount:</label>
        <input
          className="w-full px-3 py-2 border rounded-md"
          type="number"
          value={amount}
          min={1}
          onChange={handleAmountChange}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">To:</label>
        <select
          className="w-full px-3 py-2 border rounded-md"
          value={toCurrency}
          onChange={handleToCurrencyChange}
        >
          {symbolsLoading ? (
            <option>Loading...</option>
          ) : (
            Object.keys(symbols).map((symbol) => (
              <option key={symbol} value={symbol}>
                {symbol} - {symbols[symbol]}
              </option>
            ))
          )}
        </select>
      </div>
      <div>
        {converterLoading ? (
          <p>Converting...</p>
        ) : (
          <p>Converted Amount: {convertedAmount}</p>
        )}
      </div>
    </div>
  );
};

export default CurrencyConverter;
