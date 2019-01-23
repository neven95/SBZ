(function () {
    'use strict';

    angular
        .module('docApp')
        .controller('MedicineAllergyController', MedicineAllergyController);

    MedicineAllergyController.$inject = ['$state', '$stateParams', 'initialAllergiesData', 'initialPatientAllergiesData', 'MedicineAllergiesService'];

    function MedicineAllergyController($state, $stateParams, initialAllergiesData, initialPatientAllergiesData, MedicineAllergiesService) {
        var self = this;
        self.allergiesList = initialAllergiesData.medicineList;
        self.patientAllergiesList = initialPatientAllergiesData.patientsAllergiesList;
        console.log("Patient med allergies list:", self.patientAllergiesList);
        console.log("All meds list:", self.allergiesList);
        self.addAllergies = addAllergies;
        self.allergyExists = allergyExists;
        self.addAllergy = addAllergy;
        self.removeAllergies = removeAllergies;

        function allergyExists(medicineId) {
            for (var i = 0; i < self.patientAllergiesList.length; i++) {
                if (self.patientAllergiesList[i].medicineId == medicineId) {
                    return false;
                }
            }
            return true;
        }

        function addAllergies() {
            var allergies = [];
            for (var i = 0; i < self.checkedIngredients.length; i++) {
                allergies.push({
                    "patientId": $stateParams.id,
                    "ingredientId": self.checkedIngredients[i]
                });
            }
            MedicineAllergiesService.addAllergies(allergies).then(function () {
                console.log("New allergies successfully added!");

                $state.go('home-abstract.doctor');
            }, function (errorResponse) {
                console.log("Error while adding new allergies");
            });
        }

        function addAllergy(medicineId) {
            MedicineAllergiesService.addAllergie({
                "patientId": $stateParams.id,
                "medicineId": medicineId
            }).then(function () {
                console.log("New med allergy successfully added!");

                self.patientAllergiesList.push({
                    "patientId": $stateParams.id,
                    "medicineId": medicineId
                });
            }, function (errorResponse) {
                console.log("Error while adding new med allergy", errorResponse);
            });
        }

        function removeAllergies(medicineId) {
            var id;
            console.log(medicineId, self.allergiesList.length);

            for (var i = 0; i < self.patientAllergiesList.length; i++) {
                console.log(self.allergiesList[i].medicineId, ",", medicineId);
                if (self.patientAllergiesList[i].medicineId == medicineId) {
                    console.log("udje i odje");
                    id = self.patientAllergiesList[i].medId;
                }
            }
            MedicineAllergiesService.deleteAllergie(id).then(function () {
                console.log("Med allergie successfully removed");
                for (var i = 0; i < self.patientAllergiesList.length; i++) {
                    if (self.patientAllergiesList[i].medId == id) {
                        console.log("Udje i ovde");
                        self.patientAllergiesList.splice(i, 1);
                    }

                }
            }, function (errorResponse) {
                console.log("Error while removing med allergie", errorResponse);
            });
        }


    }
})();