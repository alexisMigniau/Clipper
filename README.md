# Clipper

## Prérequis
 - [Docker](https://docs.docker.com/engine/install/debian/#install-using-the-repository)
 - [Docker-compose](https://docs.docker.com/compose/install/#install-compose-on-linux-systems)

## Installation

- Copier le fichier .env.example en .env et adapter les valeurs si besoin

- Lancement de l'application : 

```bash
docker-compose up -d
```

- Afficher logs de l'API :

```bash
docker-compose logs -f --tail 20 api
```

- Afficher logs de l'application :

```bash
docker-compose logs -f --tail 20 app
```

- Stopper tous les conteneurs et supprimes les volumes associés

```bash
docker-compose down -v
```

## Accès au services

Accès par défaut :

- API : [localhost:2000](http://localhost:2000/)
- Application : [localhost:2000](http://localhost:3000/)
- PhpMyAdmin : [localhost:4000](http://locclipperalhost:4000/)
- MySQL : [localhost:5000](http://localhost:5000/)