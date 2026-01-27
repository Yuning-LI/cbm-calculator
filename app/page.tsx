import Calculator from "./components/calculator/Calculator";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          CBM Calculator
        </h1>
        
        <Calculator />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8">
                <article className="prose prose-slate max-w-none">
                  <h2>How to calculate CBM?</h2>
                  <p>
                    CBM (Cubic Meter) is a standard unit of measurement for freight volume.
                    Formula: Length (m) × Width (m) × Height (m) × Quantity.
                  </p>
                </article>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
