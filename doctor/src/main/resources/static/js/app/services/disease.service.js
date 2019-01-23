(function(){
    'use strict';     
    angular.module('docApp').factory('DiseaseService', DiseaseService);
    DiseaseService.$inject=['$http', '$q', 'urls'];
    function DiseaseService($http, $q, urls){
        var service = {};         
        service.loadAllDiseases = loadAllDiseases;        
        service.addDisease = addDisease;
        service.deleteDisease = deleteDisease;
        service.editDisease = editDisease;
        return service; 

        function loadAllDiseases(){
            var diseasesList = $http.get(urls.DISEASES_SERVICE_API)
                    .then(function(response) {
                        console.log("Diseases response", response.data);
                        return response.data;
                    }, function(error) {
                        console.log("Error occured while initializing list of all diseases!", error);
                    });
    
                return $q.all([diseasesList])
                    .then(function(results) {
                        return {   diseasesList: results[0] };        
                    });
        }

        function addDisease(newDisease){
            console.log(newDisease);
            var response = $http.post(urls.DISEASES_SERVICE_API, newDisease)
                    .then(function(response){
                        return response.data;
                    }, function(error){
                        console.log("Error occured while adding a new disease!", error);
                    });
                    return $q.all([response])
                    .then(function(results) {
                        return {   response: results[0] };        
                    });
        }
        function deleteDisease(id){
            var response = $http.delete(urls.DISEASES_SERVICE_API+id)
                                .then(function(response){
                                    return response.data;
                                }, function(error){
                                    console.log("Error occured while deleting disease", error);
                                });
                    return $q.all([response])
                    .then(function(results) {
                        return {   response: results[0] };        
                    });
        }

        function editDisease(disease){
            var response = $http.put(urls.DISEASES_SERVICE_API, disease)
                    .then(function(response){
                        return response.data;
                    }, function(error){
                        console.log("Error occured while editing a disease!", error);
                    });
                    return $q.all([response])
                    .then(function(results) {
                        return {   response: results[0] };        
                    });
        }
    }
})();