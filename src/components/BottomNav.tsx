
import React from "react";
import { LineChart, BarChart2, Activity, Clock, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
}

const NavItem = ({ icon, label, isActive = false, onClick }: NavItemProps) => {
  return (
    <button 
      className={cn(
        "flex flex-col items-center justify-center py-2", 
        isActive ? "text-primary" : "text-gray-400"
      )}
      onClick={onClick}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </button>
  );
};

const BottomNav = () => {
  const [activeTab, setActiveTab] = React.useState("fiyatlar");

  return (
    <div className="flex items-center justify-around border-t border-gray-800 bg-card">
      <NavItem 
        icon={<LineChart size={20} />} 
        label="Fiyatlar" 
        isActive={activeTab === "fiyatlar"}
        onClick={() => setActiveTab("fiyatlar")}
      />
      <NavItem 
        icon={<BarChart2 size={20} />} 
        label="Grafikler" 
        isActive={activeTab === "grafikler"}
        onClick={() => setActiveTab("grafikler")}
      />
      <NavItem 
        icon={<Activity size={20} />} 
        label="İşlem" 
        isActive={activeTab === "islem"}
        onClick={() => setActiveTab("islem")}
      />
      <NavItem 
        icon={<Clock size={20} />} 
        label="Geçmiş" 
        isActive={activeTab === "gecmis"}
        onClick={() => setActiveTab("gecmis")}
      />
      <NavItem 
        icon={<MessageSquare size={20} />} 
        label="Mesajlar" 
        isActive={activeTab === "mesajlar"}
        onClick={() => setActiveTab("mesajlar")}
      />
    </div>
  );
};

export default BottomNav;
