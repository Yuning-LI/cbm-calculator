"use client";

import { Package, Scale, Plane } from "lucide-react";

interface ResultCardProps {
  totals: {
    cbm: number;
    weightKg: number;
    volumetricWeightKg: number;
  };
}

export default function ResultCard({ totals }: ResultCardProps) {
  const { cbm, weightKg, volumetricWeightKg } = totals;
  
  const cft = cbm * 35.3147;
  const weightLb = weightKg * 2.20462;

  return (
    <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg">
      <h2 className="text-lg font-bold mb-4 border-b border-slate-700 pb-2">Results</h2>
      
      <div className="space-y-6">
        {/* Volume */}
        <div>
           <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
             <Package size={16} />
             <span>Total Volume</span>
           </div>
           <div className="flex items-baseline gap-2">
             <span className="text-3xl font-bold text-emerald-400">{cbm.toFixed(3)}</span>
             <span className="text-sm font-medium">m³</span>
           </div>
           <div className="text-sm text-slate-500 mt-1">
             {cft.toFixed(2)} ft³
           </div>
        </div>

        {/* Weight */}
        <div className="grid grid-cols-2 gap-4">
            <div>
               <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                 <Scale size={16} />
                 <span>Total Weight</span>
               </div>
               <div className="flex items-baseline gap-2">
                 <span className="text-xl font-bold text-white">{weightKg.toFixed(2)}</span>
                 <span className="text-xs text-slate-400">kg</span>
               </div>
               <div className="text-xs text-slate-500">
                 {weightLb.toFixed(2)} lb
               </div>
            </div>

            <div>
               <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                 <Plane size={16} />
                 <span>Volumetric W.</span>
               </div>
               <div className="flex items-baseline gap-2">
                 <span className="text-xl font-bold text-white">{volumetricWeightKg.toFixed(2)}</span>
                 <span className="text-xs text-slate-400">kg</span>
               </div>
               <div className="text-xs text-slate-500">
                 Divisor: 6000
               </div>
            </div>
        </div>
      </div>
    </div>
  );
}
