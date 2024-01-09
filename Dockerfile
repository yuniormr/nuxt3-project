# syntax = docker/dockerfile:1

ARG NODE_VERSION=18.14.2

# Base
FROM node:${NODE_VERSION}-slim as base

ENV NODE_ENV=development

WORKDIR /app

# Build
FROM base as build

COPY package.json .
COPY yarn.lock .

RUN yarn install

# Run
FROM base

# Copia todo de la imagen de construcción a la imagen de producción
COPY --from=build /app .

CMD [ "yarn", "dev" ]