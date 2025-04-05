
import React from "react";
import { Menu, Plus, Edit } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-3 px-4 border-b bg-white">
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
        <h1 className="text-lg font-medium">Fiyatlar</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="text-gray-500 hover:text-gray-700">
          <Plus className="h-5 w-5" />
        </button>
        <button className="text-gray-500 hover:text-gray-700">
          <Edit className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
