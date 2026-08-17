// ─── Footer ───────────────────────────────────────────────────────────────────
// Server Component — dark bookend footer (#131110 background).
// The only dark section on the page. Provides a grounding baseline.
// ─────────────────────────────────────────────────────────────────────────────
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-root" aria-label="Site footer">
      <div className="container footer-inner">
        <p className="footer-left">
          Aditi Prajapati &nbsp;—&nbsp; {currentYear}
        </p>
        <p className="footer-right">
          Designed &amp; built with intention
        </p>
      </div>
    </footer>
  );
}
