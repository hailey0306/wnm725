
require('mahrio').runServer( process.env, __dirname)
    .then( function(server){
        server.route({
            path: '/',
            method: 'GET',
            handler: function(req, rep){
                rep('loan calculator');
            }
        });

        server.route({
            path: '/loan',
            method: 'POST',
            handler: function(req, rep){ // req.payload.loan amount,years to pay and interest rate
                var loanAmount=req.payload.loanAmount;
                var yearsToPay=req.payload.yearsToPay;
                var interestRate=(req.payload.interestRate)/100;
                var monthlyPayment=(interestRate/12*loanAmount)/(1-Math.pow((1+(interestRate/12)),0-12*yearsToPay));
                rep('Your monthly payment will be : $'+monthlyPayment.toFixed()+'.');

            }
        });
    });