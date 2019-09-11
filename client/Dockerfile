FROM node:12.10-alpine

RUN mkdir -p /srv/app/admin-client
WORKDIR /srv/app/admin-client

COPY package.json /srv/app/admin-client
COPY yarn.lock /srv/app/admin-client

RUN yarn install

COPY . /srv/app/admin-client

CMD yarn start