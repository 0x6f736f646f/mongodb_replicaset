## Start the cluster
```sh
docker-compose up
```

## Connect to the primary node
```sh
docker-compose exec demo-mongo-primary mongo -u "root" -p "password"
```
## Instantiate the replica set
```sh
rs.initiate({"_id" : "demo-replica-set","members" : [{"_id" : 0,"host" : "demo-mongo-primary:27017"},{"_id" : 1,"host" : "demo-mongo-node-1:27017"},{"_id" : 2,"host" : "demo-mongo-node-2:27017"},{"_id" : 3,"host" : "demo-mongo-node-3:27017"}]});
```
## Set the priority of the master over the other nodes
```sh
conf = rs.config();
```
```sh
conf.members[0].priority = 2;
```
```sh
rs.reconfig(conf);
```
## Destory the cluster
```sh
docker-compose down
```