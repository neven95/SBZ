(function () {
    'use strict';
 
    angular
        .module('docApp')
        .controller('SymptomController', SymptomController);
 
        SymptomController.$inject = ['$state', 'SymptomService'];
    function SymptomController($state, SymptomService) {
        var self = this;
        
        self.addSymptom = addSymptom;
        function addSymptom(){
            console.log("about to add a new symptom", self.newSymptom);
           
            SymptomService.addSymptom(self.newSymptom).then(function(){                
                $state.go('home-abstract.admin-dashboard');
            }, function(errorResponse){
                console.log("Error while adding new symptom", errorResponse);
            });
        }
    }

})();