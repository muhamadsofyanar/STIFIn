FROM node:22-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
ARG STIFIN_API_BASE=https://apro.stifin.id/api
ARG STIFIN_BRANCH_CODES
ARG STIFIN_API_AUTH_HEADER
ARG STIFIN_SYNC_CONCURRENCY=6
ARG STIFIN_SYNC_TIMEOUT_MS=15000
ARG STIFIN_SYNC_RETRIES=2
ARG STIFIN_MIN_SUCCESS_RATE=1
ARG STIFIN_MAX_DROP_RATE=0.35
ARG STIFIN_EXPECTED_PROMOTERS=0
ARG STIFIN_EXPECTED_BRANCHES=0
ARG PUBLIC_META_PIXEL_ID
RUN npm run build

FROM nginx:1.27-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 CMD wget -q -O /dev/null http://127.0.0.1/ || exit 1
