
import React from "react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { useIsMobile } from "@/hooks/use-mobile";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

const TransactionPage = () => {
  const isMobile = useIsMobile();

  // Styles for mobile optimization
  const containerClass = isMobile 
    ? "flex flex-col h-screen max-w-md mx-auto bg-white" 
    : "flex flex-col h-screen max-w-md mx-auto bg-white shadow-lg";

  return (
    <div className={containerClass}>
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          <span className="text-lg font-medium">İşlem</span>
        </div>
        <div className="flex items-center">
          <Plus className="h-5 w-5" />
        </div>
      </div>

      <div className="flex-1 p-4 bg-gray-50">
        <div className="bg-white rounded-md p-4 mb-4 shadow-sm">
          <h2 className="font-medium text-lg mb-2">AUDUSD İşlemi</h2>
          <div className="grid grid-cols-2 gap-3 mt-3">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">İşlem Türü</span>
              <div className="flex mt-1 gap-1">
                <button className="py-1 px-3 rounded bg-green-500 text-white text-sm font-medium flex-1">Al</button>
                <button className="py-1 px-3 rounded bg-gray-200 text-gray-700 text-sm font-medium flex-1">Sat</button>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Miktar</span>
              <input type="text" className="mt-1 border rounded py-1 px-3 text-sm" defaultValue="0.10" />
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Fiyat</span>
              <input type="text" className="mt-1 border rounded py-1 px-3 text-sm" defaultValue="0.6043" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Stop Loss</span>
              <input type="text" className="mt-1 border rounded py-1 px-3 text-sm" defaultValue="0.6000" />
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Take Profit</span>
              <input type="text" className="mt-1 border rounded py-1 px-3 text-sm" defaultValue="0.6100" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Teminat</span>
              <span className="mt-1 py-1 px-3 text-sm">$60.43</span>
            </div>
          </div>
          
          <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded mt-4 text-sm font-medium">
            İşlemi Gerçekleştir
          </Button>
        </div>
        
        <div className="bg-white rounded-md shadow-sm">
          <div className="p-3 border-b text-sm font-medium bg-gray-50">
            Açık Pozisyonlar
          </div>
          
          <div className="p-3 border-b">
            <div className="flex justify-between">
              <div>
                <div className="text-sm font-medium">EURUSD</div>
                <div className="text-xs flex space-x-2">
                  <span className="text-green-500">Al 0.10</span>
                  <span className="text-gray-500">1.0812</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-green-500 font-medium">+$12.50</div>
                <div className="text-xs text-gray-500">S/L: 1.0750 T/P: 1.0900</div>
              </div>
            </div>
          </div>
          
          <div className="p-3">
            <div className="flex justify-between">
              <div>
                <div className="text-sm font-medium">GBPJPY</div>
                <div className="text-xs flex space-x-2">
                  <span className="text-red-500">Sat 0.05</span>
                  <span className="text-gray-500">193.64</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-red-500 font-medium">-$8.25</div>
                <div className="text-xs text-gray-500">S/L: 194.20 T/P: 192.50</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default TransactionPage;
