(function () {
    'use strict';

    angular
        .module('docApp')
        .controller('EditPatientController', EditPatientController);

    EditPatientController.$inject = ['$state', '$stateParams', 'PatientService'];

    function EditPatientController($state, $stateParams, PatientService) {
        var self = this;
        self.patient = JSON.parse($stateParams.patientData);
        console.log(self.patient);
        self.editPatient = editPatient;

        function editPatient() {
            console.log("about to edit patient", self.patient);
            
            PatientService.editPatient(self.patient).then(function () {
                console.log("Patient successfully edited!");
                $state.go('home-abstract.doctor');
            }, function (errorResponse) {
                console.log("Error while editing patient", errorResponse);
            });
        }

    }

})();