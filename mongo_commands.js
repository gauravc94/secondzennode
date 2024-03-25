// show dbs => list all dbs 
// use db_name => create and switch to db_name
// db => current active db

db.products.insertMany([
    {
      "id": "1",
      "name": " iPhone 15 (128 GB)",
      "poster": "https://m.media-amazon.com/images/I/71d7rfSl0wL._AC_UY218_.jpg",
      "price": "₹77,900 ",
      "rating": 4.5,
      "summary": "DYNAMIC ISLAND COMES TO IPHONE 15 — Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can see who’s calling, track your next ride, check your flight status, and so much more."
    },
    {
      "id": "2",
      "name": "iPhone 15 Pro (128 GB) ",
      "poster": "https://m.media-amazon.com/images/I/81SigpJN1KL._AC_UY218_.jpg",
      "price": "₹1,34,900 ",
      "rating": 5,
      "summary": " iPhone 15 Pro has a strong and light aerospace-grade titanium design with a textured matte-glass back. It also features a Ceramic Shield front that’s tougher than any smartphone glass. And it’s splash, water, and dust resistant."
    },
    {
      "id": "3",
      "name": "Samsung Galaxy S23 5G (256GB Storage) ",
      "poster": "https://m.media-amazon.com/images/I/51L8W6d-DNL._AC_UY218_.jpg",
      "price": "₹65,320",
      "rating": 4.7,
      "summary": "FASTEST MOBILE PROCESSOR AVAILABLE: Whether you’re working hard, playing hard or doing both at the same time, smoothly switch between apps with our fastest processor ever."
    },
    {
      "id": "4",
      "name": "Samsung Galaxy S23 Ultra 5G (256GB Storage) ",
      "poster": "https://m.media-amazon.com/images/I/51hqXIAVXAL._AC_UY218_.jpg",
      "price": "₹1,00,000",
      "rating": 5,
      "summary": "Create crystal-clear content worth sharing with Galaxy S23 Ultra’s 200MP camera — the highest camera resolution on a phone; Whether you’re posting or printing, Galaxy S23 Ultra always does the moment justice."
    },
    {
      "id": "5",
      "name": "Apple AirPods Pro (2nd Generation) ​​​​​​​ ",
      "poster": "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UY218_.jpg",
      "price": "₹20,999 ",
      "rating": 4.8,
      "summary": "Active Noise Cancellation reduces unwanted background noise.Adaptive Transparency lets outside sounds in while reducing loud environmental noise.Personalised Spatial Audio with dynamic head tracking places sound all around you."
    },
    {
      "id": "6",
      "name": " Apple Watch Series 9 [GPS + Cellular 41mm] ",
      "poster": "https://m.media-amazon.com/images/I/81I70qV6cOL._AC_UY218_.jpg",
      "price": "₹75,900 ",
      "rating": 4.9,
      "summary": "Smartwatch with Gold Stainless steel Case with Gold Milanese Loop One Size. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant"
    },
    {
      "id": "7",
      "name": " Samsung Galaxy Watch5 Bluetooth (44 mm, Sapphire, Compatible with Android only)",
      "poster": "https://m.media-amazon.com/images/I/61aVQDazNHL._SX679_.jpg",
      "price": "₹22,999",
      "rating": 4.5,
      "summary": "Analysis (BIA Measurement): Monitor everything from body fat percentage (BIA) to skeletal muscle weight. All the feedback you need to track your progress."
    },
    {
      "id": "8",
      "name": "SAMSUNG Galaxy Buds2 Pro True Wireless Bluetooth Earbud Headphones - White",
      "poster": "https://m.media-amazon.com/images/I/51m4LnFz84L._SX466_.jpg",
      "price": "₹27,141",
      "rating": 4.3,
      "summary": "Reduce unwanted noise with Galaxy Buds2 Pro; They use Intelligent Active Noise Cancellation* to quiet even the loudest outside sounds; Tune in to what matters most without being bothered by distracting sounds around you"
    },
    {
      "id": "9",
      "name": "Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm",
      "poster": "https://m.media-amazon.com/images/I/71vFKBpKakL._SX679_.jpg",
      "price": "₹84,990",
      "rating": 5,
      "summary": "Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power."
    },
    {
      "id": "10",
      "name": "Samsung Galaxy Book2 Pro 360 Intel 12th Gen i7 EvoTM 33.78 cm (13.3)",
      "poster": "https://m.media-amazon.com/images/I/71iBfI3rAYL._SX679_.jpg",
      "price": "₹1,10,790",
      "rating": 4.9,
      "summary": " 12th Generation Intel EVOTM Core i7-1260P processor (2.1 GHz up to 4.6 GHz 18 MB L3 Cache) | Memory: 16 GB LPDDR5 Memory (On BD 16 GB) | Storage: 512 GB NVMe SSD"
    }
  ]
  )


