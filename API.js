var devices = [
    { loc:"", id:""}
    ];

require('mahrio').runServer( process.env, __dirname)
    .then( function(server){
        server.route({
            path: '/',
            method: 'GET',
            handler: function(req, rep){
                rep('This ia an API');
            }
        });

        server.route({
            path: '/API',
            method: 'POST',
            handler: function(req, rep){ // req.payload.motion&night
                var i;
                for(i=0; i<req.payload.devices.length;i++){
                    devices.push(req.payload.devices[i]);
                }


                rep( devices );

            }
        });

        server.route({
            path: '/API',
            method: 'DELETE',
            handler: function(req, rep){ // req.payload.motion&night
                var id=req.payload.id;
                if(devices.indexOf(id)){
                    var index = devices.indexOf(id);
                    devices.splice(index,1);
                    rep( devices );
                }else{
                    rep("device "+id+" doesn't exist!")
                }
            }
        });
    });
// Server runs http://127.0.0.1:6085

