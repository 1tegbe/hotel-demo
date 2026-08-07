import React from "react";

const LOGO_SRC =
  "data:image/png;base64,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";

export default function DusselFooter() {
  const year = new Date().getFullYear();

  return (<div>
    
    <footer className="bg-black text-neutral-300 border-b border-gray-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="flex flex-col items-start gap-4 col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="bg-white rounded-md p-2 w-40">
              <img
                src={LOGO_SRC}
                alt="Dussel Hotels"
                className="w-full h-auto object-contain"
              />
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Redefining Hospitality
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">Rooms & Suites</a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">Amenities</a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">Book Now</a>
              </li>
              <li>
                <a href="#" className="hover:text-amber-500 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>MCC Uratta Road, near ABC Transport Workshop, Owerri, Imo State</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-amber-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+2349134764393" className="hover:text-amber-500 transition-colors">
                  0913 476 4393
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-wide uppercase mb-4">
              Follow Us
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 10-11.5 9.87v-6.98H7.9V12h2.6V9.8c0-2.57 1.53-3.99 3.87-3.99 1.12 0 2.3.2 2.3.2v2.53h-1.3c-1.28 0-1.68.8-1.68 1.62V12h2.86l-.46 2.89h-2.4v6.98A10 10 0 0022 12z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.97.24 2.43.4a4.9 4.9 0 011.77 1.15 4.9 4.9 0 011.15 1.77c.16.46.35 1.26.4 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.97-.4 2.43a4.9 4.9 0 01-1.15 1.77 4.9 4.9 0 01-1.77 1.15c-.46.16-1.26.35-2.43.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.97-.24-2.43-.4a4.9 4.9 0 01-1.77-1.15 4.9 4.9 0 01-1.15-1.77c-.16-.46-.35-1.26-.4-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.97.4-2.43a4.9 4.9 0 011.15-1.77A4.9 4.9 0 015.59 1.8c.46-.16 1.26-.35 2.43-.4C9.29 1.34 9.67 1.33 12 1.33V2.2zm0 1.62c-3.17 0-3.55.01-4.8.07-.95.04-1.47.2-1.81.34-.46.18-.78.39-1.12.73-.34.34-.55.66-.73 1.12-.14.34-.3.86-.34 1.81-.06 1.25-.07 1.63-.07 4.8s.01 3.55.07 4.8c.04.95.2 1.47.34 1.81.18.46.39.78.73 1.12.34.34.66.55 1.12.73.34.14.86.3 1.81.34 1.25.06 1.63.07 4.8.07s3.55-.01 4.8-.07c.95-.04 1.47-.2 1.81-.34.46-.18.78-.39 1.12-.73.34-.34.55-.66.73-1.12.14-.34.3-.86.34-1.81.06-1.25.07-1.63.07-4.8s-.01-3.55-.07-4.8c-.04-.95-.2-1.47-.34-1.81a3.01 3.01 0 00-.73-1.12 3.01 3.01 0 00-1.12-.73c-.34-.14-.86-.3-1.81-.34-1.25-.06-1.63-.07-4.8-.07z" />
                  <circle cx="12" cy="12" r="3.2" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center hover:border-amber-500 hover:text-amber-500 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 00-7 3.7A11.6 11.6 0 013 4.9a4.1 4.1 0 001.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4a4.1 4.1 0 01-1.9.1c.5 1.6 2 2.8 3.8 2.8A8.3 8.3 0 012 18.6a11.6 11.6 0 006.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-neutral-800 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-neutral-500 text-center sm:text-left">
            © {year} Dussel Hotels. All rights reserved.
          </p>
          <p className="text-xs text-neutral-500">
            Owerri, Imo State, Nigeria
          </p>
        </div>
      </div>
    </footer></div>
  );
}