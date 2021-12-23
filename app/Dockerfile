FROM node:16

WORKDIR /app

COPY /app/package.json .
COPY /app/yarn.lock .

RUN yarn install

COPY /app .

EXPOSE 3000

CMD ["yarn", "dev"]