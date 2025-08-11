# no2dowry.com – One-click setup (PowerShell)
Set-Location -Path $PSScriptRoot
if (!(Test-Path ".env") -and (Test-Path ".env.example")) { Copy-Item ".env.example" ".env" }
docker compose up -d
npx prisma generate --schema .\prisma\schema.prisma
npx prisma migrate dev --name init --schema .\prisma\schema.prisma

Push-Location apps/api
if (!(Test-Path ".env") -and (Test-Path ".env.example")) { Copy-Item ".env.example" ".env" }
if (!(Test-Path "node_modules")) { npm i }
npx prisma generate --schema ..\..\prisma\schema.prisma
Start-Process cmd -ArgumentList '/k','npm run start:dev'
Pop-Location

Push-Location apps/web
if (!(Test-Path "node_modules")) { npm i }
if (!(Test-Path ".env.local")) { 'NEXT_PUBLIC_API_URL=http://127.0.0.1:4000' | Out-File -Encoding ascii ".env.local" }
Start-Process cmd -ArgumentList '/k','npm run dev'
Pop-Location

Write-Host "Open http://localhost:3000 (or 3001). API http://localhost:4000"
