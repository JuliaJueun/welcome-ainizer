FROM node:12

COPY package.json .
RUN yarn install

COPY . .
RUN yarn build

EXPOSE 3000

CMD ["yarn", "serve"]
