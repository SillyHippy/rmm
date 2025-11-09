import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-slate-900 to-blue-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-brand-lime mb-4">404</h1>
          <h2 className="text-4xl font-bold text-white mb-4">Page Not Found</h2>
          <p className="text-xl text-gray-300 mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or doesn&apos;t exist.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-brand-lime text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-brand-lime-light transition-colors shadow-lg shadow-brand-lime/30"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-colors border border-white/20"
          >
            <Search className="w-5 h-5" />
            View Services
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-gray-400 mb-4">Need help with process serving?</p>
          <a 
            href="tel:4056059364"
            className="text-brand-lime hover:text-brand-lime-light font-bold text-xl transition-colors"
          >
            Call (405) 605-9364
          </a>
        </div>
      </div>
    </div>
  );
}
