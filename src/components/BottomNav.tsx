
import React from "react";
import { LineChart, BarChart2, Activity, Clock, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
}

const NavItem = ({ icon, label, to }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to}
      className={cn(
        "flex flex-col items-center justify-center py-2", 
        isActive ? "text-primary" : "text-gray-400"
      )}
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
};

const BottomNav = () => {
  return (
    <div className="flex items-center justify-around border-t bg-white">
      <NavItem 
        icon={<LineChart size={20} />} 
        label="Fiyatlar" 
        to="/"
      />
      <NavItem 
        icon={<BarChart2 size={20} />} 
        label="Grafikler" 
        to="/grafikler"
      />
      <NavItem 
        icon={<Activity size={20} />} 
        label="İşlem" 
        to="/islem"
      />
      <NavItem 
        icon={<Clock size={20} />} 
        label="Geçmiş" 
        to="/gecmis"
      />
      <NavItem 
        icon={<MessageSquare size={20} />} 
        label="Mesajlar" 
        to="/mesajlar"
      />
    </div>
  );
};

export default BottomNav;
