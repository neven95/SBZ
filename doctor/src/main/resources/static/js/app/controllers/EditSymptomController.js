(function () {
    'use strict';
 
    angular
        .module('docApp')
        .controller('EditSymptomController', EditSymptomController);
 
        EditSymptomController.$inject = ['$state', '$stateParams', 'SymptomService'];
    function EditSymptomController($state, $stateParams, SymptomService) {
        var self = this;
        self.symptom = JSON.parse($stateParams.symptomData);
        console.log(self.symptom);
        self.editSymptom = editSymptom;
        function editSymptom(){
            console.log("about to edit symptom", self.symptom);
            SymptomService.editSymptom(self.symptom).then(function(){
                console.log("Symptom successfully edited!");
                $state.go('home-abstract.admin-dashboard');
            }, function(errorResponse){
                console.log("Error while editing symptom", errorResponse);
            });
        }
       
    }

})();