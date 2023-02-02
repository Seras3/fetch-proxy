FROM node:16-alpine

WORKDIR /app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install --production

COPY . .

RUN yarn build

EXPOSE 3001
CMD [ "node", "dist/index.js" ]