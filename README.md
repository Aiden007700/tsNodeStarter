# tsNodeStarter
# Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Setup database settings inside `ormconfig.json` file
3. Setup .env file
4. Run `npm start` command

# Build Docker Image
1. docker build --tag `name` .
2. docker run --net=host --detach `name`

if something goes wrong check the logs:
docker logs -f CONTAINER


