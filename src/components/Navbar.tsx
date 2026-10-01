import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export type PageRoute = 'home' | 'services' | 'projects' | 'about' | 'insights' | 'contact';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 36);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems: { id: PageRoute; label: string }[] = [
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'insights', label: 'Insights' },
    { id: 'contact', label: 'Contact' },
  ];

  const isTransparentHero = currentPage === 'home' && !isScrolled && !mobileMenuOpen;

  const handleNavClick = (page: PageRoute) => {
    setMobileMenuOpen(false);
    onNavigate(page);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
          isTransparentHero
            ? 'bg-transparent border-b border-white/15 text-white'
            : 'bg-[#111315]/95 backdrop-blur-md border-b border-white/10 text-white shadow-sm'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <button
            type="button"
            onClick={() => handleNavClick('home')}
            className="font-display text-xl md:text-2xl font-bold tracking-tight text-white hover:opacity-90 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#38BDF8] whitespace-nowrap shrink-0 cursor-pointer"
          >
            AVI MEP
          </button>

          {/* Zone 2: 5 clean text navigation links */}
          <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-2 text-sm font-medium transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#38BDF8] ${
                    isActive ? 'text-white' : 'text-white/75 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[2px] transition-transform duration-200 origin-left ${
                      isActive ? 'scale-x-100 bg-[#38BDF8]' : 'scale-x-0 bg-white/60'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs md:text-sm font-semibold text-white bg-[#152EAF] hover:bg-[#1D3BD2] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#38BDF8]"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="md:hidden w-11 h-11 flex items-center justify-center text-white border border-white/15 hover:border-white/40 transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-[#111315] text-white pt-20 px-6 pb-8 flex flex-col justify-between md:hidden overflow-y-auto bg-tech-grid-dark"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="flex flex-col divide-y divide-white/10 border-t border-b border-white/10 mt-4">
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className={`py-5 flex items-center justify-between text-left font-display text-2xl font-bold tracking-tight ${
                currentPage === 'home' ? 'text-[#38BDF8]' : 'text-white'
              }`}
            >
              <span>Home</span>
              <span className="font-mono-tech text-xs text-white/40">00</span>
            </button>
            {navItems.map((item, idx) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`py-5 flex items-center justify-between text-left font-display text-2xl font-bold tracking-tight ${
                  currentPage === item.id ? 'text-[#38BDF8]' : 'text-white'
                }`}
              >
                <span>{item.label}</span>
                <span className="font-mono-tech text-xs text-white/40">0{idx + 1}</span>
              </button>
            ))}
          </div>

          <div className="space-y-6 pt-8">
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="w-full py-4 px-6 bg-[#152EAF] hover:bg-[#1D3BD2] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <span>Discuss Your Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-1 gap-4 pt-4 border-t border-white/10 text-xs text-white/70">
              <div>
                <p className="font-mono-tech text-white/40 mb-1">NEW YORK OFFICE</p>
                <p>99 Wall Street #631, New York, NY 10005</p>
              </div>
              <div>
                <p className="font-mono-tech text-white/40 mb-1">NEW JERSEY OFFICE</p>
                <p>1600 US-130, North Brunswick, NJ 08902</p>
              </div>
              <div className="flex items-center justify-between pt-2 font-mono-tech text-white">
                <a href="mailto:avi@avimep.com" className="hover:text-[#38BDF8]">
                  avi@avimep.com
                </a>
                <a href="tel:+16467645273" className="hover:text-[#38BDF8]">
                  +1 (646)-764-5273
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
