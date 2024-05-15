## Quick start

```bash
docker-compose up -d --build --force-recreate
```

Open chorme: [http://localhost:3000](http://localhost:3000/login)

## Client - FrontEnd

```bash
npm init vite
npm install bootstrap axios react-router-dom
```

Run Client

```bash
npm run client
```

## Server - BackEnd

Run Server

```bash
npm run server
```

## MongoDB

- Standalone: Database MongoDB Single
- Replicate Set: Cluster MongoDB

Folder architecture

- **/data**: data volume mount from inside container output VPS Server Avoid losing data when restarting Docker
- **/log**: data volume mount from Docker Container output VPS Server
- **/config**: contain config **mongod.conf**

Run command line
```bash
docker-compose up -d --build --force-recreate
```

Exec into container mongodb

```bash
docker exec -it mongodb-standalone mongosh -u root -p root --authenticationDatabase admin
```

## Setup database

user Admin: **use admin**

```bash
use admin
db.createUser({ 
  user: "hello12345",
  pwd: "kjghjewht4t643yghbvf54egdsgds",
  roles: [{
    role: "readWrite",
    db: "employees"
  }]
})
```

Connect to MongoDB

```bash
mongosh "mongodb://user1Mongo:YWRtaW5AIWFkbWluMTIzCg@localhost:27017/employees?authSource=admin"
```
