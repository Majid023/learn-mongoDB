var express = require( "express");
var mongoDB = require( "mongodb").MongoClient;
var router = express.Router();

// create new database and collection whose name learndb and friendlist

/*router.get("/",function( request, response) {
    var url = "mongodb://localhost:27017/";
    mongoDB.connect( url, function( err , db){
        if( err ) throw err;
        var dbo = db.db( "learndb" );
        dbo.createCollection("friendlist" , function( err , res ){
            if( err ) throw err ; 
            console.log( "collection created!" );
            db.close();
        });
    });
    response.send( "majid" );
});*/


// one document insert at a time into friendlist collection
/*router.get("/",function( request, response) {
    var url = "mongodb://localhost:27017/";
    mongoDB.connect( url, function( err , db){
        if( err ) throw err;
        var dbo = db.db( "learndb" );
        var obj ={ name: "Sajid Ansari" , address: "Mukundabera" };
        dbo.collection("friendlist").insertOne(obj , function(err ,res){
            if (err) throw err ;
            console.log("1 document inserted");
            db.close();
        });
    });
    response.send( "majid" );
});*/

//insert many documents at a time 
/*
router.get( "/" , function( req , res ){
    var url = "mongodb://localhost:27017/";
    mongoDB.connect( url , function( err, db){
        if (err) throw err;
        var dbo = db.db( "learndb" );
        var data = [
                        { name: 'John', address: 'Highway 71'},
                        { name: 'Peter', address: 'Lowstreet 4'},
                        { name: 'Amy', address: 'Apple st 652'},
                        { name: 'Hannah', address: 'Mountain 21'},
                        { name: 'Michael', address: 'Valley 345'},
                        { name: 'Sandy', address: 'Ocean blvd 2'},
                        { name: 'Betty', address: 'Green Grass 1'},
                        { name: 'Richard', address: 'Sky st 331'},
                        { name: 'Susan', address: 'One way 98'},
                        { name: 'Vicky', address: 'Yellow Garden 2'},
                        { name: 'Ben', address: 'Park Lane 38'},
                        { name: 'William', address: 'Central st 954'},
                        { name: 'Chuck', address: 'Main Road 989'},
                        { name: 'Viola', address: 'Sideway 1633'}
                    ];
    
        dbo.collection("friendlist").insertMany(data,function(err , res){
            if ( err ) throw err;
            console.log( "Number of documents inserted: " + res.insertedCount);
            db.close();
            
        });
    });
    res.send("majid");
});*/
module.exports = router;