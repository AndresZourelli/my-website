
FROM node:12.10-alpine

RUN apk add g++ make python
RUN mkdir -p /srv/app/admin-server
WORKDIR /srv/app/admin-server

COPY package.json /srv/app/admin-server
COPY yarn.lock /srv/app/admin-server

RUN npm install -g node-pre-gyp
RUN yarn install 

COPY . /srv/app/admin-server


CMD yarn dev