config = {
  _id: "rs0",
  members: [
    { _id: 0, host: "mongo-rs01:27017" },
    { _id: 1, host: "mongo-rs02:27017" },
    { _id: 2, host: "mongo-rs03:27017" },
  ],
};
rs.initiate(config);
rs.status();
