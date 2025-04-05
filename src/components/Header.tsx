
import React from "react";
import { Menu, Plus, Edit } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 px-4 border-b border-gray-800">
      <div className="flex items-center">
        <Menu className="h-5 w-5 mr-3" />
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
