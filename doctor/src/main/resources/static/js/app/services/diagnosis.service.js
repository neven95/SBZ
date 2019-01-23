(function () {
    'use strict';
    angular.module('docApp').factory('DiagnosisService', DiagnosisService);
    DiagnosisService.$inject = ['$http', '$q', 'urls'];

    function DiagnosisService($http, $q, urls) {
        var service = {};
        service.processSymptoms = processSymptoms;
        service.saveDiagnosis = saveDiagnosis;
        service.analyzeSymptoms = analyzeSymptoms;
        service.loadAllUsersDiagnosis = loadAllUsersDiagnosis;
        return service;

        function loadAllUsersDiagnosis() {
            var response = $http.get(urls.DIAGNOSIS_SERVICE_API + "mine")
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

        function saveDiagnosis(diagnosis) {
            console.log(diagnosis);
            var response = $http.post(urls.DIAGNOSIS_SERVICE_API + "process/mine", diagnosis)
                .then(function (response) {
                    console.log("Diagnosis successfully saved!");
                    return response;
                }, function (error) {
                    console.log("An error occured while saving diagnosis", error);
                    return error;
                });
            return $q.all([response])
                .then(function (results) {
                    return {
                        response: results[0]
                    }
                });
        }

        function analyzeSymptoms(symptoms) {
            var response = $http.post(urls.DIAGNOSIS_SERVICE_API + "process/all", symptoms)
                .then(function (response) {
                    console.log("Diagnosis successfully analyzed!", response);
                    return response;
                }, function (error) {
                    console.log("An error occured while analyzing diagnosis", error);
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