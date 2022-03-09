const model = require('./model')

module.exports = {
    GET_COMPANY: async(_, res) => {
        try {
            const allCompany = await model.company()
            if(!allCompany.length) {
                return res.json({
                    message: "company not found"
                })
            } 
            res.json(allCompany)
        } catch(err) {
            console.log(err)
            res.json({
                status: 500,
                message: "Internal server error"
            })
        }
    },
}