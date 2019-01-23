(function(){
    'use strict';     
    angular.module('docApp').factory('IngredientService', IngredientService);
    IngredientService.$inject=['$http', '$q', 'urls'];
    function IngredientService($http, $q, urls){
        var service = {};         
        service.loadAllIngredients = loadAllIngredients;        
        service.addIngredient = addIngredient;
        service.deleteIngredient = deleteIngredient;
        service.editIngredient = editIngredient;
        return service; 

        function loadAllIngredients(){
            var ingredientsList = $http.get(urls.INGREDIENTS_SERVICE_API)
                    .then(function(response) {
                        console.log("Ingredients response", response.data);
                        return response.data;
                    }, function(error) {
                        console.log("Error occured while initializing list of all ingredients!");
                    });
    
                return $q.all([ingredientsList])
                    .then(function(results) {
                        return {   ingredientsList: results[0] };        
                    });
        }
        function addIngredient(newIngredient){
            console.log(newIngredient);
            var response = $http.post(urls.INGREDIENTS_SERVICE_API, newIngredient)
                    .then(function(response){
                        return response.data;
                    }, function(error){
                        console.log("Error occured while adding a new ingredient!", error);
                    });
                    return $q.all([response])
                    .then(function(results) {
                        return {   response: results[0] };        
                    });
        }
        function deleteIngredient(id){
            var response = $http.delete(urls.INGREDIENTS_SERVICE_API+id)
                                .then(function(response){
                                    return response.data;
                                }, function(error){
                                    console.log("Error occured while deleting ingredient", error);
                                });
                    return $q.all([response])
                    .then(function(results) {
                        return {   response: results[0] };        
                    });
        }

        function editIngredient(ingredient){
            var response = $http.put(urls.INGREDIENTS_SERVICE_API, ingredient)
                    .then(function(response){
                        return response.data;
                    }, function(error){
                        console.log("Error occured while editing an ingredient!");
                    });
                    return $q.all([response])
                    .then(function(results) {
                        return {   response: results[0] };        
                    });
        }
    }
})();