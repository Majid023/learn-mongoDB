
var express = require( "express" );
var reload = require( "reload" );
var app = express();



app.set("port", process.env.PORT || 4000);
app.set( "view engine", "ejs" );
app.set( "views", "app/views" );


app.use( express.static( "app/public" ));
app.use( require( "./routers/index" ));

var server = app.listen(app.get("port"));

console.log("server is started at port : " + app.get("port"));

reload( server, app );


