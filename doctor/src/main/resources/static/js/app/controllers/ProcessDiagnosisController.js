(function () {
    'use strict';

    angular
        .module('docApp')
        .controller('ProcessDiagnosisDialog', ProcessDiagnosisDialog);

    ProcessDiagnosisDialog.$inject = ['$state', '$stateParams', 'DiagnosisService'];

    function ProcessDiagnosisDialog($state, $stateParams, DiagnosisService) {
        var self = this;
        self.diagData = JSON.parse($stateParams.diagData);

        self.saveDiagnosis = saveDiagnosis;
        console.log("Ovo je datum", new Date().getDate());
        function saveDiagnosis() {
            var objectToSend = JSON.stringify({
                "patientId": self.diagData.patientId,
                "diseaseId": self.diagData.diseaseId,
                "diagnosisDate": new Date()
            });
            DiagnosisService.saveDiagnosis(objectToSend)
                .then(function(response){
                    console.log("Odgovor iz kontrolera za procesiranje", response, response.response.status);
                    if(response.response.status === 201){
                        $state.go('home-abstract.choose-medicine',{idData : self.diagData.patientId});
                    }
                }, function(errResponse){

                })
        }

    }

})();