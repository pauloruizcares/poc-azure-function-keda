
const { selectInfoInDatabase } = require('./query')

module.exports = async function(context, mySbMsg) {
    try {
        await selectInfoInDatabase()
    } catch (err) {
        console.error('pcrc', err)
    }
};