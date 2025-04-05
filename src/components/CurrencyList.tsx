
import React, { useState, useEffect } from "react";
import CurrencyPair from "./CurrencyPair";

// Mock data for currency pairs
const initialPairs = [
  {
    id: 1,
    symbol: "AUDCAD",
    price: 0.8593,
    change: -0.0031,
    changePct: -3.55,
    time: "23:55:00 H4 28",
    low: 0.85287,
    high: 0.89174,
  },
  {
    id: 2,
    symbol: "AUDCHF",
    price: 0.5200,
    change: -0.0022,
    changePct: -4.30,
    time: "23:55:00 H4 33",
    low: 0.51368,
    high: 0.54398,
  },
  {
    id: 3,
    symbol: "AUDJPY",
    price: 88.77,
    change: -3.56,
    changePct: -3.93,
    time: "23:55:00 H4 26",
    low: 87.408,
    high: 92.641,
  },
  {
    id: 4,
    symbol: "AUDNZD",
    price: 1.0781,
    change: -0.0147,
    changePct: -1.27,
    time: "23:58:00 H4 271",
    low: 1.07728,
    high: 1.09345,
  },
  {
    id: 5,
    symbol: "AUDUSD",
    price: 0.6043,
    change: -0.0029,
    changePct: -4.48,
    time: "23:55:00 H4 16",
    low: 0.60318,
    high: 0.63094,
  },
  {
    id: 6,
    symbol: "CADCHF",
    price: 0.6650,
    change: -0.0052,
    changePct: -0.79,
    time: "23:55:00 H4 48",
    low: 0.65737,
    high: 0.67071,
  },
  {
    id: 7,
    symbol: "CADJPY",
    price: 103.27,
    change: -0.41,
    changePct: -0.41,
    time: "23:55:00 H4 43",
    low: 101.875,
    high: 104.105,
  },
  {
    id: 8,
    symbol: "EURUSD",
    price: 1.0812,
    change: 0.0018,
    changePct: 0.36,
    time: "23:55:00 H4 12",
    low: 1.0792,
    high: 1.0843,
  },
  {
    id: 9,
    symbol: "GBPJPY",
    price: 193.64,
    change: 0.53,
    changePct: 0.27,
    time: "23:55:00 H4 32",
    low: 192.85,
    high: 194.21,
  },
  {
    id: 10,
    symbol: "USDJPY",
    price: 151.24,
    change: -0.38,
    changePct: -0.25,
    time: "23:55:00 H4 22",
    low: 150.87,
    high: 151.63,
  },
];

const CurrencyList = () => {
  const [pairs, setPairs] = useState(initialPairs);

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setPairs(currentPairs => 
        currentPairs.map(pair => {
          // Random price movement simulation
          const movement = (Math.random() - 0.5) * 0.001 * pair.price;
          const newPrice = pair.price + movement;
          const change = pair.change + movement;
          const changePct = pair.changePct + (movement / pair.price) * 100;
          
          return {
            ...pair,
            price: newPrice,
            change: change,
            changePct: changePct,
            high: Math.max(pair.high, newPrice),
            low: Math.min(pair.low, newPrice),
          };
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex-1 overflow-y-auto">
      {pairs.map((pair) => (
        <CurrencyPair
          key={pair.id}
          symbol={pair.symbol}
          price={pair.price}
          change={pair.change}
          changePct={pair.changePct}
          time={pair.time}
          low={pair.low}
          high={pair.high}
        />
      ))}
    </div>
  );
};

export default CurrencyList;
