const { fetch, fetchAll } = require('../../lib/db')

const HOUSE = `
    SELECT
        *
    FROM
        house
    WHERE
    complex_id = $1
`;
const house = (complex) => fetchAll(HOUSE, complex)

module.exports = {
    house
}