FROM node:21.4.0

WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app
EXPOSE 4000

CMD ["node", "src/server.js "]