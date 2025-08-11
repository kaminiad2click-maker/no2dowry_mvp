@echo off
REM no2dowry.com – One-click setup (Windows)
setlocal enabledelayedexpansion
cd /d %~dp0

if not exist .env ( if exist .env.example (copy .env.example .env >nul) )

echo Starting Postgres & Redis...
docker compose up -d
if errorlevel 1 (
  echo Docker failed. Is Docker Desktop running?
  pause
  exit /b 1
)

echo Prisma generate + migrate...
call npx prisma generate --schema .\prisma\schema.prisma
if errorlevel 1 ( echo prisma generate failed & pause & exit /b 1 )
call npx prisma migrate dev --name init --schema .\prisma\schema.prisma
if errorlevel 1 ( echo prisma migrate failed & pause & exit /b 1 )

echo Start API...
cd apps\api
if not exist .env ( if exist .env.example (copy .env.example .env >nul) )
if not exist node_modules ( npm i )
call npx prisma generate --schema ..\..\prisma\schema.prisma
start cmd /k "npm run start:dev"
cd ..\..

echo Start Web...
cd apps\web
if not exist node_modules ( npm i )
if not exist .env.local ( echo NEXT_PUBLIC_API_URL=http://127.0.0.1:4000 > .env.local )
start cmd /k "npm run dev"
cd ..\..

echo ------------------------------------
echo Open http://localhost:3000 (or 3001)
echo API at http://localhost:4000
echo ------------------------------------
pause
