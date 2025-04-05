
import React from "react";
import { Menu, Plus, Edit } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 px-4 border-b">
      <div className="flex items-center">
        <Sheet>
          <SheetTrigger asChild>
            <Menu className="h-5 w-5 mr-3 cursor-pointer" />
          </SheetTrigger>
          <SheetContent side="left" className="p-0">
            <Sidebar />
          </SheetContent>
        </Sheet>
        <h1 className="text-lg font-medium">Fiyatlar</h1>
      </div>
      <div className="flex items-center space-x-4">
        <Plus className="h-5 w-5" />
        <Edit className="h-5 w-5" />
      </div>
    </header>
  );
};

export default Header;
