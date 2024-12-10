FROM node:20-alpine

WORKDIR /softlab/

COPY public/ /softlab/public
COPY src/ /softlab/src
COPY package.json /softlab/

RUN npm install

CMD ["npm", "start"]