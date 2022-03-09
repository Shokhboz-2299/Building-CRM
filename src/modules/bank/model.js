const { fetch, fetchAll } = require('../../lib/db')

const BANKA = `
SELECT 
*
from 
  bank`;

const BANK = `
SELECT 
*
from 
  bank 
WHERE
bank_id = $1`;

const HOUSE = `
SELECT 
*
from 
  house
WHERE
house_id = $1`;

const banka = () => fetchAll(BANKA)
const bank = (id) => fetch(BANK,id)
const house = (id) => fetch(HOUSE,id)

module.exports = {
  bank,
  house,
  banka
};