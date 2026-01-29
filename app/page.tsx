import Calculator from "./components/calculator/Calculator";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import SEOContent from "./components/SEOContent";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-8 pb-24">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">
          CBM Calculator
        </h1>
        
        <Calculator />
        
        <div className="mt-12">
           <SEOContent />
        </div>
      </main>

      <Footer />
    </div>
  );
}
