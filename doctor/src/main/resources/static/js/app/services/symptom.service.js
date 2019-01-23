(function(){
    'use strict';     
    angular.module('docApp').factory('SymptomService', SymptomService);
    SymptomService.$inject=['$http', '$q', 'urls'];
    function SymptomService($http, $q, urls){
        var service = {};         
        service.loadAllSymptoms = loadAllSymptoms;        
        service.addSymptom = addSymptom;
        service.deleteSymptom = deleteSymptom;
        service.editSymptom = editSymptom;
        return service; 

        function loadAllSymptoms(){
            var symptomsList = $http.get(urls.SYMPTOMS_SERVICE_API)
                    .then(function(response) {
                        console.log("Ingredients response", response.data);
                        return response.data;
                    }, function(error) {
                        console.log("Error occured while initializing list of all SYMPTOMS!", error);
                    });
    
                return $q.all([symptomsList])
                    .then(function(results) {
                        return {   symptomsList: results[0] };        
                    });
        }
        function addSymptom(newSymptom){
            console.log(newSymptom);
            var response = $http.post(urls.SYMPTOMS_SERVICE_API, newSymptom)
                    .then(function(response){
                        return response.data;
                    }, function(error){
                        console.log("Error occured while adding a new symptom!", error);
                    });
                    return $q.all([response])
                    .then(function(results) {
                        return {   response: results[0] };        
                    });
        }
        function deleteSymptom(id){
            var response = $http.delete(urls.SYMPTOMS_SERVICE_API+id)
                                .then(function(response){
                                    return response.data;
                                }, function(error){
                                    console.log("Error occured while deleting symptom", error);
                                });
                    return $q.all([response])
                    .then(function(results) {
                        return {   response: results[0] };        
                    });
        }

        function editSymptom(symptom){
            var response = $http.put(urls.SYMPTOMS_SERVICE_API, symptom)
                    .then(function(response){
                        return response.data;
                    }, function(error){
                        console.log("Error occured while editing a symptom!", error);
                    });
                    return $q.all([response])
                    .then(function(results) {
                        return {   response: results[0] };        
                    });
        }
    }
})();