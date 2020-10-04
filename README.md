## How to run

This app using json-server as a data mock

```bash
  # for development
  npm run dev
  # for production
  npm run prod
```

## Run via docker

Development environment

```bash
$ docker-compose -f docker-compose.dev.yml up -d --build
```

Production environment

```bash
$ docker-compose up --build -d
```