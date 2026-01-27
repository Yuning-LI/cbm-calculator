export default function Footer() {
  return (
    <footer className="bg-slate-100 py-8 mt-12 border-t border-slate-200">
      <div className="container mx-auto px-4 text-center text-slate-500">
        <p>© {new Date().getFullYear()} FreightCBM. All rights reserved.</p>
      </div>
    </footer>
  );
}
