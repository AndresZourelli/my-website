# docker build -t gcr.io/charged-formula-262616/web-client:latest -t gcr.io/charged-formula-262616/web-client:$SHA  -f ./client/Dockerfile ./client
# docker build -t gcr.io/charged-formula-262616/web-nginx:latest -t gcr.io/charged-formula-262616/web-nginx:$SHA -f ./nginx/Dockerfile ./nginx
# docker build -t gcr.io/charged-formula-262616/web-server:latest -t gcr.io/charged-formula-262616/web-server:$SHA -f ./server/Dockerfile ./server

# docker push gcr.io/charged-formula-262616/web-client
# docker push gcr.io/charged-formula-262616/web-nginx
# docker push gcr.io/charged-formula-262616/web-server

ls
scp ./docker-compose-prod.yml travis@104.196.226.118:~/
ls
ssh -i ./deploy_key_open travis@104.196.226.118 << EOF

 docker-compose up -f docker-compose-prod.yml



 sudo docker pull gcr.io/charged-formula-262616/web-nginx
 
 sudo docker pull gcr.io/charged-formula-262616/web-client
 
 sudo docker pull gcr.io/charged-formula-262616/web-server

 sudo docker pull postgres



 sudo docker run --rm -d -p 3000:3000 gcr.io/charged-formula-262616/web-client
ls
 sudo docker run --rm -d -p 80:80 -p 443:443 gcr.io/charged-formula-262616/web-nginx
ls
 sudo docker run --rm -d -p 5000:5000 gcr.io/charged-formula-262616/web-server
ls
 sudo docker run --rm -d -v /database_data:/var/lib/postgresql/data -e POSTGRES_USER -e POSTGRES_PASSWORD -e POSTGRES_DB postgres 

EOF


