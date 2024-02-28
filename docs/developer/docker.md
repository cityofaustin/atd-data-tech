# Docker

We use [Docker](http://docker.com) to manage runtime environments. Our Docker Hub is [https://hub.docker.com/u/atddocker](https://hub.docker.com/u/atddocker).

## Useful Commands

Start docker engine

```text
sudo systemctl start docker
```

View all images

```text
sudo docker images
```

Show running containers

```text
sudo docker ps
```

Show all containers

```text
sudo docker ps -a
```

Build image from Dockerfile

```text
docker build --no-cache -t my-docker-image-name .
```

Run docker container in interactive mode and mount local volume inside container:

```text
sudo docker run -it -v /home/liangz:/app --rm -w /app/transportation-data-deploy atddocker/tdp bash
```

Start docker with [docker-compose](https://docs.docker.com/compose/):

```text
sudo `which  docker-compose` restart
```

## Update Docker Image on Docker Hub

1. Build the new image and tag with a new version number. Suppose your image name is `atddocker/my-image`:

```bash
docker build --no-cache -t atddocker/my-image:2.0.1 .
```

1. Push to Docker Hub:

```bash
docker push atddocker/my-image
```

