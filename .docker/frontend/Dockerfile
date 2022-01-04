FROM node:17.3.0-alpine3.15

RUN apk add --no-cache bash

COPY .docker/frontend/entrypoint.sh /entrypoint.sh

USER node

WORKDIR /home/node/app