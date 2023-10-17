import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [currencyInfo, setCurrencyInfo] = useState({});
  const url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setCurrencyInfo(res[currency]));
  }, [currency]);

  return currencyInfo;
}

export default useCurrencyInfo;
