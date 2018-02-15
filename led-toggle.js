var led = false;

require('mahrio').runServer( process.env, __dirname)
    .then( function(server){
        server.route({
            path: '/',
            method: 'GET',
            handler: function(req, rep){
                rep('Hello World!');
            }
        });
        server.route({
            path: '/led',
            method: 'POST',
            handler: function(req, rep){ // req.payload.led
                led = !!req.payload.led;
                console.log( 'LED State: ' + led );
                rep( {ledState: led } );
            }
        });
    });
// Server runs http://127.0.0.1:6085

