// apps/web/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <span>© {new Date().getFullYear()} no2dowry — MVP</span>

        <div className="links">
          <a href="/" className="link">Home</a>
          <a href="https://github.com/kaminiad2click-maker/no2dowry_mvp" className="link" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>

      <style jsx>{`
        .foot {
          border-top: 1px solid #eaeaea;
          background: #fff;
        }
        .wrap {
          margin: 0 auto;
          max-width: 1100px;
          padding: 18px 20px;
          display: flex;
          gap: 12px;
          align-items: center;
          justify-content: space-between;
          color: #64748b;
          font-size: 14px;
        }
        .links { display: flex; gap: 12px; }
        .link { color: #475569; text-decoration: none; }
        .link:hover { color: #111827; }
      `}</style>
    </footer>
  );
}
