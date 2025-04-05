
import React from "react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { useIsMobile } from "@/hooks/use-mobile";
import { RefreshCcw, ArrowUp, ArrowDown, Calendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HistoryPage = () => {
  const isMobile = useIsMobile();

  // Styles for mobile optimization
  const containerClass = isMobile 
    ? "flex flex-col h-screen max-w-md mx-auto bg-white" 
    : "flex flex-col h-screen max-w-md mx-auto bg-white shadow-lg";

  return (
    <div className={containerClass}>
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          <span className="text-lg font-medium">Geçmiş</span>
        </div>
        <div className="flex items-center space-x-3">
          <RefreshCcw className="h-5 w-5" />
          <ArrowUp className="h-5 w-5" />
          <ArrowDown className="h-5 w-5" />
          <Calendar className="h-5 w-5" />
        </div>
      </div>

      <Tabs defaultValue="pozisyonlar" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="pozisyonlar">POZİSYONLAR</TabsTrigger>
          <TabsTrigger value="emirler">EMİRLER</TabsTrigger>
          <TabsTrigger value="islemler">İŞLEMLER</TabsTrigger>
        </TabsList>
        
        <TabsContent value="pozisyonlar" className="p-0">
          <div className="p-4 border-b">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Kâr:</span>
              <span className="text-red-500 font-medium">-397.72</span>
            </div>
            <div className="flex justify-between text-sm my-1">
              <span className="text-gray-500">Yatırılan:</span>
              <span className="font-medium">10 000.00</span>
            </div>
            <div className="flex justify-between text-sm my-1">
              <span className="text-gray-500">Swap:</span>
              <span className="text-red-500 font-medium">-173.30</span>
            </div>
            <div className="flex justify-between text-sm my-1">
              <span className="text-gray-500">Komisyon:</span>
              <span className="text-red-500 font-medium">-72.53</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Bakiye:</span>
              <span className="font-medium">9 356.45</span>
            </div>
          </div>

          <div>
            <div className="flex justify-between p-2 border-b">
              <div>
                <div className="text-sm">Bakiye</div>
                <div className="text-xs text-gray-500">Deposit to 67141921</div>
              </div>
              <div className="text-right">
                <div className="text-sm">2025.03.12 19:31:59</div>
                <div className="text-blue-600 font-medium">10 000.00</div>
              </div>
            </div>

            <div className="flex justify-between p-2 border-b">
              <div>
                <div className="text-sm">GBPUSD, <span className="text-red-500">sell 0.10</span></div>
                <div className="text-sm">1.29672 → 1.29666</div>
              </div>
              <div className="text-right">
                <div className="text-sm">2025.03.12 19:57:02</div>
                <div className="text-right text-blue-500">0.60</div>
              </div>
            </div>

            <div className="flex justify-between p-2 border-b">
              <div>
                <div className="text-sm">NZDUSD, <span className="text-red-500">sell 0.10</span></div>
                <div className="text-sm">0.57260 → 0.57254</div>
              </div>
              <div className="text-right">
                <div className="text-sm">2025.03.12 19:57:02</div>
                <div className="text-right text-blue-500">0.60</div>
              </div>
            </div>

            <div className="flex justify-between p-2 border-b">
              <div>
                <div className="text-sm">AUDUSD, <span className="text-green-500">buy 0.10</span></div>
                <div className="text-sm">0.63097 → 0.63095</div>
              </div>
              <div className="text-right">
                <div className="text-sm">2025.03.12 19:57:03</div>
                <div className="text-right text-red-500">-0.20</div>
              </div>
            </div>

            <div className="flex justify-between p-2 border-b">
              <div>
                <div className="text-sm">EURUSD, <span className="text-green-500">buy 0.10</span></div>
                <div className="text-sm">1.09069 → 1.09067</div>
              </div>
              <div className="text-right">
                <div className="text-sm">2025.03.12 19:57:02</div>
                <div className="text-right text-red-500">-0.20</div>
              </div>
            </div>

            <div className="flex justify-between p-2 border-b bg-green-50">
              <div>
                <div className="text-sm">EURUSD, <span className="text-red-500">sell 1.00</span></div>
                <div className="text-sm">1.09072 → 1.09021</div>
              </div>
              <div className="text-right">
                <div className="text-sm">2025.03.12 20:16:22</div>
                <div className="text-right text-blue-500">51.00</div>
              </div>
            </div>

            <div className="flex justify-between p-2 border-b">
              <div>
                <div className="text-sm">NZDUSD, <span className="text-red-500">sell 1.00</span></div>
                <div className="text-sm">0.57186 → 0.57308</div>
              </div>
              <div className="text-right">
                <div className="text-sm">2025.03.12 23:20:26</div>
                <div className="text-right text-red-500">-122.00</div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="emirler" className="p-4">
          <div className="text-center py-8 text-gray-500">
            Henüz emir bulunmuyor
          </div>
        </TabsContent>
        
        <TabsContent value="islemler" className="p-4">
          <div className="text-center py-8 text-gray-500">
            Henüz işlem bulunmuyor
          </div>
        </TabsContent>
      </Tabs>

      <BottomNav />
    </div>
  );
};

export default HistoryPage;
