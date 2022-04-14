
const sql = require('mssql');
const sqlConfig = require('./sqlConfig.json');

const selectInfoInDatabase = async function () {
    console.log('dmrr');
    await sql.connect({...sqlConfig, beforeConnect: conn => {
        conn.once('connect', err => { err ? console.error(err) : console.log('mssql connected')});
        conn.once('end', err => { err ? console.error(err) : console.log('mssql disconnected')});
    }});
    const { recordset } = await sql.query`select top 1 cd.CEN_NOMBRE from VITAMINA_LBURGOS.dbo.CENTRO_DT cd`
    console.log('qwerty', recordset[0].CEN_NOMBRE);
}

module.exports = {
    selectInfoInDatabase
}

selectInfoInDatabase()