(function () {
    'use strict';

    angular
        .module('docApp')
        .controller('PatientController', PatientController);

    PatientController.$inject = ['$state', 'PatientService'];

    function PatientController($state, PatientService) {
        var self = this;
        self.addPatient = addPatient;

        function addPatient() {
            console.log("about to add a new patient", self.newPatient);
            
            PatientService.addPatient(self.newPatient).then(function () {
                console.log("New patient successfully created!");

                $state.go('home-abstract.doctor');
            }, function (errorResponse) {
                console.log("Error while adding new patient", errorResponse);
            });
        }

    }

})();