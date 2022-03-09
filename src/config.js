const PORT = process.env.PORT || 9000

const connection = {
    connectionString: 'postgres://xkwnpyqk:N6_PAiH2YCfXXvj-IM3PwMilR0OXcSk8@jelani.db.elephantsql.com/xkwnpyqk'
    // connectionString: 'postgres://postgres:shokhboz99@localhost:5432/building'

}

module.exports = {
    connection,
    PORT
}