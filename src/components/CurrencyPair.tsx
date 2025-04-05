
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface CurrencyPairProps {
  symbol: string;
  price: number;
  change: number;
  changePct: number;
  time: string;
  low: number;
  high: number;
}

const CurrencyPair = ({
  symbol,
  price,
  change,
  changePct,
  time,
  low,
  high,
}: CurrencyPairProps) => {
  const [priceState, setPriceState] = useState(price);
  const [animation, setAnimation] = useState<string | null>(null);

  useEffect(() => {
    if (price > priceState) {
      setAnimation("animate-flash-green");
    } else if (price < priceState) {
      setAnimation("animate-flash-red");
    }
    
    setPriceState(price);
    
    const timer = setTimeout(() => {
      setAnimation(null);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [price]);

  const formatPrice = (value: number) => {
    return value.toFixed(value >= 10 ? 2 : 5);
  };

  return (
    <div className={cn("flex items-center py-3 px-4 border-b", animation)}>
      <div className="flex-1">
        <div className="flex items-center">
          <span className="text-base font-semibold">{symbol}</span>
          <span 
            className={cn(
              "text-xs ml-2 px-1 py-0.5 rounded", 
              changePct > 0 ? "text-trade-up" : "text-trade-down"
            )}
          >
            {changePct > 0 ? "+" : ""}{changePct.toFixed(2)}%
          </span>
        </div>
        <div className="text-xs text-gray-400">{time}</div>
      </div>
      
      <div className="flex flex-col items-end">
        <div className="flex items-center space-x-1">
          <span className={cn("text-lg font-medium", 
            changePct > 0 ? "price-up" : "price-down"
          )}>{formatPrice(price)}</span>
          <span className="text-xs">{(price + 0.0001).toFixed(price >= 10 ? 2 : 5)}</span>
        </div>
        <div className="flex text-xs text-gray-400">
          <span className="mr-3">L: {formatPrice(low)}</span>
          <span>H: {formatPrice(high)}</span>
        </div>
      </div>
    </div>
  );
};

export default CurrencyPair;
