const {bank, house, banka} = require('./model')

module.exports = {
    GET_BANK: async(req, res) => {

      try {
        const {bankId, houseId}= req.query;

        if(bankId && houseId){
          const bnk = await bank(bankId)
          const hse = await house(houseId)
          
          return res.json({
            house_price: hse.overall_size * hse.house_price_1kv,
            starting_payment: (hse.overall_size * hse.house_price_1kv)/100*bnk.starting_payment,
            monthly_payment: hse.overall_size * hse.house_price_1kv-(hse.overall_size * hse.house_price_1kv)/100*bnk.starting_payment
          })
        }
        const Bank = await banka();
        res.json(Bank)


        } catch(err) {
            console.log(err)
            res.json({
                status: 500,
                message: "Internal server error"
            })
        }
    },
}