
import React, { useEffect, useRef } from "react";
import BottomNav from "@/components/BottomNav";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronDown, Plus, LineChart } from "lucide-react";

const ChartPage = () => {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);

  // Styles for mobile optimization
  const containerClass = isMobile 
    ? "flex flex-col h-screen max-w-md mx-auto bg-white" 
    : "flex flex-col h-screen max-w-md mx-auto bg-white shadow-lg";

  // Setup TradingView widget
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    document.head.appendChild(script);

    script.onload = () => {
      if (typeof window.TradingView !== 'undefined' && containerRef.current) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "AUDUSD",
          interval: "60",
          timezone: "Etc/UTC",
          theme: "light",
          style: "1",
          locale: "tr",
          enable_publishing: false,
          hide_top_toolbar: false,
          hide_legend: true,
          container_id: 'tradingview_chart'
        });
      }
    };

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className={containerClass}>
      <div className="flex items-center justify-between py-3 px-4 border-b">
        <div className="flex items-center">
          <span className="text-lg font-medium">M1</span>
          <ChevronDown className="ml-1 h-4 w-4" />
        </div>
        <div className="flex items-center space-x-3">
          <button className="text-gray-500 hover:text-gray-700">
            <Plus className="h-5 w-5" />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <LineChart className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="flex items-center p-3 border-b">
        <div className="flex items-center justify-between w-full">
          <div>
            <div className="font-medium">AUDCAD - M1</div>
            <div className="text-xs text-gray-500">Australian Dollar vs Canadian Dollar</div>
          </div>
          <div className="text-right">
            <div className="text-lg font-medium">0.8593</div>
            <div className="flex text-xs text-gray-500">
              <span className="px-1">0.01</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full" ref={containerRef}>
        <div id="tradingview_chart" className="h-full w-full"></div>
      </div>

      <BottomNav />
    </div>
  );
};

export default ChartPage;
