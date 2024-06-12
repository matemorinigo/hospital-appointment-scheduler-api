# Hospital appointment scheduler API

## Content
1. [Description](#description)
3. [Instalation](#instalation)
4. [Endpoints](#endpoints)
   - [api/v1/patients](#patients)
   - [api/v1/appointments](#appointments)
   - [api/v1/doctors](#doctors)
   - [api/v1/specialities](#specialities)

## Description
This API is about a hospital appointment scheduling system. It has the functionality of adding, updating and delete patients, appointments, doctors and specialities.
At this moment the API version is v1.

## Instalation

## Endpoints
### Patients
#### GET  `api/v1/patients`
When the server receives this request, should answer with status code 200 and return all patients records
>Request 
>```
> curl -X 'GET' \\
> ‘api/v1/patients’ \\
>```
>Response body
>```
> [{
>   "patientID" : 1,
>   "user": "user1",
>   "password": "password1",
>   "name": "name1",
>   "surname": "surname1",
>   "isAdmin": false
> },
> {
>   "patientID" : 2,
>   "user": "user2",
>   "password": "password2",
>   "name": "name2",
>   "surname": "surname2",
>   "isAdmin": true
> }...]
>```
>
#### POST `api/v1/patients`
When the server receives this request, should answer with status code 201 and should create a patient with the request body or should answer with 400 if the body hasn't the necessary parameters
>Request 
>```
> curl -X 'POST' \\
> ‘api/v1/patients’ \\
> -d '{
>      "user": "user1",
>      "password": "password1",
>      "name": "name1",
>      "surname": "surname1",
>      "isAdmin": false 
>    }'
>```

> [!CAUTION]
> Giving the posibility to make admin users by this endpoint could have some risk

>Response body
>```
> [{
>   "patientID" : 1,
>   "user": "user1",
>   "password": "password1",
>   "name": "name1",
>   "surname": "surname1"
> },
> {
>   "patientID" : 2,
>   "user": "user2",
>   "password": "password2",
>   "name": "name2",
>   "surname": "surname2"
> }...]
>```
>
#### GET `api/v1/patients/{patientID}`
#### PUT `api/v1/patients/{patientID}`
#### DELETE `api/v1/patients/{patientID}`
### Appointments
#### GET `api/v1/appointments`
#### POST `api/v1/appointments`
#### GET `api/v1/appointments/{appointmentID}`
#### PUT `api/v1/appointments/{appointmentID}`
#### DELETE `api/v1/appointments/{appointmentID}`
### Doctors
#### GET `api/v1/doctors`
#### POST `api/v1/doctors`
#### GET `api/v1/doctors/{doctorID}`
#### PUT `api/v1/doctors/{doctorID}`
#### DELETE `api/v1/doctors/{doctorID}`
### Specialities
#### GET `api/v1/specialities`
#### POST `api/v1/specialities`
#### GET `api/v1/specialities/{specialityID}`
#### PUT `api/v1/specialities/{specialityID}`
#### DELETE `api/v1/specialities/{specialityID}`
























