# Stage 1: Build dependencies
FROM node:18-alpine

WORKDIR /app
COPY package.json .
RUN npm install -g pnpm
RUN pnpm install --production

# Install bash
RUN apk add --no-cache bash

ENV SHELL=/bin/bash

COPY . .
RUN pnpm build
EXPOSE 3000

CMD ["node", "server.js"]
