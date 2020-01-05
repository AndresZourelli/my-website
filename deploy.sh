docker build -t andreszourelli/web-client:latest -t andreszourelli/web-client:$SHA  -f ./client/Dockerfile ./client
docker build -t andreszourelli/web-nginx:latest -t andreszourelli/web-nginx:$SHA -f ./nginx/Dockerfile ./nginx
docker build -t andreszourelli/web-server:latest -t andreszourelli/web-server:$SHA -f ./server/Dockerfile ./server

docker push gcr.io/charged-formula-262616/web-client
docker push gcr.io/charged-formula-262616/web-nginx
docker push gcr.io/charged-formula-262616/web-server

gcloud compute project-info describe --project charged-formula-262616
