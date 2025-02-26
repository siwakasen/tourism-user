# Stage 1: Build dependencies
FROM node:18

WORKDIR /app
COPY . .
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm build

# Install bash
RUN apk add --no-cache bash

ENV SHELL=/bin/bash

EXPOSE 3000

CMD ["node", "server.js"]
