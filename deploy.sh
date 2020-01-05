docker build -t gcr.io/charged-formula-262616/web-client:latest -t gcr.io/charged-formula-262616/web-client:$SHA  -f ./client/Dockerfile ./client
docker build -t gcr.io/charged-formula-262616/web-nginx:latest -t gcr.io/charged-formula-262616/web-nginx:$SHA -f ./nginx/Dockerfile ./nginx
docker build -t gcr.io/charged-formula-262616/web-server:latest -t gcr.io/charged-formula-262616/web-server:$SHA -f ./server/Dockerfile ./server

docker push gcr.io/charged-formula-262616/web-client
docker push gcr.io/charged-formula-262616/web-nginx
docker push gcr.io/charged-formula-262616/web-server

gcloud pull gcr.io/charged-formula-262616/web-client
gcloud pull gcr.io/charged-formula-262616/web-nginx
gcloud pull gcr.io/charged-formula-262616/web-server

gcloud run gcr.io/charged-formula-262616/web-client
gcloud run gcr.io/charged-formula-262616/web-nginx
gcloud run gcr.io/charged-formula-262616/web-server
