import React, { useState, useEffect, useRef } from 'react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      isMobileMenuOpen &&
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target as Node) &&
      !(event.target as HTMLElement).closest('.mobile-menu-toggle')
    ) {
      closeMobileMenu();
    }
  };

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className="relative w-full bg-gradient-to-br from-black via-[#001a33] to-[#003366] border-b border-white/10 z-[2000] overflow-hidden"
      id="header"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0 -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(0,102,255,0.05)_1px,transparent_1px)] bg-[length:30px_30px] animate-[headerDrift_25s_linear_infinite]"
        ></div>
      </div>
      {/* Floating Particles */}
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-gradient-to-br from-[#0066ff] to-[#00ff88] rounded-full opacity-40 animate-[particleDrift_12s_ease-in-out_infinite] sm:w-1.5 sm:h-1.5"
          style={{
            left: `${[10, 30, 60, 80, 90][i]}%`,
            top: `${[20, 60, 30, 70, 40][i]}%`,
            animationDelay: `${i * 2}s`,
          }}
        ></div>
      ))}
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-0.5 bg-gradient-to-r from-transparent via-[#0066ff]/60 to-transparent animate-[glowPulse_3s_ease-in-out_infinite] sm:w-64"></div>

      <div className="relative z-[2000] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between py-4 sm:py-6 lg:py-8 gap-4 header-content">
          {/* Logo Section */}
          <div className="flex items-center gap-3 animate-[logoSlideIn_0.8s_ease-out]">
            <img
              src="https://storage.googleapis.com/msgsndr/PwZCE4paYkzqicpqJecc/media/687f8af563e8e90600e5c3d0.png"
              alt="BestCallerAI Logo"
              className="h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24 object-contain brightness-110 contrast-110 hover:brightness-125 hover:contrast-120 hover:scale-105 transition-all duration-300"
              loading="eager"
            />
            <div
              className="text-lg sm:text-xl lg:text-2xl font-black bg-gradient-to-br from-[#0066ff] via-[#00ccff] via-[#00ff88] via-[#ffd93d] to-[#ff6b6b] bg-clip-text text-transparent bg-[length:200%_auto] animate-[logoShimmer_3s_linear_infinite]"
            >
              BestCallerAI
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden lg:flex items-center gap-3 animate-[navSlideIn_0.8s_ease-out_0.1s_backwards]">
            {['Features', 'Pricing', 'Solutions', 'Results'].map((item, index) => (
              <a
                key={item}
                href={`#custom-code-${
                  ['HR10VoP8sS', 'hyHEAdqwag', 'ynoR-HM-zV', 'GBrzXC7JBw'][index]
                }`}
                className="relative text-white text-sm lg:text-base font-semibold px-3 py-2 rounded-xl hover:text-[#00ccff] hover:bg-[#0066ff]/10 hover:-translate-y-0.5 transition-all duration-300 group"
                onClick={(e) => handleNavClick(e, `#custom-code-${
                  ['HR10VoP8sS', 'hyHEAdqwag', 'ynoR-HM-zV', 'GBrzXC7JBw'][index]
                }`)}
              >
                {item}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#0066ff] to-[#00ccff] transition-all duration-300 group-hover:w-4/5"></span>
              </a>
            ))}
          </nav>

          {/* Desktop Navigation Buttons */}
          <div className="hidden lg:flex items-center gap-3 animate-[buttonsSlideIn_0.8s_ease-out_0.2s_backwards]">
            <a
              href="#custom-code-hyHEAdqwag"
              className="inline-flex items-center gap-1 px-3 py-2 text-sm font-bold text-white bg-gradient-to-br from-[#0066ff] to-[#00ccff] rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:scale-102 transition-all duration-300 relative overflow-hidden group"
              onClick={(e) => handleNavClick(e, '#custom-code-hyHEAdqwag')}
            >
              <span className="text-base">🚀</span>
              Start Your Free Trial
              <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-[left] duration-500 group-hover:left-[100%]"></span>
            </a>
            <a
              href="https://calendly.com/bestcallerai-support/30min?back=1&month=2025-07"
              className="inline-flex items-center gap-1 px-3 py-2 text-sm font-bold text-white bg-white/5 backdrop-blur-lg border-2 border-[#0066ff]/30 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:scale-102 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group"
              onClick={(e) => handleNavClick(e, '#custom-code-hyHEAdqwag')}
            >
              <span className="text-base">📅</span>
              Book a Free Demo
              <span className="absolute inset-[-2px] rounded-full bg-gradient-to-br from-[#0066ff] via-[#00ccff] via-[#00ff88] via-[#ffd93d] to-[#ff6b6b] opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor' }}></span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-white/10 transition-all duration-300 mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <div className={`w-6 h-0.5 bg-gradient-to-br from-[#0066ff] to-[#00ccff] rounded transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-x-1.5 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gradient-to-br from-[#0066ff] to-[#00ccff] rounded transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gradient-to-br from-[#0066ff] to-[#00ccff] rounded transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 translate-x-1.5 -translate-y-1.5' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          id="mobileMenu"
          className={`lg:hidden fixed top-[68px] left-0 w-full bg-gradient-to-br from-black/95 via-[#001a33]/95 to-[#003366]/95 backdrop-blur-lg border-t border-white/10 py-8 px-4 transition-all duration-300 ease-in-out z-[3000] ${isMobileMenuOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'}`}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
            onClick={closeMobileMenu}
            aria-label="Close mobile menu"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>

          <div className="flex flex-col gap-5 mb-8 mt-8 max-w-md mx-auto">
            {['Features', 'Pricing', 'Solutions', 'Results'].map((item, index) => (
              <a
                key={item}
                href={`#custom-code-${
                  ['HR10VoP8sS', 'hyHEAdqwag', 'ynoR-HM-zV', 'GBrzXC7JBw'][index]
                }`}
                className="text-white text-lg font-semibold text-center py-4 px-5 rounded-xl bg-white/5 backdrop-blur-lg border border-[#0066ff]/20 hover:bg-[#0066ff]/10 hover:border-[#0066ff]/40 hover:text-[#00ccff] transition-all duration-300"
                onClick={(e) => handleNavClick(e, `#custom-code-${
                  ['HR10VoP8sS', 'hyHEAdqwag', 'ynoR-HM-zV', 'GBrzXC7JBw'][index]
                }`)}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-4 items-center max-w-md mx-auto">
            <a
              href="#custom-code-hyHEAdqwag"
              className="inline-flex items-center justify-center gap-1 w-full px-8 py-4 text-base font-bold text-white bg-gradient-to-br from-[#0066ff] to-[#00ccff] rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:scale-102 transition-all duration-300 relative overflow-hidden group"
              onClick={(e) => handleNavClick(e, '#custom-code-hyHEAdqwag')}
            >
              <span className="text-lg">🚀</span>
              Start Your Free Trial
              <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-[left] duration-500 group-hover:left-[100%]"></span>
            </a>
            <a
              href="https://calendly.com/bestcallerai-support/30min?back=1&month=2025-07"
              className="inline-flex items-center justify-center gap-1 w-full px-8 py-4 text-base font-bold text-white bg-white/5 backdrop-blur-lg border-2 border-[#0066ff]/30 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:scale-102 hover:bg-white/10 transition-all duration-300 relative overflow-hidden group"
              onClick={(e) => handleNavClick(e, '#custom-code-hyHEAdqwag')}
            >
              <span className="text-lg">📅</span>
              Book a Free Demo
              <span className="absolute inset-[-2px] rounded-full bg-gradient-to-br from-[#0066ff] via-[#00ccff] to-[#ff6b6b] opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor' }}></span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;