db.products.find()

db.products.find({name: " iPhone 15 (128 GB)"}).pretty()

//rating > 4.5
db.products.find({rating: {$gt: 4.5}}).pretty()

//projection => include & exclude any field

//inclusion = 1
db.products.find({}, { name: 1, price: 1 }).pretty()

//exclusion = 0
db.products.find({}, { name: 0, price: 0 }).pretty()

//exclusion + inclusion is not possible for fields created by us
db.products.find({}, { name: 0, price: 1 }).pretty()
db.products.find({}, { name: 1, price: 0 }).pretty()

//this is possible because _id is created by mongodb itself
//even here fields created by us can be included or exlcuded together, not separately
db.products.find({}, { _id: 0, name: 1, price: 1 }).pretty()


//sorting
//asc or descending

//asc = 1
//documents will show only the name and the rating and will be sorted in ascending
//order based on rating
db.products.find({}, { name: 1, rating: 1}).sort({ rating: 1}).pretty()

//desc = -1
db.products.find({}, { name: 1, rating: 1}).sort({ rating: -1}).pretty()

//asc + desc
db.products.find({}).sort({ name: 1, rating: -1 }).pretty()


//limit
db.products.find({}).sort({ rating: -1 }).limit(5).pretty()


//skip, similar to OFFSET from sql
db.products.find({}).sort({ rating: -1 }).limit(5).skip(2).pretty()

//task
// find all products with rating greater than 4
db.products.find({ rating: { $gt : 4 }}).pretty()

// find all products with price less than or equal to 50000
db.products.find({ "price": { $regex: /^₹[0-4]?[0-9],[0-9]{3}$|^₹50,000$/ } }).pretty()
// db.products.find({ price: { $lte: 50000 }}).pretty()

// find all products with name containing "Samsung"
db.products.find({ name: { $regex: /Samsung/i } }).pretty()

// find all products sorted by price in asc order
db.products.find().sort({ price: 1 }).pretty()

// find the cheapest product
db.products.find().sort({ price: 1 }).limit(1)

// find all products with summary containing the word "camera"
db.products.find({ summary: { $regex: /camera/i } }).pretty()


// $in
db.products.find({ name: { $in: [/^Samsung/i, /^Apple/i] } }).pretty()


//update
db.products.updateMany({}, { $set: { category: "electronics" } })

db.products.updateOne({name: " iPhone 15 (128 GB)"}, {$set: { category: "mobile"}})
db.products.find({name: " iPhone 15 (128 GB)"})

//tasks
//update category: "laptop" for "Samsung Galaxy Book2 Pro 360 Intel 12th Gen i7 EvoTM 33.78 cm (13.3)"
db.products.updateOne({name: "Samsung Galaxy Book2 Pro 360 Intel 12th Gen i7 EvoTM 33.78 cm (13.3)"}, {$set: {category: "laptop"}})

//update category: "accessories" for "SAMSUNG Galaxy Buds2 Pro True Wireless Bluetooth Earbud Headphones - White"
db.products.updateOne({name: "SAMSUNG Galaxy Buds2 Pro True Wireless Bluetooth Earbud Headphones - White"}, {$set: {category: "accessories"}})

//update category: "accessories" for " Samsung Galaxy Watch5 Bluetooth (44 mm, Sapphire, Compatible with Android only)"
db.products.updateOne({name: " Samsung Galaxy Watch5 Bluetooth (44 mm, Sapphire, Compatible with Android only)"}, {$set: {category: "accessories"}})


//delete all products with rating > 4.9
db.products.find({rating: {$gt: 4.9}}).pretty()

db.products.deleteMany({rating: {$gt: 4.9}})
db.products.deleteOne({ rating: { $gt: 4.5 } })

//aggregation

