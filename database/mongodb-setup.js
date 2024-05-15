print("Started Adding the Users.");
db = db.getSiblingDB("admin");
db.createUser({
  user: "user1Mongo",
  pwd: "YWRtaW5AIWFkbWluMTIzCg",
  roles: [{ role: "readWrite", db: "employees" }],
});
print("End Adding the User Roles.");
