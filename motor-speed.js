var speed = 0;

require('mahrio').runServer( process.env, __dirname)
    .then( function(server){
        server.route({
            path: '/',
            method: 'GET',
            handler: function(req, rep){
                rep(speed);
            }
        });
        server.route({
            path: '/motor',
            method: 'POST',
            handler: function(req, rep){ // req.payload.speed
                speed = req.payload.speed;
                console.log( 'Motor Speed is ' + speed );
                rep( {motorSpeed: speed } );
            }
        });
    });