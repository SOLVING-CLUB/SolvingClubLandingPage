"use client";
import { useState, type ComponentType } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu as MenuIcon, Home, Folder, User, Mail } from 'lucide-react';
import { cn } from '@/app/components/ui/utils';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/app/components/ui/sheet';

type NavItem = {
  label: string;
  path: string;
  icon: ComponentType<{ className?: string }>;
};

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/', icon: Home },
  { label: 'Projects', path: '/projects', icon: Folder },
  { label: 'About us', path: '/about', icon: User },
  { label: 'Contact', path: '/contact', icon: Mail },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const isActivePath = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-background/80 border-b border-border"
      )}
    >
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        {/* Logo - Fixed Top Left */}
        <motion.a 
          href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
              window.scrollTo({ top: 0, behavior: 'auto' });
            }}
          className="fixed top-4 left-8 z-50 text-xl sm:text-2xl font-bold tracking-tight"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          SolvingClub
        </motion.a>
        
        {/* Let's Talk Button - Fixed Top Right */}
        <motion.button
          onClick={() => navigate('/contact')}
          className="fixed top-4 right-8 z-50 px-4 lg:px-6 py-2 sm:py-2.5 rounded-full text-sm lg:text-base border border-primary/80 bg-gradient-to-b from-white/15 via-primary/90 to-primary text-primary-foreground shadow-[inset_0_1px_rgba(255,255,255,0.55)] hover:brightness-110 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Talk
        </motion.button>
        
        {/* Centered Glassmorphism Navbar */}
        <div className={cn("fixed top-4 left-1/2 -translate-x-1/2 z-50")}>
          <nav
            className="flex items-center gap-6 px-4 py-2 rounded-full bg-white/5 border border-white/10 shadow-[0_18px_45px_rgba(0,0,0,0.65)] backdrop-blur-xl"
          >
            {NAV_ITEMS.map((item, index) => {
              const Icon = item.icon;
              const active = isActivePath(item.path);
              const isHovered = hoveredIndex === index && !active;

              return (
                <button
                  key={item.path}
                  type="button"
                  onClick={() => navigate(item.path)}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={cn(
                    'relative flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300',
                    active ? 'text-black' : 'text-muted-foreground/90'
                  )}
                >
                  {/* Moving glossy hover pill (slides smoothly between items) */}
                  {isHovered && (
                    <motion.span
                      layoutId="hover-pill"
                      className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/35 via-white/10 to-white/5 border border-white/25 backdrop-blur-md shadow-[0_14px_35px_rgba(0,0,0,0.55)]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ 
                        layout: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
                        opacity: { duration: 0.2 }
                      }}
                    />
                  )}

                  {/* Active white pill (no animation between tabs) */}
                  {active && (
                    <span className="pointer-events-none absolute inset-0 rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.65)]" />
                  )}

                  <span className="relative flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <motion.a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate('/');
                window.scrollTo({ top: 0, behavior: 'auto' });
              }}
              className="text-xl sm:text-2xl font-bold tracking-tight"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SolvingClub
            </motion.a>

            <button
              className="text-foreground p-2 hover:bg-muted rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Toggle menu"
            >
              <MenuIcon size={24} />
            </button>
          </div>
        </div>

        {/* Side Drawer Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetContent 
            side="right" 
            className="w-[65%] sm:w-[55%] bg-background/95 backdrop-blur-xl border-l border-border/50"
          >
            <SheetHeader className="text-left pb-6 border-b border-border/50">
              <SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
            </SheetHeader>
            
            <nav className="flex flex-col gap-2 mt-8">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const active = isActivePath(item.path);
                return (
                  <motion.button
                    key={item.path}
                    type="button"
                    className={cn(
                      'flex items-center gap-3 text-left px-4 py-4 rounded-xl transition-all',
                      active 
                        ? 'bg-primary/20 text-foreground font-semibold border border-primary/30' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                    )}
                    onClick={() => {
                      navigate(item.path);
                      setIsMobileMenuOpen(false);
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-base">{item.label}</span>
                  </motion.button>
                );
              })}
              
              <motion.button
                type="button"
                className="mt-4 px-6 py-3.5 rounded-xl text-center text-base border border-primary/80 bg-gradient-to-b from-white/15 via-primary/90 to-primary text-primary-foreground shadow-[inset_0_1px_rgba(255,255,255,0.55)] hover:brightness-110 transition-all"
                onClick={() => {
                  navigate('/contact');
                  setIsMobileMenuOpen(false);
                }}
                whileTap={{ scale: 0.98 }}
              >
                Let's Talk
              </motion.button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}