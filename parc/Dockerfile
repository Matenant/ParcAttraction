FROM node:20-alpine

ARG MY_UID
ARG MY_GID

RUN apk add chromium gettext shadow

RUN deluser node
RUN groupadd -g $MY_GID customgroup
RUN useradd -l -u "$MY_UID" -g "$MY_GID" node

RUN chown -R "$MY_UID:$MY_GID" /home/node

WORKDIR /home/node/app

