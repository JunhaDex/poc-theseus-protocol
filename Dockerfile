FROM node:24-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN apk add --no-cache libc6-compat

FROM base AS dev
WORKDIR /app
COPY . .
RUN pnpm install
CMD ["pnpm", "run", "dev"]

FROM base AS build
ARG APP_NAME
ENV NEXT_TELEMETRY_DISABLED=1

WORKDIR /app
COPY . .
RUN pnpm install
RUN pnpm turbo run build --filter=$APP_NAME


FROM base AS prod
ARG APP_NAME
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

COPY --from=build /app/apps/$APP_NAME/.next/standalone ./
COPY --from=build /app/apps/$APP_NAME/.next/static ./apps/$APP_NAME/.next/static
COPY --from=build /app/apps/$APP_NAME/public ./apps/$APP_NAME/public

CMD node apps/$APP_NAME/server.js