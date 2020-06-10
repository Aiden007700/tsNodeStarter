FROM node:10
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
RUN npm install pm2 -g
RUN npm install typeorm -g
RUN apt-get update && apt-get install -y vim
COPY . .
RUN npm run build
EXPOSE 4000
CMD ["pm2-runtime", "npm start"]
