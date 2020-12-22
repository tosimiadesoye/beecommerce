const checkout = require("../model/checkoutModel");

exports.checkoutProduct = async (req, res) => {
  try {
    const payLoad = {
      card: req.body.card,
      date: req.body.date,
      cvs: req.body.cvs,
      };
     
      
        let s = 0;
        let doubleDigit = false;
        for (let i = payLoad.card.length - 1; i >= 0; i--) {
            let digit = +payLoad.card[i];
            if (doubleDigit) {
                digit *= 2;
                if (digit > 9)
                    digit -= 9;
            }
            s += digit;
            doubleDigit = !doubleDigit;
        }
        // return s % 10 == 0;
    
      

      const payment = checkout.create(payLoad);
    
      const validateCardNo = (no) => {
        return (no && checkLuhn(no) &&
            no.length == 16 && (no[0] == 4 || no[0] == 5 && no[1] >= 1 && no[1] <= 5 ||
            (no.indexOf("6011") == 0 || no.indexOf("65") == 0)) ||
             no.length == 15 && (no.indexOf("34") == 0 || no.indexOf("37") == 0) ||
            no.length == 13 && no[0] == 4)
    }
  } catch (error) {
      
  }
};
