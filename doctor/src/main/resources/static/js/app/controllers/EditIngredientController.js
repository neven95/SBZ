(function () {
    'use strict';
 
    angular
        .module('docApp')
        .controller('EditIngredientController', EditIngredientController);
 
        EditIngredientController.$inject = ['$state', '$stateParams', 'IngredientService'];
    function EditIngredientController($state, $stateParams, IngredientService) {
        var self = this;
        self.ingredient = JSON.parse($stateParams.ingredientData);
        console.log(self.ingredient);
        self.editIngredient = editIngredient;
        function editIngredient(){
            console.log("about to edit ingredient", self.ingredient);
            IngredientService.editIngredient(self.ingredient).then(function(){
                console.log("Ingredient successfully edited!");
                $state.go('home-abstract.admin-dashboard');
            }, function(errorResponse){
                console.log("Error while editing ingredient", errorResponse);
            });
        }
       
    }

})();