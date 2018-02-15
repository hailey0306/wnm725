var light = false;

require('mahrio').runServer( process.env, __dirname)
    .then( function(server){
        server.route({
            path: '/',
            method: 'GET',
            handler: function(req, rep){
                rep('incandescent light');
            }
        });

        server.route({
            path: '/light',
            method: 'POST',
            handler: function(req, rep){ // req.payload.motion&night
                if (req.payload.motion==true && req.payload.night==true){
                    console.log( 'motion & night is true' );
                    light=true;
                }else{
                    console.log( 'light will be turn off in 5 seconds!' );
                    function turnoff(){
                        light=false;
                    }
                    setTimeout(turnoff, 5000);
                }

                rep( {lightState: light } );

            }
        });
    });
// Server runs http://127.0.0.1:6085

