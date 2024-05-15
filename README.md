## Quick start

```bash
docker-compose up -d --build --force-recreate
```

Open chorme: [http://localhost:4000](http://localhost:4000/login)

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
mongosh "mongodb://hello12345:kjghjewht4t643yghbvf54egdsgds@localhost:27017/employees?authSource=admin"
```

## Reference

- https://viblo.asia/p/trien-khai-mongodb-voi-docker-tren-digital-ocean-phan-1-standalone-QpmlezED5rd

- https://hub.docker.com/_/mongo

- https://hackernoon.com/vi/mongodb-v%C3%A0-docker-so%E1%BA%A1n-c%C3%A1ch-t%E1%BB%B1-%C4%91%E1%BB%99ng-b%E1%BA%ADt-ng%C6%B0%E1%BB%9Di-d%C3%B9ng-v%C3%A0-m%E1%BA%ADt-kh%E1%BA%A9u-t%C3%B9y-ch%E1%BB%89nh
