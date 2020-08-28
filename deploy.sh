#!/bin/bash

docker build -t gcr.io/charged-formula-262616/web-client:latest -t gcr.io/charged-formula-262616/web-client:$SHA  -f ./client/Dockerfile ./client
docker build -t gcr.io/charged-formula-262616/web-nginx:latest -t gcr.io/charged-formula-262616/web-nginx:$SHA -f ./nginx/Dockerfile ./nginx
docker build -t gcr.io/charged-formula-262616/web-server:latest -t gcr.io/charged-formula-262616/web-server:$SHA -f ./server/Dockerfile ./server

docker push gcr.io/charged-formula-262616/web-client
docker push gcr.io/charged-formula-262616/web-nginx
docker push gcr.io/charged-formula-262616/web-server



scp ./docker-compose-prod.yml travis@35.230.56.66:~/


ssh -i ./deploy_key_open travis@35.230.56.66 << EOF

docker-compose -f docker-compose-prod.yml pull
docker-compose -f docker-compose-prod.yml down
docker-compose -f docker-compose-prod.yml rm -f
docker-compose -f docker-compose-prod.yml up -d

EOF

