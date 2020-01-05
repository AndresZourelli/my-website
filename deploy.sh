docker build -t gcr.io/charged-formula-262616/web-client:latest -t gcr.io/charged-formula-262616/web-client:$SHA  -f ./client/Dockerfile ./client
docker build -t gcr.io/charged-formula-262616/web-nginx:latest -t gcr.io/charged-formula-262616/web-nginx:$SHA -f ./nginx/Dockerfile ./nginx
docker build -t gcr.io/charged-formula-262616/web-server:latest -t gcr.io/charged-formula-262616/web-server:$SHA -f ./server/Dockerfile ./server

docker push gcr.io/charged-formula-262616/web-client
docker push gcr.io/charged-formula-262616/web-nginx
docker push gcr.io/charged-formula-262616/web-server

gcloud docker -- pull pull gcr.io/charged-formula-262616/web-client
gcloud docker -- pull gcr.io/charged-formula-262616/web-nginx
gcloud docker -- pull gcr.io/charged-formula-262616/web-server

gcloud docker -- run -d gcr.io/charged-formula-262616/web-client
gcloud docker -- run -d gcr.io/charged-formula-262616/web-nginx
gcloud docker -- run -d gcr.io/charged-formula-262616/web-server
