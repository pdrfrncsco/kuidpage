# Guia de Deploy - KuidPage

Este frontend faz build estático com Vite. Em produção, a configuração crítica é a variável `VITE_API_URL`, definida no momento do build.

## Estratégia de API

Há dois cenários suportados.

1. Backend em domínio separado
   Exemplo:
   - frontend: `https://kuid.ndeas.cloud`
   - backend: `https://kuidapi.ndeas.cloud`

   Use:

   ```env
   VITE_API_URL=https://kuidapi.ndeas.cloud
   ```

2. Frontend e backend no mesmo domínio com proxy reverso
   Exemplo:
   - frontend: `https://kuid.ndeas.cloud`
   - Nginx/Traefik faz proxy de `/api/` para o Django

   Use:

   ```env
   VITE_API_URL=
   ```

   Ou omita a variável por completo. Nesse caso, o frontend chamará caminhos relativos como `/api/v1/addresses`.

## Arquivos de ambiente

- Desenvolvimento local: `.env.local`
- Produção: `.env.production`
- Exemplo versionado: `.env.production.example`

Não use `.env.local` em produção.

## Endpoints usados pelo frontend

Com `VITE_API_URL=https://kuidapi.ndeas.cloud`, o frontend monta:

- `https://kuidapi.ndeas.cloud/api/v1/addresses/...`
- `https://kuidapi.ndeas.cloud/api/v1/auth/...`
- `https://kuidapi.ndeas.cloud/api/token/refresh/`

Com `VITE_API_URL` vazio ou omitido em produção, o frontend usa:

- `/api/v1/addresses/...`
- `/api/v1/auth/...`
- `/api/token/refresh/`

## Build local para produção

```bash
cd kuidpage
cp .env.production.example .env.production
npm install
npm run build
```

## Docker

O `Dockerfile` faz build do Vite e serve os arquivos estáticos com Nginx.

Se precisar injetar `VITE_API_URL` no build com Docker, passe a variável durante o build da imagem.

Exemplo:

```bash
docker build --build-arg VITE_API_URL=https://kuidapi.ndeas.cloud -t kuidpage .
```

Se optar por isso, o `Dockerfile` deve consumir esse `ARG`. Se o build for feito fora do Docker, basta usar `.env.production`.

## Nginx

O `nginx.conf` atual serve apenas os arquivos estáticos da SPA. Ele não faz proxy de `/api`.

Isso significa:

- Se usar `VITE_API_URL=https://kuidapi.ndeas.cloud`, a configuração atual é suficiente.
- Se quiser usar URLs relativas `/api/...`, será preciso adicionar proxy reverso no Nginx do ambiente ou no balanceador à frente dele.

## Checklist de produção

- Definir `VITE_API_URL` corretamente antes do build.
- Confirmar que o backend aceita o origin do frontend em CORS, se estiver em domínio separado.
- Confirmar HTTPS nos dois domínios.
- Validar login, refresh token, geração de API key e lookup de KUID após o deploy.

