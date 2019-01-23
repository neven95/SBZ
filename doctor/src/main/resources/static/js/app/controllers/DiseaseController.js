(function () {
    'use strict';
 
    angular
        .module('docApp')
        .controller('DiseaseController', DiseaseController);
 
        DiseaseController.$inject = ['$state', 'DiseaseService'];
    function DiseaseController($state, DiseaseService) {
        var self = this;
        
        self.addDisease = addDisease;
        function addDisease(){
            console.log("about to add a new symptom", self.newDisease);
           
            DiseaseService.addDisease(self.newDisease).then(function(){                
                $state.go('home-abstract.admin-dashboard');
            }, function(errorResponse){
                console.log("Error while adding new disease", errorResponse);
            });
        }
    }

})();