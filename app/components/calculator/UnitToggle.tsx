"use client";

import { UnitSystem } from "../../lib/types";
import clsx from "clsx";

interface UnitToggleProps {
  unit: UnitSystem;
  onToggle: (unit: UnitSystem) => void;
}

export default function UnitToggle({ unit, onToggle }: UnitToggleProps) {
  return (
    <div className="flex bg-slate-100 p-1 rounded-lg w-fit">
      <button
        onClick={() => onToggle("metric")}
        className={clsx(
          "px-4 py-2 rounded-md text-sm font-medium transition-all",
          unit === "metric"
            ? "bg-white text-slate-900 shadow-sm"
            : "text-slate-500 hover:text-slate-900"
        )}
      >
        Metric (cm / kg)
      </button>
      <button
        onClick={() => onToggle("imperial")}
        className={clsx(
          "px-4 py-2 rounded-md text-sm font-medium transition-all",
          unit === "imperial"
            ? "bg-white text-slate-900 shadow-sm"
            : "text-slate-500 hover:text-slate-900"
        )}
      >
        Imperial (in / lb)
      </button>
    </div>
  );
}
