"use client";

import { CargoItem, UnitSystem } from "../../lib/types";
import { Trash2 } from "lucide-react";
import { clsx } from "clsx";

interface InputRowProps {
  item: CargoItem;
  unit: UnitSystem;
  onChange: (id: string, field: keyof CargoItem, value: number) => void;
  onDelete: (id: string) => void;
  canDelete: boolean;
}

export default function InputRow({ item, unit, onChange, onDelete, canDelete }: InputRowProps) {
  const dimUnit = unit === "metric" ? "cm" : "in";
  const weightUnit = unit === "metric" ? "kg" : "lb";

  const handleChange = (field: keyof CargoItem, valueStr: string) => {
    // If empty string, we pass 0, but user sees empty because we use value={item.x || ""}
    // Wait, if we pass 0, item.x becomes 0. 0 || "" is "". So it works.
    // But if user types "-", parseFloat("-") is NaN.
    const value = parseFloat(valueStr);
    
    // For integer Qty
    if (field === 'qty' && !isNaN(value)) {
        // Requirement 2.3: Qty must be integer. Down floor.
        // But if we floor immediately while typing, user can't type decimals if they wanted to?
        // Requirement says "If decimal, floor it".
        // Let's floor it on calculation or on blur? Real-time means maybe on change.
        // Let's just pass the value and floor it in logic or here.
        // "Qty: Must be integer... if decimal then floor"
        // Let's keep it simple: pass the value, parent handles logic or we handle it here.
        // To avoid jumping cursor, maybe just parse as int.
        onChange(item.id, field, Math.floor(value));
        return;
    }
    
    onChange(item.id, field, isNaN(value) ? 0 : value);
  };

  const renderInput = (
    label: string, 
    field: keyof CargoItem, 
    value: number, 
    placeholder: string = "0"
  ) => {
    const isError = value < 0;
    return (
      <div className="w-full">
        <label className="block text-xs font-medium text-slate-500 mb-1">{label}</label>
        <div className="relative">
          <input
            type="number"
            min="0"
            value={value === 0 ? "" : value} 
            onChange={(e) => handleChange(field, e.target.value)}
            className={clsx(
              "w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-colors",
              isError ? "border-red-500 bg-red-50" : "border-slate-200"
            )}
            placeholder={placeholder}
          />
        </div>
        {isError && (
          <p className="text-[10px] text-red-500 mt-1">Must be {">"} 0</p>
        )}
      </div>
    );
  };

  return (
    <div className="grid grid-cols-12 gap-3 md:gap-4 items-start p-3 md:p-4 bg-slate-50 rounded-lg border border-slate-100 transition-all hover:shadow-sm hover:border-emerald-100">
       {/* Qty */}
       <div className="col-span-6 md:col-span-2">
         {renderInput("Qty", "qty", item.qty)}
       </div>

       {/* Dimensions */}
       <div className="col-span-6 md:col-span-2">
         {renderInput(`Length (${dimUnit})`, "length", item.length)}
       </div>
       <div className="col-span-6 md:col-span-2">
         {renderInput(`Width (${dimUnit})`, "width", item.width)}
       </div>
       <div className="col-span-6 md:col-span-2">
         {renderInput(`Height (${dimUnit})`, "height", item.height)}
       </div>

       {/* Weight */}
       <div className="col-span-10 md:col-span-3">
         {renderInput(`Weight / Box (${weightUnit})`, "weight", item.weight)}
       </div>

       {/* Delete */}
       <div className="col-span-2 md:col-span-1 flex justify-center pt-7">
         <button
           onClick={() => onDelete(item.id)}
           disabled={!canDelete}
           className={clsx(
             "p-2 rounded-full transition-colors",
             canDelete ? "text-slate-400 hover:text-red-500 hover:bg-red-50" : "text-slate-200 cursor-not-allowed"
           )}
           title="Delete row"
         >
           <Trash2 size={18} />
         </button>
       </div>
    </div>
  );
}
