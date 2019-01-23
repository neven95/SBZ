(function () {
    'use strict';

    angular
        .module('docApp')
        .controller('ChooseMedicineController', ChooseMedicineController);

    ChooseMedicineController.$inject = ['$state', '$stateParams', 'initialMedicineData', 'TherapyService'];

    function ChooseMedicineController($state,$stateParams, initialMedicineData, TherapyService) {
        var self = this;
        self.medicineList = initialMedicineData.medicineList;
        self.checkedMedicine = [];

        self.addTherapy = addTherapy;
        self.isEnabled = isEnabled;

        function isEnabled(){
            if(self.checkedMedicine.length > 0){
                return true;
            }else{
                return false;
            }
        }
        function addTherapy(){
            console.log("Patient ID:", $stateParams.idData);
            TherapyService.addTherapy(self.checkedMedicine, $stateParams.idData)
                    .then(function(response){
                        console.log(response.status);
                        if(response.response.status == 201){
                            $state.go('home-abstract.doctor');
                        }else if(response.response.msg1 != undefined){
                            console.log("da li je usao u alertove", response.response.msg1,response.response.msg2, response.msg2)
                            self.alertMsg = response.response.msg1;
                            self.alertMsg2 = response.response.msg2;
                        }
                        console.log("Response from choose medicine controller1",response);
                    }, function(errResponse){
                        self.alertMsg = "Ooups something went wrong on server! Try again later!"
                        console.log("Response from choose medicine controller2",errResponse);
                    });
        }
        
    }

})();