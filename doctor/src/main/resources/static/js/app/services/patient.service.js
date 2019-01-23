(function(){
    'use strict';     
    angular.module('docApp').factory('PatientService', PatientService);
    PatientService.$inject=['$http', '$q', 'urls'];
    function PatientService($http, $q, urls){
        var service = {};         
        service.loadAllPatients = loadAllPatients;        
        service.addPatient = addPatient;
        service.deletePatient = deletePatient;
        service.editPatient = editPatient;
        return service; 

        function loadAllPatients(){
            var patientsList = $http.get(urls.PATIENT_SERVICE_API)
                    .then(function(response) {
                        console.log("Patien service response", response.data);
                        return response.data;
                    }, function(error) {
                        console.log("Error occured while initializing list of all patients!");
                    });
    
                return $q.all([patientsList])
                    .then(function(results) {
                        return {   patientsList: results[0] };        
                    });
        }
        function addPatient(newPatient){
            var response = $http.post(urls.PATIENT_SERVICE_API, newPatient)
                    .then(function(response){
                        return response.data;
                    }, function(error){
                        console.log("Error occured while adding a new patient!");
                    });
                    return $q.all([response])
                    .then(function(results) {
                        return {   response: results[0] };        
                    });
        }
        function deletePatient(id){
            var response = $http.delete(urls.PATIENT_SERVICE_API+id)
                                .then(function(){
                                    return response.data;
                                }, function(){
                                    console.log("Error occured while deleting patient");
                                });
                    return $q.all([response])
                    .then(function(results) {
                        return {   response: results[0] };        
                    });
        }

        function editPatient(patient){
            var response = $http.put(urls.PATIENT_SERVICE_API, patient)
                    .then(function(response){
                        return response.data;
                    }, function(error){
                        console.log("Error occured while editing an patient!");
                    });
                    return $q.all([response])
                    .then(function(results) {
                        return {   response: results[0] };        
                    });
        }
    }
})();