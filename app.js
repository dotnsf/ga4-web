//. app.js
var express = require( 'express' ),
    ejs = require( 'ejs' ),
    app = express();

require( 'dotenv' ).config();
var ga4_tag = 'GA4_TAG' in process.env ? process.env.GA4_TAG : '';

app.use( express.Router() );
app.set( 'views', __dirname + '/views' );
app.set( 'view engine', 'ejs' );


//. Main UI
app.get( '/', function( req, res ){
  res.render( 'index', { title: 'Index', ga4_tag: ga4_tag } );
});

//. Page1 UI
app.get( '/page1', function( req, res ){
  res.render( 'page1', { title: 'Page 1', ga4_tag: ga4_tag } );
});

//. Page2 UI
app.get( '/page2', function( req, res ){
  res.render( 'page2', { title: 'Page 2', ga4_tag: ga4_tag } );
});


var port = process.env.PORT || 8080;
app.listen( port );
console.log( "server starting on " + port + " ..." );

