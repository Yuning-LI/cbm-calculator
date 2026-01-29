import Calculator from "./components/calculator/Calculator";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import SEOContent from "./components/SEOContent";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8 pb-24">
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900">
          CBM Calculator
        </h1>
        <p className="text-lg text-slate-600 mt-2">
          Professional volume & weight calculator for Sea Shipment, Air Freight, and Courier.
        </p>
        <div className="mt-6">
          <Calculator />
        </div>
        <div className="mt-12">
          <SEOContent />
        </div>
      </main>

      <Footer />
    </div>
  );
}
