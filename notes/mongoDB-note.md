## MongoDB 

Is a NoSQL database (none traditional db)

Each database can have more collections (rows), which can contain one or more data structures called documents (rows).

Document could be one post, user or review

Collection could be blog posts, users or reviews 

Data looks like json. 

MongoDB is a document database with scalability and flexibility that you want with the querying and indexing that you need - MongoDB 

### Key Features

- Document Based: MongoDB stores data in documents (field-value pair data structures)
- Scalable: Very Easy to distrubute data across multiple machine as your users and amount of data grows. 
- Flexible: No Document data schema required, so each document can have different numbers and type of fields
- Performant: Embedded data models, indexing, sharding, flexible documents, native duplication, etc 
- Free and open source, under SSPL License 

### Basics 

Start mongodb with: `brew services start mongodb-community@4.2` and another terminal with `mongo`

`use <name>` is how to create or switch db

create a tours collection with `db.tours.insertOne({ <data> })` inside the current db ie -
`db.tours.insertOne({ name: 'Ellesmere Port', price: 287, rating: 2.1 })` which returns 

```
{
	"acknowledged" : true,
	"insertedId" : ObjectId("5e95f44d023de3fd55b8891f")
}
```
To find a tour we do `db.tours.find()` which returns the tour we just created -
`{ "_id" : ObjectId("5e95f44d023de3fd55b8891f"), "name" : "Ellesmere Port", "price" : 287, "rating" : 2.1 }` 

`show dbs` to show all dbs we have

`show collections` to show all collections in the db

`quit()` to quit mongo

### CRUD 

#### Creating

Creating is shown above like `db.tours.insertOne({ name: 'Ellesmere Port', price: 287, rating: 2.1 })`

#### Reading 

To find all tours we do `db.tours.find()`
To find one tours `db.tours.find({name: "Ellesmere Port"})` will return the records with Ellesmere Port as name
To find all tours with price less than 10 we do `db.tours.find({price: {$lte: 10} })` with $lte: being a object - https://docs.mongodb.com/manual/reference/operator/query-comparison/ for more details 

#### Updating

Updating we use `updateOne`, the first query must be the document we editing then use `$set` to add / edit new fields. However this only updates the first one, unless we do `updateMany`. 
`db.tours.updateOne({ name: "Ellesmere Port" }, {$set: { description: "My Home Town near chester"}})`

### Issues 

I had issues getting mongodb to work on until I ran - 
`export PATH="$PATH:/usr/local/Cellar/mongodb-community/4.2.2/bin"`

TODO WRITE GUIDE FOR New mac os