FROM node:11.9.0

ADD . /opt/app
RUN cd /opt/app && yarn

WORKDIR /opt/app

ENTRYPOINT ["yarn", "start"]