"use client";

import { CONTAINER_SPECS, SAFETY_FACTOR } from "../../lib/constants";
import clsx from "clsx";
import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";

interface ContainerBarProps {
  totalCbm: number;
}

export default function ContainerBar({ totalCbm }: ContainerBarProps) {
  const containers = Object.values(CONTAINER_SPECS);

  const getStatus = (maxCbm: number) => {
    const safeCapacity = maxCbm * SAFETY_FACTOR;
    if (totalCbm <= safeCapacity * 0.85) return "safe"; // Green
    if (totalCbm <= safeCapacity) return "tight"; // Yellow
    return "overload"; // Red
  };

  const getPercentage = (maxCbm: number) => {
    // Cap at 100% for bar, but maybe show real % text
    if (maxCbm === 0) return 0;
    const pct = (totalCbm / maxCbm) * 100;
    return Math.min(pct, 100);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "safe": return "bg-emerald-500";
      case "tight": return "bg-yellow-500";
      case "overload": return "bg-red-500";
      default: return "bg-slate-300";
    }
  };
  
  const getStatusText = (status: string) => {
    switch (status) {
      case "safe": return "Fits comfortably";
      case "tight": return "Tight fit";
      case "overload": return "Overloaded";
      default: return "";
    }
  };

  const getIcon = (status: string) => {
     switch (status) {
      case "safe": return <CheckCircle size={14} className="text-emerald-600" />;
      case "tight": return <AlertTriangle size={14} className="text-yellow-600" />;
      case "overload": return <XCircle size={14} className="text-red-600" />;
      default: return null;
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
      <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">Container Fit</h3>
      
      <div className="space-y-6">
        {containers.map((container) => {
           const status = getStatus(container.maxCbm);
           const pct = getPercentage(container.maxCbm);
           const barColor = getStatusColor(status);
           
           return (
             <div key={container.name}>
                <div className="flex justify-between items-center mb-1">
                   <span className="text-sm font-medium text-slate-700">{container.name}</span>
                   <div className="flex items-center gap-1 text-xs">
                      {getIcon(status)}
                      <span className={clsx("font-medium", 
                          status === 'safe' ? 'text-emerald-600' : 
                          status === 'tight' ? 'text-yellow-600' : 'text-red-600'
                      )}>
                        {getStatusText(status)}
                      </span>
                   </div>
                </div>
                
                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                   <div 
                      className={clsx("h-full transition-all duration-500", barColor)} 
                      style={{ width: `${pct}%` }}
                   />
                </div>
                
                <div className="flex justify-between mt-1 text-[10px] text-slate-400">
                   <span>{totalCbm.toFixed(2)} / {container.maxCbm} m³</span>
                   <span>{Math.round((totalCbm / container.maxCbm) * 100)}%</span>
                </div>
             </div>
           );
        })}
      </div>
    </div>
  );
}
