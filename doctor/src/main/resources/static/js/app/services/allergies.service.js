(function(){
    'use strict';     
    angular.module('docApp').factory('AllergiesService', AllergiesService);
    AllergiesService.$inject=['$http', '$q', 'urls'];
    function AllergiesService($http, $q, urls){
        var service = {};         
        service.loadAllAllergies = loadAllAllergies;    
        service.loadAllPatientAllergies = loadAllPatientAllergies;    
        service.addAllergies = addAllergies;
        service.deleteAllergie = deleteAllergie;
        service.addAllergie = addAllergie;
        return service; 

        function loadAllAllergies(){
            var allergiesList = $http.get(urls.ALLERGIES_SERVICE_API)
                    .then(function(response) {
                        console.log("Allergies response", response.data);
                        return response.data;
                    }, function(error) {
                        console.log("Error occured while initializing list of all allergies!", error);
                    });
    
                return $q.all([allergiesList])
                    .then(function(results) {
                        return {   allergiesList: results[0] };        
                    });
        }
        function loadAllPatientAllergies(id){
            var patientsAllergiesList = $http.get(urls.ALLERGIES_SERVICE_API+"patient/"+id)
                    .then(function(response) {
                        console.log("Patients Allergies response", response.data);
                        return response.data;
                    }, function(error) {
                        console.log("Error occured while initializing list of patient allergies!", error);
                    });
    
                return $q.all([patientsAllergiesList])
                    .then(function(results) {
                        return {   patientsAllergiesList: results[0] };        
                    });
        }
        function addAllergies(allergies){
            console.log(allergies);
            var response = $http.post(urls.ALLERGIES_SERVICE_API+"all", allergies)
                    .then(function(response){
                        return response.data;
                    }, function(error){
                        console.log("Error occured while adding a new allergies!", error);
                    });
                    return $q.all([response])
                    .then(function(results) {
                        return {   response: results[0] };        
                    });
        }
        function deleteAllergie(id){
            var response = $http.delete(urls.ALLERGIES_SERVICE_API+id)
                                .then(function(response){
                                    return response.data;
                                }, function(error){
                                    console.log("Error occured while deleting allergie", error);
                                });
                    return $q.all([response])
                    .then(function(results) {
                        return {   response: results[0] };        
                    });
        }
        
        function addAllergie(allergie){
            var response = $http.post(urls.ALLERGIES_SERVICE_API, allergie)
                    .then(function(response){
                        return response.data;
                    }, function(error){
                        console.log("Error occured while adding a new allergie!", error);
                    });
                    return $q.all([response])
                    .then(function(results) {
                        return {   response: results[0] };        
                    });
        }
        
    }
})();