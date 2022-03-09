const model = require('./model')

module.exports = {
    GET_HOUSE: async(req, res) => {
        try {

            const { complex } = req.query;
            if(complex) {
              const house = await model.house(complex);
                return res.json(house)
            } 

        } catch(err) {
            console.log(err)
            res.json({
                status: 500,
                message: "Internal server error"
            })
        }
    },
}
