FROM node:lts-alpine

RUN apk add --update bash python3 make g++

RUN mkdir -p /home/node/app

WORKDIR /home/node/app

ADD ./public ./public

ADD ./src ./src

ADD ./server ./server

ADD package.json package-lock.json ./

RUN chown -R node:node /home/node/app

USER node

RUN npm ci

RUN npm run build

ENTRYPOINT ["node", "server/index.js"]