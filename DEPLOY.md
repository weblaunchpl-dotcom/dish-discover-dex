# Wdrożenie: GitHub → Netlify

## 1. Eksport do GitHuba
W Lovable: **GitHub → Connect to GitHub** (prawy górny róg), a potem **Create Repository**.
Lovable utworzy repo i będzie synchronizować zmiany automatycznie.

## 2. Podpięcie pod Netlify
1. Wejdź na <https://app.netlify.com/> i kliknij **Add new site → Import an existing project**.
2. Wybierz **GitHub** i wskaż utworzone repozytorium.
3. Netlify wykryje plik `netlify.toml` — komenda build (`npm run build`) i katalog publish (`dist`)
   są już skonfigurowane.
4. Kliknij **Deploy site**. Pierwszy build trwa ~2–3 minuty.

## 3. Jak to działa
- `netlify.toml` ustawia zmienną `DEPLOY_TARGET=netlify`.
- `vite.config.ts` wykrywa ją i przełącza nitro na preset **netlify** (zamiast domyślnego Cloudflare).
- Strona działa jako SSR + funkcje serverless Netlify — bez dodatkowej konfiguracji.

## 4. Własna domena (opcjonalnie)
W Netlify: **Domain management → Add a domain** i postępuj zgodnie z instrukcją DNS.
