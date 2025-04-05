
import React, { useEffect, useRef } from "react";
import { ChevronDown, Plus, LineChart, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import BottomNav from "@/components/BottomNav";
import Sidebar from "@/components/Sidebar";
import { useIsMobile } from "@/hooks/use-mobile";

const ChartPage = () => {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);

  // Styles for mobile optimization
  const containerClass = isMobile 
    ? "flex flex-col h-screen max-w-md mx-auto bg-white pb-16" 
    : "flex flex-col h-screen max-w-md mx-auto bg-white shadow-lg pb-16";

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
          <Sheet>
            <SheetTrigger asChild>
              <button className="border-none bg-transparent p-0 cursor-pointer">
                <Menu className="h-5 w-5 mr-3" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
              <Sidebar />
            </SheetContent>
          </Sheet>
          <div className="flex items-center">
            <span className="text-lg font-medium">M1</span>
            <ChevronDown className="ml-1 h-4 w-4" />
          </div>
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

      <div className="flex-1 w-full" ref={containerRef}>
        <div id="tradingview_chart" className="h-full w-full"></div>
      </div>

      <BottomNav />
    </div>
  );
};

export default ChartPage;
