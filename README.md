# no2dowry.com — Clean MVP Starter (Fixed)
Run locally with one click. Then we’ll deploy to app.no2dowry.com / api.no2dowry.com.

## One‑click (Windows)
1) Install: Docker Desktop (running) + Node.js 18+
2) Unzip this folder somewhere like `C:\no2dowry_mvp\`
3) Double‑click: `windows_full_auto.bat`
4) Open: http://localhost:3000 (or 3001)

## Manual run (fallback)
cd C:\no2dowry_mvp
docker compose up -d
npx prisma generate --schema .\prisma\schema.prisma
npx prisma migrate dev --name init --schema .\prisma\schema.prisma

cd apps\api
copy .env.example .env
npm i
npx prisma generate --schema ..\..\prisma\schema.prisma
npm run start:dev

:: New CMD
cd C:\no2dowry_mvp\apps\web
npm i
npm run dev

API health: http://localhost:4000/health
