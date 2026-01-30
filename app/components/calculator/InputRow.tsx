"use client";

import { CargoItem, UnitSystem } from "../../lib/types";
import { Trash2 } from "lucide-react";
import clsx from "clsx";

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
    const rawValue = valueStr === "" ? 0 : Number(valueStr);
    const safeValue = Number.isNaN(rawValue) ? 0 : rawValue;

    if (field === "qty") {
      onChange(item.id, field, Math.floor(safeValue));
      return;
    }

    onChange(item.id, field, safeValue);
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
            value={value || ""}
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
