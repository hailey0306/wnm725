
require('mahrio').runServer( process.env, __dirname)
    .then( function(server){
        server.route({
            path: '/',
            method: 'GET',
            handler: function(req, rep){
                rep('max borrow calculator');
            }
        });

        server.route({
            path: '/max',
            method: 'POST',
            handler: function(req, rep){ // // req.payload.monthly payment,years to pay and interest rate
                var monthlyPayment=req.payload.monthlyPayment;
                var yearsToPay=req.payload.yearsToPay;
                var interestRate=(req.payload.interestRate)/100;
                var loanAmount=(monthlyPayment*(1-Math.pow((1+(interestRate/12)),0-12*yearsToPay)))/interestRate*12;
                rep("Your max borrow calculator is $"+loanAmount.toFixed()+" !");

            }
        });
    });