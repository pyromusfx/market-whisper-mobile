
import React from "react";
import { Link } from "react-router-dom";
import { 
  LineChart, Newspaper, Mail, Calendar, Settings, BarChart, Users, Terminal, HelpCircle, Info,
  ChevronRight
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="h-full bg-white border-r">
      <div className="p-4 border-b">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center mr-3">
            <span className="text-lg font-bold">F</span>
          </div>
          <div>
            <div className="font-medium">OSMAN İNKAYA</div>
            <div className="text-xs text-gray-500">67149123 - RoboForex-ECN</div>
          </div>
        </div>
        <div className="mt-2">
          <Link to="/" className="text-blue-500 text-sm">Hesapları yönet</Link>
        </div>
      </div>

      <div className="mt-2">
        <Link to="/islem" className="flex items-center justify-between p-3 hover:bg-gray-100">
          <div className="flex items-center">
            <LineChart className="w-5 h-5 mr-3" />
            <span>İşlem</span>
          </div>
          <ChevronRight className="w-4 h-4" />
        </Link>
        
        <Link to="/haberler" className="flex items-center justify-between p-3 hover:bg-gray-100">
          <div className="flex items-center">
            <Newspaper className="w-5 h-5 mr-3" />
            <span>Haberler</span>
          </div>
          <ChevronRight className="w-4 h-4" />
        </Link>
        
        <Link to="/mesajlar" className="flex items-center justify-between p-3 hover:bg-gray-100">
          <div className="flex items-center">
            <Mail className="w-5 h-5 mr-3" />
            <span>Posta kutusu</span>
          </div>
          <div className="bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
            4
          </div>
        </Link>
        
        <Link to="/gunluk" className="flex items-center justify-between p-3 hover:bg-gray-100">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-3" />
            <span>Günlük</span>
          </div>
          <ChevronRight className="w-4 h-4" />
        </Link>
        
        <Link to="/ayarlar" className="flex items-center justify-between p-3 hover:bg-gray-100">
          <div className="flex items-center">
            <Settings className="w-5 h-5 mr-3" />
            <span>Ayarlar</span>
          </div>
          <ChevronRight className="w-4 h-4" />
        </Link>
        
        <div className="flex items-center justify-between p-3 hover:bg-gray-100">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-3" />
            <span>Ekonomik Takvim</span>
          </div>
          <div className="bg-gray-100 text-xs px-1 rounded">Add</div>
        </div>
        
        <Link to="/topluluk" className="flex items-center justify-between p-3 hover:bg-gray-100">
          <div className="flex items-center">
            <Users className="w-5 h-5 mr-3" />
            <span>Yatırımcı topluluğu</span>
          </div>
          <ChevronRight className="w-4 h-4" />
        </Link>
        
        <Link to="/alim-satim" className="flex items-center justify-between p-3 hover:bg-gray-100">
          <div className="flex items-center">
            <Terminal className="w-5 h-5 mr-3" />
            <span>MQL5 Algo Alım-Satım</span>
          </div>
          <ChevronRight className="w-4 h-4" />
        </Link>
        
        <Link to="/kilavuz" className="flex items-center justify-between p-3 hover:bg-gray-100">
          <div className="flex items-center">
            <HelpCircle className="w-5 h-5 mr-3" />
            <span>Kullanıcı Kılavuzu</span>
          </div>
          <ChevronRight className="w-4 h-4" />
        </Link>
        
        <Link to="/hakkinda" className="flex items-center justify-between p-3 hover:bg-gray-100">
          <div className="flex items-center">
            <Info className="w-5 h-5 mr-3" />
            <span>Hakkında</span>
          </div>
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
