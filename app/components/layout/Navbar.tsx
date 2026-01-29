import { Ship } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Ship className="h-6 w-6 text-emerald-500" />
          <span className="text-xl font-bold">FreightCBM</span>
        </div>
        <div className="space-x-4">
          <a href="#guide" className="hover:text-emerald-500 transition">Guide</a>
        </div>
      </div>
    </nav>
  );
}
