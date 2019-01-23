(function(){
    'use strict';     
    angular.module('docApp').factory('MedicineService', MedicineService);
    MedicineService.$inject=['$http', '$q', 'urls'];
    function MedicineService($http, $q, urls){
        var service = {};         
        service.loadAllMedicine = loadAllMedicine;        
        service.addMedicine = addMedicine;
        service.deleteMedicine = deleteMedicine;
        service.editMedicine = editMedicine;
        return service; 

        function loadAllMedicine(){
            var medicineList = $http.get(urls.MEDICINE_SERVICE_API)
                    .then(function(response) {
                        console.log("Ingredients response", response.data);
                        return response.data;
                    }, function(error) {
                        console.log("Error occured while initializing list of all medicine!", error);
                    });
    
                return $q.all([medicineList])
                    .then(function(results) {
                        return {   medicineList: results[0] };        
                    });
        }
        function addMedicine(newMedicine){
            console.log(newMedicine);
            var response = $http.post(urls.MEDICINE_SERVICE_API, newMedicine)
                    .then(function(response){
                        return response.data;
                    }, function(error){
                        console.log("Error occured while adding a new medicine!", error);
                    });
                    return $q.all([response])
                    .then(function(results) {
                        return {   response: results[0] };        
                    });
        }
        function deleteMedicine(id){
            var response = $http.delete(urls.MEDICINE_SERVICE_API+id)
                                .then(function(response){
                                    return response.data;
                                }, function(error){
                                    console.log("Error occured while deleting medicine", error);
                                });
                    return $q.all([response])
                    .then(function(results) {
                        return {   response: results[0] };        
                    });
        }

        function editMedicine(medicine){
            var response = $http.put(urls.MEDICINE_SERVICE_API, medicine)
                    .then(function(response){
                        return response.data;
                    }, function(error){
                        console.log("Error occured while editing a medicine!", error);
                    });
                    return $q.all([response])
                    .then(function(results) {
                        return {   response: results[0] };        
                    });
        }
    }
})();