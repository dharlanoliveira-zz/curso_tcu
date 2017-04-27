docker pull node:7.9
docker run --rm -v ${PWD}:/projeto -w /projeto node:7.9 npm install
docker run --rm -v ${PWD}:/projeto -w /projeto node:7.9 npm run build
docker build -t servidor-node .
docker run -d -p 3000:3000 --name servidor-node servidor-node
