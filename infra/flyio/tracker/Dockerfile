# syntax = docker/dockerfile:1

ARG NODE_VERSION=20.16.0
ARG PNPM_VERSION=9.11.0

# base
FROM node:${NODE_VERSION}-slim as base

RUN npm i -g "pnpm@${PNPM_VERSION}" turbo && pnpm config set store-dir ~/.pnpm-store


# setup
FROM base as setup

WORKDIR /app
COPY . .
RUN pnpm turbo prune --scope=@video-ad-network/tracker --docker


# build
FROM base as build

WORKDIR /app

COPY --from=setup /app/out/pnpm-lock.yaml ./pnpm-lock.yaml
COPY --from=setup /app/out/pnpm-workspace.yaml ./pnpm-workspace.yaml
COPY --from=setup /app/out/json/ .

RUN pnpm install --frozen-lockfile

COPY --from=setup /app/out/full/ .

RUN pnpm run build --filter=@video-ad-network/tracker \
  && pnpm prune --prod --no-optional


# runner
FROM base as runner
ENV NODE_ENV=production

WORKDIR /app
COPY --from=build /app .
WORKDIR /app/apps/tracker

EXPOSE 3000
CMD [ "pnpm", "run", "start", "--filter", "@video-ad-network/tracker" ]
