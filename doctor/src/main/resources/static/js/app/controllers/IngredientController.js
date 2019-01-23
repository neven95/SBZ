(function () {
    'use strict';
 
    angular
        .module('docApp')
        .controller('IngredientController', IngredientController);
 
    IngredientController.$inject = ['$state', 'IngredientService'];
    function IngredientController($state, IngredientService) {
        var self = this;
        
        self.addIngredient = addIngredient;
        function addIngredient(){
            console.log("about to add a new ingredient", self.newIngredient);
           
            IngredientService.addIngredient(self.newIngredient).then(function(){
                console.log();

                $state.go('home-abstract.admin-dashboard');
            }, function(errorResponse){
                console.log("Error while adding new ingredient", errorResponse);
            });
        }
    }

})();