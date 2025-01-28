FROM node:18-alpine
LABEL author="asb"

WORKDIR /app

COPY pnpm.lock ./
COPY node_modules ./node_modules
COPY public ./public
COPY next.config.js ./

COPY .next/standalone ./
COPY .next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]