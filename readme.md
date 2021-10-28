# Resources
- [MongoDB One-to-Many Relationship tutorial with Mongoose examples](https://www.bezkoder.com/mongoose-one-to-many-relationship/#Case_1_Mongoose_One-to-Many_Few_Relationship)
- [Convert a Shard Standalone to a Shard Replica Set](https://docs.mongodb.com/manual/tutorial/convert-shard-standalone-to-shard-replica-set/)
- [Create a MongoDB replica set in Windows](https://adelachao.medium.com/create-a-mongodb-replica-set-in-windows-edeab1c85894)
- [MongoDB & Node.js: Create an ACID Transaction (Part 3 of 4)
](https://www.youtube.com/watch?v=bdS03tgD2QQ)




# Convert Shard | Standalone to Replica Set | to transaction works
- add mongo db to path
- go to file ```C:\Program Files\MongoDB\Server\5.0\bin\mongod.cfg``` add this lines 
``````
replication:
 replSetName: rs0
``````  
- `mongod --port 27017 --dbpath "C:\MongoDB\data\db"`
- ``` mongod --port 27017 --dbpath "C:\Program Files\MongoDB\Server\5.0\data" ```
- ``` net STOP MongoDB ```
- ``` net START MongoDB ```

- to entre inside  ```mongo --port 27017``` and inside put ```s.initiate()``` and check result 

