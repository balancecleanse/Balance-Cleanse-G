rm -rf .next node_modules package-lock.json
npm cache clean --force
npm install
npx shadcn@latest init
npx shadcn@latest add card input select slider
npm install
