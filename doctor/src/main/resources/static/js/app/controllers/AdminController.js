(function () {
    'use strict';

    angular
        .module('docApp')
        .controller('AdminController', AdminController);

    AdminController.$inject = ['$state', 'initialUserData', 'initialIngredientData', 'initialSymptomData', 'initialDiseaseData',
                                'initialMedicineData', 'UserService', 'SymptomService', 'IngredientService', 'DiseaseService', 'MedicineService'];

    function AdminController($state, initialUserData, initialIngredientData, initialSymptomData, initialDiseaseData, initialMedicineData,
                             UserService, SymptomService, IngredientService, DiseaseService, MedicineService) {
        var self = this;
        self.usersList = initialUserData.usersList;
        self.ingredientsList = initialIngredientData.ingredientsList;
        self.symptomsList = initialSymptomData.symptomsList;
        self.diseasesList = initialDiseaseData.diseasesList;
        self.medicineList = initialMedicineData.medicineList;

        self.deleteUser = deleteUser;
        self.editUser = editUser;
        self.deleteIngredient = deleteIngredient;
        self.editIngredient = editIngredient;
        self.deleteSymptom = deleteSymptom;
        self.editSymptom = editSymptom;
        self.deleteDisease = deleteDisease;
        self.editDisease = editDisease;
        self.deleteMedicine = deleteMedicine;
        self.editMedicine = editMedicine

        function deleteUser(id) {
            console.log("About to delete user with id:", id);
            UserService.deleteUser(id).then(function (response) {
                for (var i = 0; i < self.usersList.length; i++) {
                    if (self.usersList[i].userId == id) {
                        self.usersList.splice(i, 1);
                    }
                }
            }, function (errResponse) {
                console.log("Error occured while deleting user");
            });
        }

        function editUser(id) {
            for (var i = 0; i < self.usersList.length; i++) {
                if (self.usersList[i].userId == id) {
                    $state.go('home-abstract.edit-user', {
                        userData: JSON.stringify(self.usersList[i])
                    });
                }
            }

        }

        function deleteIngredient(id) {
            console.log("About to delete ingredient with id:", id);
            IngredientService.deleteIngredient(id).then(function (response) {
                for (var i = 0; i < self.ingredientsList.length; i++) {
                    if (self.ingredientsList[i].ingredientId == id) {
                        self.ingredientsList.splice(i, 1);
                    }
                }
            }, function (errResponse) {
                console.log("Error occured while deleting ingredient", errResponse);
            });
        }

        function editIngredient(id) {
            for (var i = 0; i < self.ingredientsList.length; i++) {
                if (self.ingredientsList[i].ingredientId == id) {
                    $state.go('home-abstract.edit-ingredient', {
                        ingredientData: JSON.stringify(self.ingredientsList[i])
                    });
                }
            }

        }

        function deleteSymptom(id) {
            console.log("About to delete symptom with id:", id);
            SymptomService.deleteSymptom(id).then(function (response) {
                for (var i = 0; i < self.symptomsList.length; i++) {
                    if (self.symptomsList[i].symId == id) {
                        self.symptomsList.splice(i, 1);
                    }
                }
            }, function (errResponse) {
                console.log("Error occured while deleting symptom", errResponse);
            });
        }

        function editSymptom(id) {
            for (var i = 0; i < self.symptomsList.length; i++) {
                if (self.symptomsList[i].symId == id) {
                    $state.go('home-abstract.edit-symptom', {
                        symptomData: JSON.stringify(self.symptomsList[i])
                    });
                }
            }

        }

        function deleteDisease(id) {
            console.log("About to delete disease with id:", id);
            DiseaseService.deleteDisease(id).then(function (response) {
                for (var i = 0; i < self.diseasesList.length; i++) {
                    if (self.diseasesList[i].diseaseId == id) {
                        self.diseasesList.splice(i, 1);
                    }
                }
            }, function (errResponse) {
                console.log("Error occured while deleting disease", errResponse);
            });
        }

        function editDisease(id) {
            for (var i = 0; i < self.diseasesList.length; i++) {
                if (self.diseasesList[i].diseaseId == id) {
                    $state.go('home-abstract.edit-disease', {
                        diseaseData: JSON.stringify(self.diseasesList[i])
                    });
                }
            }

        }
        function deleteMedicine(id) {
            console.log("About to delete disease with id:", id);
            MedicineService.deleteMedicine(id).then(function (response) {
                for (var i = 0; i < self.medicineList.length; i++) {
                    if (self.medicineList[i].medicineId == id) {
                        self.medicineList.splice(i, 1);
                    }
                }
            }, function (errResponse) {
                console.log("Error occured while deleting medicine", errResponse);
            });
        }
        function editMedicine(id) {
            for (var i = 0; i < self.medicineList.length; i++) {
                if (self.medicineList[i].medicineId == id) {
                    $state.go('home-abstract.edit-medicine', {
                        medicineData: JSON.stringify(self.medicineList[i])
                    });
                }
            }

        }
    }

})();