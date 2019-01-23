(function () {
    'use strict';

    angular
        .module('docApp')
        .controller('DiagnosisController', DiagnosisController);

    DiagnosisController.$inject = ['$state', '$stateParams', 'initialSymptomsData', 'DiagnosisService'];

    function DiagnosisController($state, $stateParams, initialSymptomsData, DiagnosisService) {
        var self = this;

        self.symptomList = initialSymptomsData.symptomsList;
        self.checkedSymptoms = [];
        self.analyzeList = [];
        self.processSymptoms = processSymptoms;
        self.analyzeSymptoms = analyzeSymptoms;
        self.isEnabled = isEnabled;
        self.patID = $stateParams.id;
        function isEnabled() {
            if (self.checkedSymptoms.length > 0) {
                return true;
            } else {
                return false;
            }
        }

        function analyzeSymptoms() {
            var symptoms = [];
            for (var i = 0; i < self.checkedSymptoms.length; i++) {
                for (var j = 0; j < self.symptomList.length; j++) {
                    if (self.checkedSymptoms[i] == self.symptomList[j].symId.toString()) {

                        symptoms.push({
                            // "diseaseId" : parseInt($stateParams.id),
                            "symId": self.symptomList[j].symId,
                            "symCode": self.symptomList[j].symCode
                        });
                    }
                }
            }
            console.log("This is list of checked symptoms:", symptoms);
            var objToSend = {
                "patientId": $stateParams.id,
                "symptoms": symptoms
            }
            console.log("This is object to be sent:", objToSend);
            self.analyzeList = [];
            DiagnosisService.analyzeSymptoms(objToSend)
                .then(function (response) {
                    console.log(response.response);
                    if (response.response.status === 500) {
                        console.log("Usao medju 500");
                        self.alertMsg = "An error has occured! Try again!";
                    } else if (response.response.status === 200) {
                        console.log(response.data);
                        var len = response.response.data.length;
                        for(var i = 0; i < len; i++){

                        }
                        self.analyzeListNames = Object.keys(response.response.data);
                        self.analyzeListValues = Object.values(response.response.data);
                        for(var i = 0; i< self.analyzeListNames.length; i++){
                            self.analyzeList.push({
                                "name": self.analyzeListNames[i],
                                "value": self.analyzeListValues[i]
                            });
                        }
                       

                    }
                }, function (errorResponse) {
                    self.alertMsg = "An error has occured! Try again!";
                    console.log("Ovo je poruka iz diagnosis kontrolera iz error response", errorResponse);
                });
        }

        function processSymptoms() {
            console.log("This is list of checked symptoms:", self.checkedSymptoms);
            var symptoms = [];
            for (var i = 0; i < self.checkedSymptoms.length; i++) {
                for (var j = 0; j < self.symptomList.length; j++) {
                    if (self.checkedSymptoms[i] == self.symptomList[j].symId.toString()) {

                        symptoms.push({
                            // "diseaseId" : parseInt($stateParams.id),
                            "symId": self.symptomList[j].symId,
                            "symCode": self.symptomList[j].symCode
                        });
                    }
                }
            }
            console.log("This is list of checked symptoms:", symptoms);

            var objToSend = {
                "patientId": $stateParams.id,
                "symptoms": symptoms
            }
            console.log("This is object to be sent:", objToSend);


            DiagnosisService.processSymptoms(objToSend).then(function (response) {
                console.log("THIS IS RESPONSE FROM RESONER:", response.processResponse.status);
                if (response.processResponse.status === 500) {
                    console.log("Usao medju 500");
                    self.alertMsg = "An error has occured! Try again!";
                } else if (response.processResponse.status === 200) {
                    console.log(response.processResponse.data.success, response.processResponse.data);
                    if (response.processResponse.data.success) {
                        $state.go('home-abstract.process-diagnosis-dialog', {
                            diagData: JSON.stringify(response.processResponse.data)
                        });
                    } else {
                        self.alertMsg = "Those symptoms didn't match any disease! Try other symptoms!";

                    }

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