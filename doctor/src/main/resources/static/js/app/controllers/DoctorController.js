(function () {
    'use strict';

    angular
        .module('docApp')
        .controller('DoctorController', DoctorController);

        DoctorController.$inject = ['$state', 'initialPatientData','initialDiagnosisData','initialTherapyData', 'PatientService'];

    function DoctorController($state, initialPatientData,initialDiagnosisData,initialTherapyData, PatientService) {
        var self = this;
        self.patientsList = initialPatientData.patientsList;
        console.log(initialDiagnosisData.response.data);
        self.diagnosisList = initialDiagnosisData.response.data;
        self.therapyList = initialTherapyData.response.data;

        self.editPatient = editPatient;
        self.deletePatient = deletePatient;
        function deletePatient(id) {
            console.log("About to delete user with id:", id);
            PatientService.deletePatient(id).then(function (response) {
                for (var i = 0; i < self.patientsList.length; i++) {
                    if (self.patientsList[i].patientId == id) {
                        self.patientsList.splice(i, 1);
                    }
                }
            }, function (errResponse) {
                console.log("Error occured while deleting patient", errResponse);
            });
        }

        function editPatient(id) {
            for (var i = 0; i < self.patientsList.length; i++) {
                if (self.patientsList[i].patientId == id) {
                    $state.go('home-abstract.edit-patient', {
                        patientData: JSON.stringify(self.patientsList[i])
                    });
                }
            }

        }
    }

})();