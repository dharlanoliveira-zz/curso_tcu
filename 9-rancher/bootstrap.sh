#!/usr/bin/env bash

echo "Instalando dependências"
rm -fr /var/cache/yum/*
yum clean all
yum makecache fatestmirror
yum update
yum install -y curl
yum install -y wget
yum install -y openssh

echo "Criando aliases"
alias ll=`ls -la`

echo "Removendo instalações docker"
yum remove docker \
           docker-common \
           container-selinux \
           docker-selinux \
           docker-engine

echo "Adicionando repositório do docker"
yum install -y yum-utils

yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo

echo "Instalando docker"
yum install -y docker-ce
systemctl start docker
docker run hello-world

echo "Instalando docker-compose"
curl -L --fail "https://github.com/docker/compose/releases/download/1.11.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/bin/docker-compose
curl -L https://raw.githubusercontent.com/docker/compose/$(docker-compose version --short)/contrib/completion/bash/docker-compose > /etc/bash_completion.d/docker-compose
chmod +x /usr/bin/docker-compose
docker-compose --version

echo "Adicionando usuário vagrant ao grupo docker"
sudo usermod -aG docker vagrant
