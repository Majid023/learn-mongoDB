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


//find one document in learndb database
  /*  router.get( "/" , function( req , res ){
        var url = "mongodb://localhost:27017/";
        mongoDB.connect( url , function( err, db){
            if (err) throw err;
            var dbo = db.db( "learndb" );
        
            dbo.collection("friendlist").findOne({},function(err ,result){
                if (err) throw err ;
                db.close();
                res.send(result.name + " "+ result.address);
            });
             
        });
       
});*/


// find all documents from freindlist collection
/*router.get( "/" , function( req , res ){
    var url = "mongodb://localhost:27017/";
    mongoDB.connect( url , function( err, db){
        if (err) throw err;
        var dbo = db.db( "learndb" );
    
        dbo.collection("friendlist").find({}).toArray(function(err ,result){
            if (err) throw err ;
            db.close();
            res.send(result);
        });
         
    });
   
});*/



// find all documents from freindlist collection but id is not include
/*router.get( "/" , function( req , res ){
    var url = "mongodb://localhost:27017/";
    mongoDB.connect( url , function( err, db){
        if (err) throw err;
        var dbo = db.db( "learndb" );
    
        dbo.collection("friendlist").find({},{_id:0,name:1,address:1}).toArray(function(err ,result){
            if (err) throw err ;
            db.close();
            res.send(result);
            
        });
         
    });
   
});
*/

// filter th result

/*router.get( "/" , function( request , response){
    var url ="mongodb://localhost:27017/";
    mongoDB.connect(url , function(err , db){
        if ( err ) throw err ;
        var dbo = db.db( "learndb" );
        var query = { address:/^S/};
        dbo.collection("friendlist").find(query).toArray(function(err,result){
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
});*/

// sort the result

/*router.get( "/" , function( request , response){
    var url ="mongodb://localhost:27017/";
    mongoDB.connect(url , function(err , db){
        if ( err ) throw err ;
        var dbo = db.db( "learndb" );
        var query = { name : 1};
        dbo.collection("friendlist").find().sort(query).toArray(function(err,result){
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
});*/


//delete  one document at a time 
/*router.get( "/" , function( req , res ){
    var url = "mongodb://localhost:27017/";
    
    mongoDB.connect( url , function ( err , db){
        
           if( err ) throw err ;
           var dbo = db.db( "learndb" );
           var query = { address : "Mukundabera" };
           dbo.collection( "friendlist").deleteOne(query , function(err , result ){
                if ( err ) throw err;
                console.log( "1 document deleted ");
                db.close();
                res.send( "deleted" + result.deletedCount);
             
           });
    });
});*/

//delete   documents at a time 
/*router.get( "/" , function( req , res ){
    var url = "mongodb://localhost:27017/";
    
    mongoDB.connect( url , function ( err , db){
        
           if( err ) throw err ;
           var dbo = db.db( "learndb" );
           var query = { address : /^O/ };
           dbo.collection( "friendlist").deleteMany(query , function(err , result ){
                if ( err ) throw err;
                console.log( "1 document deleted ");
                db.close();
                res.send( "deleted" + result.deletedCount);
             
           });
    });
});*/



//drop  collection  
//when once you delete collection then you try again deleted collection then it generate erro ns not found
// its means collection not found witch you want to delete
/*router.get( "/" , function( req , res ){
    var url = "mongodb://localhost:27017/";
    
mongoDB.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("learndb");
    dbo.dropCollection("friendlist", function(err, delOK) {
      if (err) throw err;
      if (delOK) console.log("Collection deleted");
      db.close();
    });
  }); 
});*/








module.exports = router;