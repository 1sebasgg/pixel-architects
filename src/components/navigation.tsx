import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollClick = (hash?: string) => {
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "mix-blend-normal bg-paper/80 backdrop-blur-md" : "mix-blend-difference"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 py-4 md:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
        <div
          className={`text-sm font-semibold tracking-[0.3em] uppercase shrink-0 ${
            scrolled ? "text-ink" : "text-paper"
          }`}
        >
          <Link to="/" hash="" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            Midgard
          </Link>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 md:gap-12">
          {[
            ["Proyectos", "proyectos"],
            ["Estudio", "estudio"],
            ["Contacto", "contacto"],
          ].map(([label, href]) => (
            <Link
              to="/"
              key={label}
              onClick={() => handleScrollClick(href)}
              className={`text-[11px] font-medium tracking-[0.2em] uppercase transition-opacity hover:opacity-60 ${
                scrolled ? "text-ink" : "text-paper"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
