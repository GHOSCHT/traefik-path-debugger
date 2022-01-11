FROM node:15.9.0-alpine3.10

WORKDIR /usr/app

COPY . ./

RUN yarn

CMD ["yarn", "start"]
