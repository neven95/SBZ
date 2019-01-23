(function () {
    'use strict';

    angular
        .module('docApp')
        .controller('MedicineController', MedicineController);

    MedicineController.$inject = ['$state', 'MedicineService'];

    function MedicineController($state, MedicineService) {
        var self = this;

        self.addMedicine = addMedicine;

        function addMedicine() {
            console.log("about to add a new medicine", self.newMedicine);
            if(self.newMedicine.medicineType === "Antibiotic"){
                self.newMedicine.medicineType = 'A';
            }else if(self.newMedicine.medicineType === "Painkiller"){
                self.newMedicine.medicineType = 'P';
            }else{
                self.newMedicine.medicineType = 'O';
            }
            MedicineService.addMedicine(self.newMedicine).then(function () {
                $state.go('home-abstract.admin-dashboard');
            }, function (errorResponse) {
                console.log("Error while adding new medicine", errorResponse);
            });
        }
    }

})();