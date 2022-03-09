const express = require('express')
const router = express.Router()

const Company = require('./company/company')
const Complex = require('./complex/complex')
const House = require('./house/house')
const Calculator = require('./calculator/calculator')
const Bank = require('./bank/bank')
const bank = require('./bank/model')


router
    .get('/company', Company.GET_COMPANY )
    .get('/complex', Complex.GET_COMPLEX )
    .get('/house', House.GET_HOUSE )
    .get('/bank',  Bank.GET_BANK)

module.exports = router