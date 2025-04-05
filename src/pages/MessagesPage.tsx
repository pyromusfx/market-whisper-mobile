
import React from "react";
import Header from "@/components/Header";
import BottomNav from "@/components/BottomNav";
import { useIsMobile } from "@/hooks/use-mobile";
import { Search, Plus, Settings } from "lucide-react";

const MessagesPage = () => {
  const isMobile = useIsMobile();

  // Styles for mobile optimization
  const containerClass = isMobile 
    ? "flex flex-col h-screen max-w-md mx-auto bg-white" 
    : "flex flex-col h-screen max-w-md mx-auto bg-white shadow-lg";

  return (
    <div className={containerClass}>
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center">
          <span className="text-lg font-medium">Hakan Sari</span>
          <span className="ml-2 text-xs bg-gray-200 px-2 py-0.5 rounded">Demo</span>
        </div>
        <div className="flex items-center space-x-4">
          <Search className="h-5 w-5" />
          <Plus className="h-5 w-5" />
          <Settings className="h-5 w-5" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="border-b p-3">
          <div className="flex">
            <div className="flex-shrink-0 mr-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                M
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div className="font-medium">Profile</div>
                <div className="text-xs text-gray-500">19:19</div>
              </div>
              <div className="text-sm text-gray-500 mt-1">
                New MQL5.com authorization from '38...
              </div>
            </div>
          </div>
        </div>

        <div className="border-b p-3">
          <div className="flex">
            <div className="flex-shrink-0 mr-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <img src="/lovable-uploads/c28f4f06-fff6-43e0-b961-76640df71526.png" alt="Expert" className="w-6 h-6" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div className="font-medium">ExpertsAdvisorSA</div>
                <div className="text-xs text-gray-500">27.03</div>
              </div>
              <div className="text-sm text-gray-500 mt-1">
                Görüntü
              </div>
            </div>
          </div>
        </div>

        <div className="border-b p-3">
          <div className="flex">
            <div className="flex-shrink-0 mr-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                M
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div className="font-medium">Articles</div>
                <div className="text-xs text-gray-500">14.03</div>
              </div>
              <div className="text-sm text-gray-500 mt-1">
                A New Approach to Custom Criteria in...
              </div>
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-1"></div>
            </div>
          </div>
        </div>

        <div className="border-b p-3">
          <div className="flex">
            <div className="flex-shrink-0 mr-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                F
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div className="font-medium">FBS Markets Inc.</div>
                <div className="text-xs text-gray-500">14.03</div>
              </div>
              <div className="text-sm text-gray-500 mt-1">
                FBS Yıldönümü Macerası devam ediyor...
              </div>
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-1"></div>
            </div>
          </div>
        </div>

        <div className="border-b p-3">
          <div className="flex">
            <div className="flex-shrink-0 mr-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-black font-bold">
                Z
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div className="font-medium">zorroS</div>
                <div className="text-xs text-gray-500">20.11.2024</div>
              </div>
              <div className="text-sm text-gray-500 mt-1">
                Hello
              </div>
            </div>
          </div>
        </div>

        <div className="border-b p-3">
          <div className="flex">
            <div className="flex-shrink-0 mr-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                M
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div className="font-medium">Trading Platform</div>
                <div className="text-xs text-gray-500">13.11.2024</div>
              </div>
              <div className="text-sm text-gray-500 mt-1">
                MQL5.com'da satıcı olarak kaydolun ve...
              </div>
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-1"></div>
            </div>
          </div>
        </div>

        {/* Additional messages */}
        <div className="border-b p-3">
          <div className="flex">
            <div className="flex-shrink-0 mr-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                S
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div className="font-medium">System</div>
                <div className="text-xs text-gray-500">14.08.2024</div>
              </div>
              <div className="text-sm text-gray-500 mt-1">
                Dear Seller,...
              </div>
            </div>
          </div>
        </div>

        <div className="border-b p-3">
          <div className="flex">
            <div className="flex-shrink-0 mr-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-black overflow-hidden">
                <img src="/lovable-uploads/c28f4f06-fff6-43e0-b961-76640df71526.png" alt="Daniil" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div className="font-medium">Daniil Yudin</div>
                <div className="text-xs text-gray-500">13.09.2023</div>
              </div>
              <div className="text-sm text-gray-500 mt-1">
                How are you daniel
              </div>
            </div>
          </div>
        </div>

        <div className="border-b p-3">
          <div className="flex">
            <div className="flex-shrink-0 mr-3">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                DM
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between">
                <div className="font-medium">DMFX FOREX EĞİTİM</div>
                <div className="text-xs text-gray-500">19.04.2023</div>
              </div>
              <div className="text-sm text-gray-500 mt-1">
                Görüntü
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default MessagesPage;
