const model = require('./model')

module.exports = {
    GET_COMPLEX: async(req, res) => {
        try {

            const { company } = req.query;
            if(company) {
              const complex = await model.complex(company);
                return res.json(complex)
            } 
           res.json([])

        } catch(err) {
            console.log(err)
            res.json({
                status: 500,
                message: "Internal server error"
            })
        }
    },
}