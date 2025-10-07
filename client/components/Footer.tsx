export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/70 bg-[hsl(var(--highlight-section))]">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-foreground/80">© Mathedustats {year}</p>
        <div className="flex items-center gap-4 text-foreground/70">
          <a href="#" aria-label="Instagram" className="hover:text-[hsl(var(--primary))]">Instagram</a>
          <a href="#" aria-label="Twitter" className="hover:text-[hsl(var(--primary))]">Twitter</a>
          <a href="#" aria-label="YouTube" className="hover:text-[hsl(var(--primary))]">YouTube</a>
        </div>
      </div>
    </footer>
  );
}
