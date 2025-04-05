
import React from "react";
import Header from "@/components/Header";
import CurrencyList from "@/components/CurrencyList";
import BottomNav from "@/components/BottomNav";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  // Styles for mobile optimization
  const containerClass = isMobile 
    ? "flex flex-col h-screen max-w-md mx-auto bg-white" 
    : "flex flex-col h-screen max-w-md mx-auto bg-white shadow-lg";

  return (
    <div className={containerClass}>
      <Header />
      <div className="flex-1 overflow-y-auto bg-white">
        <CurrencyList />
      </div>
      <BottomNav />
    </div>
  );
};

export default Index;
