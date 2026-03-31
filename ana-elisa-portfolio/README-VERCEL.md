Deploy notes for Vercel

This project is a Create React App (CRA) using `react-scripts`. To deploy on Vercel:

1. Connect the repository to Vercel (or use `vercel` CLI in the project folder).
2. Ensure the root is the `ana-elisa-portfolio` folder (the folder that contains `package.json`).
3. Vercel will run `npm run build` (configured in `vercel.json` to use `build` as output).

Notes about images
- Some images were missing and were replaced with SVG placeholders in `public/images/` (moodboard-01.svg, croquis-01.svg, look-01.svg, look-02.svg, certificado-01.svg, certificado-02.svg, hero.svg).
- Replace these placeholder files with your final JPG/PNG/SVG assets as needed before publishing.

Common issues
- If you previously had image imports that pointed to non-existent files, Vercel build would fail. This should be resolved by the placeholders.
- If you have environment-specific code or APIs, make sure to add Vercel environment variables in the dashboard.

If you want, I can also:
This repository now includes a GitHub Actions workflow that will automatically build and deploy to Vercel on pushes to `main` or `master`.

CI & Deploy notes
- Workflow path: `.github/workflows/ci-deploy-vercel.yml` — it will run `npm ci`, `npm run build`, upload the build as an artifact and deploy using the Vercel CLI.
- The deploy step requires a `VERCEL_TOKEN` stored in your GitHub repository secrets. Create a Personal Token in Vercel (Account > Tokens) and add it to your GitHub repo: Settings > Secrets and variables > Actions > New repository secret.

Optional: if you want to lock deployment to a specific Vercel Project/Team, you can set the environment variables `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` in the workflow or as repository secrets and use them with the vercel CLI. The basic workflow provided uses the token and will deploy the `./build` directory to the account associated with the token.

To deploy manually with the CLI (local):

```bash
npm install -g vercel
vercel --prod --confirm --token $VERCEL_TOKEN ./build
```

Remember to replace placeholder images in `public/images/` with your final assets before publishing the final site.

