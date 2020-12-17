const gateway = require('./gateway')


exports.initializeBraintree = async (req, res) => {
  try {
      const token = (await gateway.clientToken.generate({})).clientToken;
    res.status(200).send({
      token: token
    });
  } catch (err) {
    res.status(400).send({
      error: err,
    });
  }
};

exports.confirmBraintree = async (req, res) => {
        const nonceFromTheClient = req.body.payment_method_nonce;
    await gateway.transaction.sale({
        amount: '10.00',
        paymentMethodNonce: nonceFromTheClient,
        deviceData: deviceDataFromTheClient,
        options: {
            submitForSettlement: true
        }
    }, (err, result) => {
            if (err) {
                console.error(err);
                return;
            }
            if (result.success) {
                console.log('Transaction ID: ' + result.transaction.id);
            } else {
                console.log(result.message) 
            }
    })

}

