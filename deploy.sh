docker build -t andreszourelli/web-client:latest -t andreszourelli/web-client:$SHA  -f ./client/Dockerfile ./client
docker build -t andreszourelli/web-nginx:latest -t andreszourelli/web-nginx:$SHA -f ./nginx/Dockerfile ./nginx
docker build -t andreszourelli/web-server:latest -t andreszourelli/web-server:$SHA -f ./server/Dockerfile ./server

docker push gcr.io/charged-formula-262616/andreszourelli/web-client:$SHA
docker push gcr.io/charged-formula-262616/andreszourelli/web-nginx:$SHA
docker push gcr.io/charged-formula-262616/andreszourelli/web-server:$SHA

gcloud compute project-info describe --project charged-formula-262616
