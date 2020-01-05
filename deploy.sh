docker build -t AndresZourelli/web-client:latest -t AndresZourelli/web-client:$SHA  -f ./client/Dockerfile ./client
docker build -t AndresZourelli/web-nginx:latest -t AndresZourelli/web-nginx:$SHA -f ./nginx/Dockerfile ./nginx
docker build -t AndresZourelli/web-server:latest -t AndresZourelli/web-server:$SHA -f ./server/Dockerfile ./server

docker push gcr.io/charged-formula-262616/web-client
docker push gcr.io/charged-formula-262616/web-nginx
docker push gcr.io/charged-formula-262616/web-server

gcloud compute project-info describe --project charged-formula-262616
