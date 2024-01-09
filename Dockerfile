# syntax = docker/dockerfile:1

ARG NODE_VERSION=18.14.2

FROM node:${NODE_VERSION}-slim as base

ENV NODE_ENV=development

WORKDIR .

# Build
FROM base as build

COPY --link package.json .
RUN yarn install

# Run
FROM base

COPY --from=build ./node_modules ./node_modules

CMD [ "yarn", "dev" ]