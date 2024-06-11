const sql = require('mssql');

const dbSettings = {
    server: 'DESKTOP-FISKM46\\SQLEXPRESS',
    database: 'hospitalAppointments',
    user:'hospitalAppSOLVD',
    password:'1234',
    options:{
        integratedSecurity: true,
        trustServerCertificate: true
    },
    connectionTimeout: 30000
};

const getConnection = async function(){
    try{
        return await sql.connect(dbSettings);
    }catch (e){
        console.error(e)
    }
}


module.exports = getConnection;

