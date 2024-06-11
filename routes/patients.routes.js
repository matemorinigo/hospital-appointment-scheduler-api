const Router = require('express').Router;

const {getPatients,getPatient,createPatient,updatePatient,deletePatient} = require('../controllers/patients.controllers');

const patientsRouter = Router();

patientsRouter.get('/', getPatients);

patientsRouter.get(/\/(\d+)$/, getPatient);

patientsRouter.post('/', createPatient);

patientsRouter.put(/\/(\d+)/, updatePatient);

patientsRouter.delete(/\/(\d+)/, deletePatient);

module.exports = patientsRouter;