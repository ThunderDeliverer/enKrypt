FROM node:16-stretch
ENV HOME /home
ENV NODE_OPTIONS --max-old-space-size=8192
RUN npm install yarn -g
RUN node -v && npm -v && yarn -v
WORKDIR /home