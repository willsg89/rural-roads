
npm install
npm run build
npm install -g firebase-tools
firebase login
# test
npx firebase hosting:channel:deploy preview_farm
# prod
npx firebase deploy --only hosting