(function () {
    'use strict';

    angular
        .module('docApp')
        .controller('EditMedicineController', EditMedicineController);

    EditMedicineController.$inject = ['$state', '$stateParams', 'MedicineService'];

    function EditMedicineController($state, $stateParams, MedicineService) {
        var self = this;
        self.medicine = JSON.parse($stateParams.medicineData);
        console.log(self.medicine);
        self.editMedicine = editMedicine;

        function editMedicine() {
            if(self.medicine.medicineType === "Antibiotic"){
                self.medicine.medicineType = 'A';
            }else if(self.medicine.medicineType === "Painkiller"){
                self.medicine.medicineType = 'P';
            }else{
                self.medicine.medicineType = 'O';
            }
            console.log("about to edit medicine", self.medicine);
            MedicineService.editMedicine(self.medicine).then(function () {
                console.log("Medicine successfully edited!");
                $state.go('home-abstract.admin-dashboard');
            }, function (errorResponse) {
                console.log("Error while editing medicine", errorResponse);
            });
        }

    }

})();