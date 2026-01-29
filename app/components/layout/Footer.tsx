export default function Footer() {
  return (
    <footer className="bg-slate-100 py-8 mt-12 border-t border-slate-200 pb-20 md:pb-0">
      <div className="container mx-auto px-4 text-center text-slate-500">
        <div className="space-y-2">
          <p>© {new Date().getFullYear()} CBM Calculator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
