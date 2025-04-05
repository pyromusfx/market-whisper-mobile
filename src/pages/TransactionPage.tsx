
import React from "react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { useIsMobile } from "@/hooks/use-mobile";
import { Plus } from "lucide-react";

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

      <div className="flex-1 p-4">
        <div className="border rounded-md p-4 mb-4">
          <h2 className="font-medium">AUDUSD İşlemi</h2>
          <div className="grid grid-cols-2 gap-2 mt-2">
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">İşlem Türü</span>
              <button className="mt-1 bg-green-500 text-white py-1 px-3 rounded">Al</button>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Miktar</span>
              <input type="text" className="mt-1 border rounded py-1 px-3" defaultValue="0.10" />
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Fiyat</span>
              <input type="text" className="mt-1 border rounded py-1 px-3" defaultValue="0.6043" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Stop Loss</span>
              <input type="text" className="mt-1 border rounded py-1 px-3" defaultValue="0.6000" />
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Take Profit</span>
              <input type="text" className="mt-1 border rounded py-1 px-3" defaultValue="0.6100" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">Teminat</span>
              <span className="mt-1 py-1 px-3">$60.43</span>
            </div>
          </div>
          
          <button className="w-full bg-blue-600 text-white py-2 rounded mt-4">
            İşlemi Gerçekleştir
          </button>
        </div>
        
        <div className="border rounded-md">
          <div className="p-3 border-b text-sm font-medium bg-gray-50">
            Açık Pozisyonlar
          </div>
          
          <div className="p-3 border-b">
            <div className="flex justify-between">
              <div>
                <div className="text-sm font-medium">EURUSD</div>
                <div className="text-xs flex space-x-2">
                  <span className="text-green-500">Al 0.10</span>
                  <span>1.0812</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-green-500">+$12.50</div>
                <div className="text-xs">S/L: 1.0750 T/P: 1.0900</div>
              </div>
            </div>
          </div>
          
          <div className="p-3">
            <div className="flex justify-between">
              <div>
                <div className="text-sm font-medium">GBPJPY</div>
                <div className="text-xs flex space-x-2">
                  <span className="text-red-500">Sat 0.05</span>
                  <span>193.64</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-red-500">-$8.25</div>
                <div className="text-xs">S/L: 194.20 T/P: 192.50</div>
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
