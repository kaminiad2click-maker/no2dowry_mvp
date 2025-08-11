
export const metadata = { title: 'no2dowry', description: 'Matrimony without dowry' };
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900">{children}</body>
    </html>
  );
}
