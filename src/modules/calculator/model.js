const { fetch, fetchAll } = require('../../lib/db')

const CALCULATOR = `
SELECT 
    (overall_size * house_price_1kv) AS house_price,
    ((overall_size * house_price_1kv) / 100 * 17) AS starting_payment,
    ((overall_size * house_price_1kv) - (overall_size * house_price_1kv) / 100 * 17) / 120 AS monthly_payment
    FROM
 house 
  WHERE house_id = $1
  ORDER BY house_id asc;
  `;

  const CALCULATO = `
SELECT 
    (overall_size * house_price_1kv) AS house_price,
    ((overall_size * house_price_1kv) / 100 * 17) AS starting_payment,
    ((overall_size * house_price_1kv) - (overall_size * house_price_1kv) / 100 * 17) / 120 AS monthly_payment
FROM
    house
INNER jOIN 
    bank
    WHERE house_id = $1
  ORDER BY house_id asc;
  `;

const calculator = (house) => fetchAll(CALCULATOR, house)

module.exports = {
    calculator
}