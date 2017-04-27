docker pull node:7.9
docker run --rm -v ${PWD}:/projeto -w /projeto node:7.9 npm run build
docker build -t cliente-angular .
docker run -d -p 8080:80 --name cliente-angular cliente-angular
