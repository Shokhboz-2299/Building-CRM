const { fetch, fetchAll } = require('../../lib/db')

const ALL_COMPANY = `
    SELECT
        *
    FROM
        company
    ORDER BY 
        company_id 
    ASC
`;
const company = () => fetchAll(ALL_COMPANY)

module.exports = {
    company
}