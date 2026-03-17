'use client';

import { useTranslation } from '@/i18n/useTranslation';
import { Fuel, Github, Mail } from 'lucide-react';

export default function Footer() {
  const t = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-300 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-blue-600 rounded-lg">
                <Fuel className="text-white" size={20} />
              </div>
              <span className="font-bold text-white text-lg">Fuel Pass QR</span>
            </div>
            <p className="text-sm text-gray-400">
              Your guide to creating Fuel Pass QR codes efficiently.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#guide-section" className="hover:text-blue-400 transition">
                  {t.nav.guide}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:support@fuelpasses.lk" className="hover:text-blue-400 transition">
                  support@fuelpasses.lk
                </a>
              </li>
              <li>Official helpline available 24/7</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-2 hover:bg-blue-600 rounded-full transition"
                title="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="p-2 hover:bg-blue-600 rounded-full transition"
                title="Twitter"
              >
                <svg
                  fill="currentColor"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 9 5 9 5" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
          <p>{t.footer.copyright}</p>
          <p>{t.footer.developer}</p>
        </div>
      </div>
    </footer>
  );
}