db.orders.insertMany([
    { _id: 0, productName: "Steel Beam", status: "new", quantity: 10},
    { _id: 1, productName: "Steel Beam", status: "urgent", quantity: 20},
    { _id: 2, productName: "Steel Beam", status: "urgent", quantity: 30},
    { _id: 3, productName: "Iron Rod", status: "new", quantity: 15},
    { _id: 4, productName: "Iron Rod", status: "urgent", quantity: 50},
    { _id: 5, productName: "Iron Rod", status: "urgent", quantity: 10},
])


db.orders.find().pretty()

//match urgent products
// select * from orders where status = "urgent"

//group based on productName and sum its quantity
select sum(quantity) from orders where status = "urgent" group by productName

//$match => used to filter documents (based on condition)
//$project => select some specific field from collection
//$group => group document based on some value
//$sort => sort data
//$skip => skip number of documents
//$limit => limit number of documents
//$unwind => deconstruct an array, flatten the array
// ["apple", "banana"] => apple, banana
//$out => write document output

//accumulators

//sum
//count
//min
//max
//first
//last
//avg


//match urgent products
//group based on productName and sum its quantity
//aggregate pipeline
db.orders.aggregate([
    //stage 1 => match urgent products
    {
        $match: { status: "urgent" }
    },
    //stage 2 => group based on productName and sum its quantity
    {
        $group: {
            _id: "$productName", //_id is mandatory, based on this it will be grouped
            totalUrgentQuantity: { $sum: "$quantity"}
        }
    }
])


//basic cursor methods => map, toArray, pretty, forEach, limit, count, sort

//cursor => pointer

var myCursor = db.orders.find({_id: 5}).pretty()


//orders with productName => Steel Beam
var myCursor = db.orders.find({productName: "Steel Beam"}).pretty()

//get all orders 
var myCursor = db.orders.find({}).pretty()

//next(), helps get us the next set of data
var myCursor = db.orders.find({_id: {$gt: 3 } }).pretty()

while (myCursor.hasNext()) {
    print(tojson(myCursor.next()))
}


//forEach
var myCursor = db.orders.find({ _id: { $gt: 2 } }).pretty()
myCursor.forEach(printjson)

var myCursor = db.orders.find()

myCursor.forEach(function (product) {
    print(`Product Name: ${product.productName}, Quantity: ${product.quantity}`)
})


//count()
db.orders.find().count()


//toArray
var allOrders = db.orders.find()

var allOrders = db.orders.find().toArray() //each document is put inside the array
//in frontend and backend we need array of objects, toArray() comes in handy

var allOrders = db.orders.find().toArray()
allOrders.forEach(function (order) {
    print(`Order ID: ${order._id}, ProductName: ${order.productName}`)
})


//map()
var listProduct = db.orders.find().map(function (data) {
    return data.productName
})

var listProduct = db.orders.find().limit(2).map(function (data) {
    return data.productName
})//> listProduct
//  [ "Steel Beam", "Steel Beam" ]

var listProduct = db.orders.find().map(function (data) {
    return data.quantity * 100
})


//lookups

db.items.insertMany([
    {"_id": 1, "item": "almonds", "price": 12, "quantity": 2},
    {"_id": 2, "item": "pecans", "price": 20, "quantity": 1}
])

db.inventory.insertMany([
    { "_id": 1, "sku": "almonds", "description": "product 1", "instock": 120 },
    { "_id": 2, "sku": "bread", "description": "product 2", "instock": 80 },
    { "_id": 3, "sku": "cashews", "description": "product 3", "instock": 90 },
    { "_id": 4, "sku": "pecans", "description": "product 4", "instock": 70 },
    { "_id": 5, "sku": null, "description": "Incomplete" },
    { "_id": 6 },
])

db.inventory.find().pretty()


// {
//     $lookup:
//       {
//         from: <collection to join>,
//         localField: <field from the input documents>,
//         foreignField: <field from the documents of the "from" collection>,
//         as: <output array field>
//       }
//  }


db.items.aggregate([
    {
        $lookup:
          {
            from: "inventory",
            localField: "item",
            foreignField: "sku",
            as: "Combined_data"
          }
     }
]).pretty()


//lookup with a project
db.items.aggregate([
    {
        $lookup:
          {
            from: "inventory",
            localField: "item",
            foreignField: "sku",
            as: "Combined_data"
          }
     },
     {
        $unwind: "$Combined_data" //$unwind flattens the Combined_data array
     },
     {
        $project: {
            sku: "Combined_data.sku",
        }
     }
]).pretty()


