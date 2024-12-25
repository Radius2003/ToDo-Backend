## Installation

```bash
$ npm install
```

## Migration
```bash
$ set -a && source .env && set +a

# create table Todos
$ npx sequelize-cli db:migrate

# drop table Todos
$ npx sequelize-cli db:migrate:undo
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
