FROM node:14-alpine as react-builder

ENV NODE_ENV production

WORKDIR /app

COPY package.json package.json

RUN apk add --no-cache git

RUN corepack enable && corepack prepare yarn@4.6.0 --activate

RUN if [ -f yarn.lock ]; then yarn install --immutable; else yarn install; fi

RUN yarn add --dev @types/node @types/react@18.0.0

COPY . .

RUN yarn build

CMD ["yarn", "start"]
