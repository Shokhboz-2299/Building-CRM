const { fetch, fetchAll } = require('../../lib/db')

const COMPLEX = `
    SELECT
        *
    FROM
        complex
    WHERE
    company_id = $1
`;
const complex = (company) => fetchAll(COMPLEX, company)

module.exports = {
    complex
}