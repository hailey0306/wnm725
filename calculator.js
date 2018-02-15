
require('mahrio').runServer( process.env, __dirname)
    .then( function(server){
        server.route({
            path: '/',
            method: 'GET',
            handler: function(req, rep){
                rep('income calculator');
            }
        });

        server.route({
            path: '/calculator',
            method: 'POST',
            handler: function(req, rep){ // req.payload.motion&night
                var hourly=req.payload.hourly;
                var yearIncome=hourly*40*52;
                rep( "The yearly income is " + yearIncome );

            }
        });
    });