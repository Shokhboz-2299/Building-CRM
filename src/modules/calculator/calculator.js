// const model = require('./model')

// module.exports = {
//     GET_BANK: async(req, res) => {

//       try {

//         const { house } = req.query;

//         // if(house) {
//           const Bank = await model.calculator(house);
//         //     return res.send(Bank)
//         // } 
//         console.log(Bank);
//         res.send("ok")
//         } catch(err) {
//             console.log(err)
//             res.json({
//                 status: 500,
//                 message: "Internal server error"
//             })
//         }
//     },
// }