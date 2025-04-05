
import React from "react";
import Header from "@/components/Header";
import CurrencyList from "@/components/CurrencyList";
import BottomNav from "@/components/BottomNav";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  // Styles for mobile optimization
  const containerClass = isMobile 
    ? "flex flex-col h-screen max-w-md mx-auto bg-background" 
    : "flex flex-col h-screen max-w-md mx-auto bg-background shadow-lg";

  return (
    <div className={containerClass}>
      <Header />
      <CurrencyList />
      <BottomNav />
    </div>
  );
};

export default Index;
