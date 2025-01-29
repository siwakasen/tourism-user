# Stage 1: Build dependencies
FROM node:18-alpine AS builder

WORKDIR /app
COPY package.json .
RUN npm install -g pnpm
RUN pnpm install --production

# Stage 2: Final runtime image
FROM node:18-alpine

# Install bash
RUN apk add --no-cache bash

ENV SHELL=/bin/bash

WORKDIR /appg
COPY --from=builder app/node_modules ./node_modules
COPY public ./public
COPY next.config.js ./

COPY .next/standalone ./
COPY .next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
