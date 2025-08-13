// apps/web/app/page.tsx
import Hero from '../components/Hero';

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="try" className="section">
        <div className="wrap">
          <h2>Try the demo</h2>
          <p className="muted">
            This page is your playground. Hook it up to your auth/profile calls next.
          </p>

          <div className="card">
            <p>
              API base URL:&nbsp;
              <code>{process.env.NEXT_PUBLIC_API}</code>
            </p>
            <p style={{marginTop: 8}}>
              Update <code>.env.local</code> if needed and redeploy.
            </p>
          </div>
        </div>
      </section>

      <style jsx>{`
        .section {
          padding: 40px 20px 64px;
          background: #fff;
        }
        .wrap {
          margin: 0 auto;
          max-width: 1100px;
        }
        h2 { margin: 0 0 8px; font-size: 28px; }
        .muted { color:#475569; margin:0 0 18px; }
        .card {
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 16px;
          background: #f9fafb;
        }
        code {
          background:#eef2ff;
          color:#222;
          padding: 2px 6px;
          border-radius: 6px;
          font-family: ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
          font-size: 90%;
        }
      `}</style>
    </>
  );
}
