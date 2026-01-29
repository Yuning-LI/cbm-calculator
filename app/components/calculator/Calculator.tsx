"use client";

import { useState, useMemo } from "react";
import { CargoItem, UnitSystem } from "../../lib/types";
import { DEFAULT_AIR_DIVISOR } from "../../lib/constants";
import InputRow from "./InputRow";
import ResultCard from "./ResultCard";
import ContainerBar from "./ContainerBar";
import UnitToggle from "./UnitToggle";
import { Plus, RotateCcw } from "lucide-react";

export default function Calculator() {
  const [unit, setUnit] = useState<UnitSystem>("metric");
  const [items, setItems] = useState<CargoItem[]>([
    { id: "1", qty: 0, length: 0, width: 0, height: 0, weight: 0 }
  ]);

  const addItem = () => {
    setItems([
      ...items,
      { id: crypto.randomUUID(), qty: 0, length: 0, width: 0, height: 0, weight: 0 }
    ]);
  };

  const updateItem = (id: string, field: keyof CargoItem, value: number) => {
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const deleteItem = (id: string) => {
    if (items.length > 1) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  const reset = () => {
    if (confirm("Are you sure you want to reset all data?")) {
        setItems([{ id: crypto.randomUUID(), qty: 0, length: 0, width: 0, height: 0, weight: 0 }]);
    }
  };

  const totals = useMemo(() => {
    let totalCbm = 0;
    let totalWeightKg = 0;

    items.forEach(item => {
      const { qty, length, width, height, weight } = item;
      if (qty <= 0) return;

      // CBM Calculation
      let itemCbm = 0;
      if (unit === "metric") {
        // cm -> m3
        itemCbm = (length * width * height) / 1_000_000;
      } else {
        // Imperial: inches -> cbm
        // Formula: (L*W*H) / 1728 = cubic feet
        // cubic feet / 35.3147 = cubic meters
        itemCbm = (length * width * height) / (1728 * 35.3147);
      }
      totalCbm += itemCbm * qty;

      // Weight Calculation (always convert to kg for internal logic)
      let itemWeightKg = 0;
      if (unit === "metric") {
        itemWeightKg = weight;
      } else {
        // lb -> kg
        itemWeightKg = weight * 0.453592;
      }
      totalWeightKg += itemWeightKg * qty;
    });

    const volumetricWeightKg = (totalCbm * 1_000_000) / DEFAULT_AIR_DIVISOR;

    return {
      cbm: totalCbm,
      weightKg: totalWeightKg,
      volumetricWeightKg
    };
  }, [items, unit]);

  const scrollToResults = () => {
     document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 relative pb-20 md:pb-0">
      <div className="md:col-span-8 space-y-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex justify-between items-center mb-6">
            <UnitToggle unit={unit} onToggle={setUnit} />
            <button 
                onClick={reset}
                className="text-sm text-slate-400 hover:text-red-500 flex items-center gap-1 transition-colors"
            >
                <RotateCcw size={14} /> Reset
            </button>
          </div>
          
          <div className="space-y-4">
            {items.map(item => (
              <InputRow
                key={item.id}
                item={item}
                unit={unit}
                onChange={updateItem}
                onDelete={deleteItem}
                canDelete={items.length > 1}
              />
            ))}
          </div>

          <div className="mt-6">
            <button
              onClick={addItem}
              className="w-full py-3 border-2 border-dashed border-slate-200 rounded-lg text-slate-500 font-medium hover:border-emerald-500 hover:text-emerald-500 transition-all flex items-center justify-center gap-2"
            >
              <Plus size={20} /> Add Cargo Line
            </button>
          </div>
        </div>
      </div>

      <div className="md:col-span-4 lg:col-span-4" id="results-section">
        <div className="sticky top-24 h-fit space-y-6">
          <ResultCard totals={totals} unit={unit} />
          <ContainerBar totalCbm={totals.cbm} />
          
           {/* Ad Placeholder */}
           <div className="bg-slate-100 p-4 rounded-lg h-[280px] flex items-center justify-center text-slate-400 text-sm">
              Ad Space (300x250)
           </div>
        </div>
      </div>
      
      {/* Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] z-50 flex items-center justify-between safe-area-bottom">
          <div>
              <p className="text-xs text-slate-500">Total Volume</p>
              <p className="text-lg font-bold text-slate-900">{totals.cbm.toFixed(3)} <span className="text-sm font-normal text-slate-500">m³</span></p>
          </div>
          <button 
            onClick={scrollToResults}
            className="bg-emerald-500 text-white px-6 py-2 rounded-lg font-medium shadow-md active:scale-95 transition-transform"
          >
            Check Fit
          </button>
      </div>
    </div>
  );
}
