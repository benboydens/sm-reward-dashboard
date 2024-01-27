FROM node:21-alpine3.18

WORKDIR /smite-reward-dashboard

COPY package.json .

RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "index.js"]