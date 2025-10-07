import { NavLink, Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Beranda", to: "/" },
  { label: "Modul Ajar", to: "/modul-ajar" },
  { label: "LKPD", to: "/lkpd" },
  { label: "Media Pembelajaran", to: "/media-pembelajaran" },
];

export default function Header() {
  const location = useLocation();
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/70 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="font-extrabold text-xl tracking-tight text-[hsl(var(--primary))]">
          Mathedustats
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "transition-colors hover:text-[hsl(var(--primary))]",
                  isActive || location.pathname === item.to
                    ? "text-[hsl(var(--primary))]"
                    : "text-foreground/80",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
