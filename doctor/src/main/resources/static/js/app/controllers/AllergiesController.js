(function () {
    'use strict';

    angular
        .module('docApp')
        .controller('AllergiesController', AllergiesController);

    AllergiesController.$inject = ['$state', '$stateParams', 'initialAllergiesData', 'initialPatientAllergiesData', 'AllergiesService'];

    function AllergiesController($state, $stateParams, initialAllergiesData, initialPatientAllergiesData, AllergiesService) {
        var self = this;
        self.allergiesList = initialAllergiesData.ingredientsList;
        self.patientAllergiesList = initialPatientAllergiesData.patientsAllergiesList;
        self.addAllergies = addAllergies;
        self.allergyExists = allergyExists;
        self.addAllergy = addAllergy;
        self.removeAllergies = removeAllergies;
        
        function allergyExists(ingredientId) {
            for (var i = 0; i < self.patientAllergiesList.length; i++) {
                if (self.patientAllergiesList[i].ingredientId == ingredientId) {
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
            AllergiesService.addAllergies(allergies).then(function () {
                console.log("New allergies successfully added!");

                $state.go('home-abstract.doctor');
            }, function (errorResponse) {
                console.log("Error while adding new allergies");
            });
        }

        function addAllergy(ingredientId) {



            AllergiesService.addAllergie({
                "patientId": $stateParams.id,
                "ingredientId": ingredientId
            }).then(function () {
                console.log("New allergy successfully added!");

                self.patientAllergiesList.push({
                    "patientId": $stateParams.id,
                    "ingredientId": ingredientId
                });
            }, function (errorResponse) {
                console.log("Error while adding new allergy", errorResponse);
            });
        }

        function removeAllergies(ingredientId) {
            var id;
            console.log(ingredientId, self.allergiesList.length);

            for(var i = 0; i < self.patientAllergiesList.length; i++){
                console.log(self.allergiesList[i].ingredientId,",",ingredientId);
                if(self.patientAllergiesList[i].ingredientId == ingredientId){
                    console.log("udje i odje");
                    id = self.patientAllergiesList[i].allergyId;
                }
            }
            AllergiesService.deleteAllergie(id).then(function () {
                console.log("Allergie successfully removed");
                for (var i = 0; i < self.patientAllergiesList.length; i++) {
                    if (self.patientAllergiesList[i].allergyId == id) {
                        console.log("Udje i ovde");
                        self.patientAllergiesList.splice(i, 1);
                    }

                }
            }, function (errorResponse) {
                console.log("Error while removing allergie", errorResponse);
            });
        }


    }
})();