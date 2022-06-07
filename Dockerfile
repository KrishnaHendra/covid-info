FROM node:14.17.3-slim
LABEL PROGRAMMER Krishna Hendra Wijaya <krisnahendrawijaya@gmail.com>

WORKDIR /app

COPY ./package*.json /app/

RUN npm install --loglevel verbose

# Bundle app source
COPY . /app

CMD ["npm", "start"]
