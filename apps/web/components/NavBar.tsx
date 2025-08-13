// apps/web/components/NavBar.tsx
export default function NavBar() {
  return (
    <header className="nav">
      <nav className="nav-inner">
        <a className="brand" href="/">no2dowry</a>

        <div className="links">
          <a href="/" className="link">Home</a>
          <a href="/api" className="link">API</a>
          <a
            href="https://no2dowry-mvp.onrender.com"
            className="cta"
            target="_blank"
            rel="noreferrer"
          >
            Backend
          </a>
        </div>
      </nav>

      <style jsx>{`
        .nav {
          position: sticky;
          top: 0;
          background: #fff;
          border-bottom: 1px solid #eaeaea;
          z-index: 20;
        }
        .nav-inner {
          margin: 0 auto;
          max-width: 1100px;
          padding: 14px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .brand {
          font-weight: 700;
          text-decoration: none;
          color: #111827;
          font-size: 20px;
        }
        .links {
          display: flex;
          gap: 14px;
        }
        .link {
          color: #374151;
          text-decoration: none;
        }
        .link:hover {
          color: #111827;
        }
        .cta {
          background: #2563eb;
          color: #fff;
          padding: 8px 12px;
          border-radius: 8px;
          text-decoration: none;
        }
        .cta:hover { background: #1d4ed8; }
      `}</style>
    </header>
  );
}
