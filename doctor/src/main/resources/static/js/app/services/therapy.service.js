(function () {
    'use strict';
    angular.module('docApp').factory('TherapyService', TherapyService);
    TherapyService.$inject = ['$http', '$q', 'urls'];

    function TherapyService($http, $q, urls) {
        var service = {};
        service.addTherapy = addTherapy;
        service.loadAllUsersTherapies = loadAllUsersTherapies;
        return service;

        function loadAllUsersTherapies(){
            var response = $http.get(urls.THERAPY_SERVICE_API + "mine")
            .then(function (response) {
                console.log("response", response)
                return response;
            }, function (error) {
                console.log("error", error);
                return error;
            });
        return $q.all([response])
            .then(function (results) {
                return {
                    response: results[0]
                }
            });
        }
        function addTherapy(meds, id) {
            var response = $http.post(urls.THERAPY_SERVICE_API + "check", meds)
                .then(function (data) {
                        console.log("data", data);

                        var toSend = [];
                        if ((data.data.ingredients.length == 0 && data.data.medicine.length == 0)) {
                            for (var i = 0; i < meds.length; i++) {
                                toSend.push({
                                    "medicineId": meds[i],
                                    "patientId": id,
                                    "therapyDate": new Date().getTime()
                                });
                            }
                            console.log("toSend......", toSend)
                            var response2 = $http.post(urls.THERAPY_SERVICE_API + "all", toSend)
                                .then(function (data2) {
                                    console.log("data2", data2);
                                    return data2;
                                }, function (errData) {
                                    console.log(errData);
                                });
                                return response2
                        } else {
                            var toprint = "";
                            var toprint2 = "";
                            if (data.data.ingredients.length > 0) {
                                toprint = "Patient is allergic to ingredients: ";
                                data.data.ingredients.forEach(function (item, index, array) {
                                    if (index == 0) {
                                        toprint += " " + item;
                                    } else {
                                        toprint += ", " + item;
                                    }
                                });
                            }
                            if(data.data.medicine.length > 0){
                                toprint2 = "Patient is allergic to medicine: ";
                                data.data.medicine.forEach(function(item, index, array) {
                                    if(index == 0){
                                        toprint2 += " " + item;
                                    }else{
                                        toprint2 += ", " + item;
                                    }
                                });
                            }
                            return {
                                msg1: toprint,
                                msg2: toprint2
                            };
                        }

                    },
                    function (error) {
                        console.log("An error occured while saving therapy", error);
                        return error;
                    });
            return $q.all([response])
                .then(function (results) {
                    return {
                        response: results[0]
                    }
                });
        }

        function processSymptoms(symptoms) {
            var processResponse = $http.post(urls.DIAGNOSIS_SERVICE_API + "process", symptoms)
                .then(function (response) {
                    console.log("Process diagnosis response", response.data);
                    return response;
                }, function (error) {
                    console.log("Error occured while processing list of  symptoms!", error);
                    return error;
                });

            return $q.all([processResponse])
                .then(function (results) {
                    return {
                        processResponse: results[0]
                    };
                });
        }

    }
})();