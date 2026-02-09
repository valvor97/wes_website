import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const start = window.innerHeight * 0.3;
      const end = window.innerHeight * 0.6;
      const current = window.scrollY;

      if (current <= start) {
        setScrollProgress(0);
      } else if (current >= end) {
        setScrollProgress(1);
      } else {
        setScrollProgress((current - start) / (end - start));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    
    // "Get In Touch" navigates to /contact page
    if (sectionId === 'contact') {
      navigate('/contact');
      return;
    }

    // If we're not on the home page, navigate home first
    if (location.pathname !== '/') {
      navigate('/');
      return;
    }
    
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home', side: 'left' },
    { id: 'videos', label: 'Portfolio', side: 'left' },
    { id: 'about', label: 'Biography', side: 'right' },
    { id: 'contact', label: 'Get In Touch', side: 'right' },
  ];

  const leftLinks = navLinks.filter(link => link.side === 'left');
  const rightLinks = navLinks.filter(link => link.side === 'right');

  const isVisible = scrollProgress > 0;

  return (
    <>
      <nav 
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          opacity: scrollProgress,
          transform: `translateY(${(1 - scrollProgress) * -20}px)`,
          pointerEvents: isVisible ? 'auto' : 'none',
          backgroundColor: `rgba(0, 0, 0, ${scrollProgress * 0.9})`,
          backdropFilter: isVisible ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: isVisible ? 'blur(12px)' : 'none',
          borderBottom: isVisible ? '1px solid rgba(38, 38, 38, ' + scrollProgress + ')' : 'none',
          transition: 'border-bottom 0.2s',
        }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-center h-20 gap-0">
            
            {/* Left Nav Links - Desktop */}
            <div className="hidden md:flex items-center gap-4 mr-6">
              {leftLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-xs uppercase tracking-widest text-neutral-400 hover:text-[#bf953f] transition-colors duration-200 cursor-pointer font-mono focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf953f] focus-visible:ring-offset-2 focus-visible:ring-offset-black py-2 px-2 min-h-[44px] flex items-center whitespace-nowrap"
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Center Brand */}
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold text-gradient-gold font-syne cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf953f] focus-visible:ring-offset-2 focus-visible:ring-offset-black px-3 py-2 min-h-[44px] flex items-center whitespace-nowrap"
              aria-label="Wesley Anderson - Go to home"
            >
              WESLEY ANDERSON
            </button>

            {/* Right Nav Links - Desktop */}
            <div className="hidden md:flex items-center gap-4 ml-6">
              {rightLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-xs uppercase tracking-widest text-neutral-400 hover:text-[#bf953f] transition-colors duration-200 cursor-pointer font-mono focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf953f] focus-visible:ring-offset-2 focus-visible:ring-offset-black py-2 px-2 min-h-[44px] flex items-center whitespace-nowrap"
                  aria-label={`Navigate to ${link.label}`}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden absolute right-6 w-12 h-12 min-w-[44px] min-h-[44px] flex items-center justify-center text-neutral-400 hover:text-[#bf953f] transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf953f] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <div className="flex flex-col items-center justify-center h-full gap-8 px-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-2xl uppercase tracking-widest text-neutral-400 hover:text-[#bf953f] transition-colors duration-200 cursor-pointer font-mono focus:outline-none focus-visible:ring-2 focus-visible:ring-[#bf953f] focus-visible:ring-offset-2 focus-visible:ring-offset-black py-3 px-6 min-h-[44px] flex items-center"
                aria-label={`Navigate to ${link.label}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
