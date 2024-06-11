const getConnection = require('../database/connection').getConnection;
async function getPatients(req,res){
    const pool = await getConnection();
}

function getPatient(req,res){
    res.send(`Getting the patient with the id ${req.params[0]}`);
}

function createPatient(req,res){
    res.send('Creating a new patient');
}

function updatePatient(req,res){
    res.send(`Updating the patient with the id ${req.params[0]}`);
}

function deletePatient(req,res){
    res.send(`Deleting the patient with the id ${req.params[0]}`);
}

module.exports = {getPatients,getPatient,createPatient,updatePatient,deletePatient};