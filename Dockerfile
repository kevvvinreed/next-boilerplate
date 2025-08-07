FROM node:22-alpine as react-builder

ENV NODE_ENV production

WORKDIR /app

COPY package.json yarn.lock* ./

RUN apk add --no-cache git

RUN corepack enable && corepack prepare yarn@4.6.0 --activate

RUN if [ -f yarn.lock ]; then yarn install --immutable; else yarn install; fi

COPY . .

RUN yarn build

CMD ["yarn", "start"]
