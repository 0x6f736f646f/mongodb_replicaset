rs.initiate({
    "_id": "tut12-replica-set",
    "members": [
        { "_id": 0, "host": "tut12-mongo-primary:27017" },
        { "_id": 1, "host": "tut12-mongo-worker-1:27017" },
        { "_id": 2, "host": "tut12-mongo-worker-2:27017" },
        { "_id": 3, "host": "tut12-mongo-worker-3:27017" }
    ]
});
conf = rs.config();
conf.members[0].priority = 2;
rs.reconfig(conf);