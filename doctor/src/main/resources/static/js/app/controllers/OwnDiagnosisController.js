(function () {
    'use strict';

    angular
        .module('docApp')
        .controller('OwnDiagnosisController', OwnDiagnosisController);

    OwnDiagnosisController.$inject = ['$state', '$stateParams', 'initialDiseaseData', 'DiagnosisService'];

    function OwnDiagnosisController($state, $stateParams, initialDiseaseData, DiagnosisService) {
        var self = this;

        self.diseaseList = initialDiseaseData.diseasesList;
        self.checkedSymptoms = [];
        self.analyzeList = [];
        self.addDiagnosis = addDiagnosis;
        self.isEnabled = isEnabled;

        function isEnabled() {
            if (self.selectedDisease != undefined) {
                return true;
            } else {
                return false;
            }
        }



        function addDiagnosis() {
            console.log("This is list of checked symptoms:", self.selectedDisease);



            var objToSend = {
                "patientId": parseInt($stateParams.idData),
                "diseaseCode": self.selectedDisease
            }
            console.log("This is object to be sent:", objToSend);

            
            DiagnosisService.saveDiagnosis({
                "patientId": parseInt($stateParams.idData),
                "diseaseCode": self.selectedDisease
            }).then(function (response) {
                console.log(response);
                if (response.response.status === 500) {
                    console.log("Usao medju 500");
                    self.alertMsg = "An error has occured! Try again!";
                } else if (response.response.status === 200) {
                    
                        $state.go('home-abstract.choose-medicine', {
                            idData: $stateParams.idData
                        });
                   

                }
            }, function (errorResponse) {
                self.alertMsg = "An error has occured! Try again!";
                console.log("Ovo je poruka iz diagnosis kontrolera iz error response", errorResponse);
            });
        }
        // self.usersList = initialUserData.usersList;
        // self.ingredientsList = initialIngredientData.ingredientsList;


    }

})();