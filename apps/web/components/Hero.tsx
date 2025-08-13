// apps/web/components/Hero.tsx
export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <h1>Find your match. <span className="thin">Not dowry.</span></h1>
        <p className="sub">
          A simple MVP to demonstrate a dowry-free matrimony experience.
        </p>

        <div className="cta-row">
          <a className="btn primary" href="#try">Try the demo</a>
          <a className="btn ghost" href="https://no2dowry-mvp.onrender.com" target="_blank" rel="noreferrer">
            Open API
          </a>
        </div>
      </div>

      <style jsx>{`
        .hero {
          background: linear-gradient(180deg,#f8fafc 0%, #ffffff 100%);
          padding: 64px 20px;
          border-bottom: 1px solid #eef2f7;
        }
        .wrap {
          margin: 0 auto;
          max-width: 1100px;
          text-align: center;
        }
        h1 {
          margin: 0 0 12px;
          font-size: 38px;
          line-height: 1.15;
          color: #0f172a;
        }
        .thin { font-weight: 300; color:#2563eb; }
        .sub {
          margin: 0 auto 24px;
          max-width: 720px;
          color:#475569;
          font-size: 18px;
        }
        .cta-row {
          display: flex;
          gap: 12px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .btn {
          padding: 12px 16px;
          border-radius: 10px;
          text-decoration: none;
          font-weight: 600;
        }
        .primary { background:#2563eb; color:#fff; }
        .primary:hover { background:#1d4ed8; }
        .ghost { border:1px solid #cbd5e1; color:#0f172a; }
        .ghost:hover { background:#f8fafc; }
      `}</style>
    </section>
  );
}
