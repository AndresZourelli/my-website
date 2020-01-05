docker build -t gcr.io/charged-formula-262616/web-client:latest -t gcr.io/charged-formula-262616/web-client:$SHA  -f ./client/Dockerfile ./client
docker build -t gcr.io/charged-formula-262616/web-nginx:latest -t gcr.io/charged-formula-262616/web-nginx:$SHA -f ./nginx/Dockerfile ./nginx
docker build -t gcr.io/charged-formula-262616/web-server:latest -t gcr.io/charged-formula-262616/web-server:$SHA -f ./server/Dockerfile ./server

docker push gcr.io/charged-formula-262616/web-client
docker push gcr.io/charged-formula-262616/web-nginx
docker push gcr.io/charged-formula-262616/web-server

gcloud auth configure-docker

gcloud beta compute --project "charged-formula-262616" ssh --zone "us-west1-b" "instance-1" <<EOF

echo "docker pull gcr.io/charged-formula-262616/web-client"
echo "docker pull gcr.io/charged-formula-262616/web-nginx"
echo "docker pull gcr.io/charged-formula-262616/web-server"

echo "docker run -d gcr.io/charged-formula-262616/web-client"
echo "docker run -d gcr.io/charged-formula-262616/web-nginx"
echo "docker run -d gcr.io/charged-formula-262616/web-server"

echo "docker ps"

EOF