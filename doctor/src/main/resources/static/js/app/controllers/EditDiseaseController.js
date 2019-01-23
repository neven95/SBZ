(function () {
    'use strict';

    angular
        .module('docApp')
        .controller('EditDiseaseController', EditDiseaseController);

    EditDiseaseController.$inject = ['$state', '$stateParams', 'DiseaseService'];

    function EditDiseaseController($state, $stateParams, DiseaseService) {
        var self = this;
        self.disease = JSON.parse($stateParams.diseaseData);
        console.log(self.disease);
        self.editDisease = editDisease;

        function editDisease() {
            console.log("about to edit disease", self.disease);
            DiseaseService.editDisease(self.disease).then(function () {
                console.log("Disease successfully edited!");
                $state.go('home-abstract.admin-dashboard');
            }, function (errorResponse) {
                console.log("Error while editing disease", errorResponse);
            });
        }

    }

})();