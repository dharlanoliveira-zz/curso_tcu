FROM node:7.9

RUN mkdir /projeto
RUN mkdir /projeto/node_modules
RUN chmod -R a+rwx /projeto

COPY out/ /projeto
COPY node_modules/ /projeto/node_modules

WORKDIR /projeto

EXPOSE 3000

ENTRYPOINT node servidor.js
