# Guia de Deploy - Landing Page (KUID)

Este guia descreve como preparar e implantar a landing page do KUID em produção.

## Pré-requisitos

- Docker e Docker Compose instalados.
- Domínio configurado: `kuid.ndeas.cloud`.

## Estrutura

O projeto utiliza:
- **Vite + React**: Para construção da interface.
- **Nginx**: Para servir os arquivos estáticos de forma performática.
- **Docker**: Para containerização.

## Configuração

1. **Arquivos de Configuração**:
   - `Dockerfile`: Define a construção da imagem (build do React -> imagem Nginx).
   - `nginx.conf`: Configuração do servidor web (gzip, cache, rotas).
   - `docker-compose.yml`: Orquestração do container.

2. **Variáveis de Ambiente**:
   O build é estático, então variáveis de ambiente devem ser definidas no momento do build (no `Dockerfile` ou via argumentos de build), mas para esta landing page simples, não há dependências críticas de env vars em tempo de execução.

## Deploy com Docker Compose

Para iniciar a aplicação em produção:

1. Navegue até o diretório `kuidpage`:
   ```bash
   cd kuidpage
   ```

2. Construa e inicie o container:
   ```bash
   docker-compose up -d --build
   ```

A aplicação estará disponível na porta 8080 do host (ou na porta definida no `docker-compose.yml`).

## Configuração de Domínio e SSL

Para produção com HTTPS (`https://kuid.ndeas.cloud`), recomenda-se usar um proxy reverso (como Nginx no host ou Traefik) para gerenciar os certificados SSL e encaminhar o tráfego para o container.

Exemplo de configuração de proxy reverso (Nginx no host):

```nginx
server {
    listen 80;
    server_name kuid.ndeas.cloud;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name kuid.ndeas.cloud;

    ssl_certificate /caminho/para/certificado.pem;
    ssl_certificate_key /caminho/para/chave.pem;


## Opção 2: Deploy Nativo com Nginx (Sem Docker)

Se preferir rodar diretamente no servidor (bare metal/VM) com Nginx instalado:

1.  **Build da Aplicação**:
    No seu ambiente local ou CI:
    ```bash
    npm install
    npm run build
    ```
    Isso gerará a pasta `dist`.

2.  **Transferência de Arquivos**:
    Copie o conteúdo da pasta `dist` para o servidor (ex: `/var/www/kukuid/kuidpage/dist`).

3.  **Configuração do Nginx**:
    Copie o arquivo `kuidapp.conf` para `/etc/nginx/sites-available/kuidapp.conf`.
    
    ```bash
    # No servidor:
    sudo cp kuidapp.conf /etc/nginx/sites-available/
    sudo ln -s /etc/nginx/sites-available/kuidapp.conf /etc/nginx/sites-enabled/
    sudo nginx -t
    sudo systemctl reload nginx
    ```

    *Nota: O arquivo `kuidapp.conf` já inclui regras de cache otimizadas e redirecionamento HTTPS para Cloudflare.*

