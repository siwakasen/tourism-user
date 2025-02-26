# Stage 1: Build dependencies
FROM node:18-alpine AS builder

WORKDIR /app
COPY . .
RUN npm install -g pnpm
RUN pnpm install


#build with env
ARG NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_API_URL_DRIVER
ARG NEXT_PUBLIC_API_URL_TESTI

RUN pnpm build

# Stage 2: Final runtime image
FROM node:18-alpine

# Install bash
RUN apk add --no-cache bash

ENV SHELL=/bin/bash

WORKDIR /appg
COPY --from=builder app/.env.production ./
COPY --from=builder app/node_modules ./node_modules
COPY --from=builder app/public ./public
COPY --from=builder app/next.config.js ./

COPY --from=builder app/.next/standalone ./
COPY --from=builder app/.next/static ./.next/static
RUN rm -rf /app

EXPOSE 3000

CMD ["node", "server.js"]
