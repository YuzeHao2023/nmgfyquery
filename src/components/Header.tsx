import React, { useState } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import { HospitalEmblem } from './HospitalEmblem';

interface HeaderProps {
  onGoHome: () => void;
}

const OFFICIAL_SITE_URL = 'https://www.nmgfy.com';

export const Header: React.FC<HeaderProps> = ({ onGoHome }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '医院首页', href: OFFICIAL_SITE_URL, external: true, active: false },
    { label: '医院概况', href: OFFICIAL_SITE_URL, external: true, active: false },
    { label: '科室介绍', href: OFFICIAL_SITE_URL, external: true, active: false },
    { label: '访问专家库', href: '#top', external: false, active: true },
    { label: '就医指南', href: OFFICIAL_SITE_URL, external: true, active: false },
  ];

  const handleRegistryClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onGoHome();
  };

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 sm:h-20 flex items-center justify-between gap-4 lg:gap-8">
          {/* Zone 1: Brand wordmark + official crest */}
          <a
            href={OFFICIAL_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 sm:gap-3 whitespace-nowrap shrink-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C3D7A] rounded"
            title="前往内蒙古医科大学附属医院官网 (nmgfy.com)"
          >
            <HospitalEmblem className="w-10 h-10 sm:w-12 sm:h-12 shrink-0" />
            <div className="flex flex-col leading-tight">
              <span className="text-base sm:text-lg font-bold tracking-wide text-[#1C3D7A] group-hover:text-[#C41E24] transition-colors">
                内蒙古医科大学附属医院
              </span>
              <span className="hidden sm:block text-[10px] tracking-wider text-slate-500 font-medium">
                The Affiliated Hospital of Inner Mongolia Medical University
              </span>
            </div>
          </a>

          {/* Zone 2: Concise single-line navigation links */}
          <nav
            aria-label="主导航"
            className="hidden lg:flex items-center gap-7 text-[15px] font-medium text-slate-700"
          >
            {navLinks.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 whitespace-nowrap shrink-0 hover:text-[#C41E24] transition-colors relative"
                >
                  {item.label}
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleRegistryClick}
                  className="py-2 whitespace-nowrap shrink-0 text-[#C41E24] font-semibold relative after:content-[''] after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-[#C41E24]"
                >
                  {item.label}
                </a>
              )
            )}
          </nav>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 shrink-0 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex items-center justify-center w-11 h-11 rounded border border-slate-300 text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C3D7A]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? '关闭导航菜单' : '打开导航菜单'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white">
          <nav aria-label="移动端导航" className="px-4 py-3 flex flex-col divide-y divide-slate-100">
            {navLinks.map((item) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-3 text-sm font-medium text-slate-700 hover:text-[#C41E24] flex items-center justify-between min-h-[44px]"
                >
                  <span>{item.label}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                </a>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleRegistryClick}
                  className="py-3 text-sm font-semibold text-[#C41E24] flex items-center justify-between min-h-[44px]"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-slate-400 font-normal">当前栏目</span>
                </a>
              )
            )}
            <div className="pt-3 pb-1">
              <a
                href={OFFICIAL_SITE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-[#1C3D7A] hover:bg-[#152E5E] rounded min-h-[44px]"
              >
                <span>访问医院官方网站 (nmgfy.com)</span>
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
