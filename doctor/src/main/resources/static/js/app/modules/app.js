var app = angular.module('docApp', ['ui.router', 'ngMaterial', 'ngMessages', 'ngCookies', 'ui.bootstrap','dialogs']);
app.run(function ($rootScope, $location, $http, $cookies) {

    $http.defaults.headers.get = {
        'Content-type': 'application/json'
    };

    $rootScope.globals = $cookies.getObject('globals') || {};
    console.log($cookies.getAll());
    console.log($cookies.getObject('globals'));
    console.log($rootScope.globals);
    if ($rootScope.globals.currentUser) {
        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
    }


});
app.constant('urls', {
    USERS_SERVICE_API: 'http://localhost:8080/user/',
    INGREDIENTS_SERVICE_API: 'http://localhost:8080/ingredient/',
    SYMPTOMS_SERVICE_API: 'http://localhost:8080/symptom/',
    LOGIN_SERVICE_API: 'http://localhost:8080/login',
    DISEASES_SERVICE_API: 'http://localhost:8080/disease/',
    MEDICINE_SERVICE_API: 'http://localhost:8080/medicine/',
    PATIENT_SERVICE_API: 'http://localhost:8080/patient/',
    ALLERGIES_SERVICE_API: 'http://localhost:8080/allergy/',
    MEDICINE_ALLERGIES_SERVICE_API: 'http://localhost:8080/med-allergy/',
    DIAGNOSIS_SERVICE_API: 'http://localhost:8080/diagnosis/',
    THERAPY_SERVICE_API: 'http://localhost:8080/therapy/'
});

app.config(['$stateProvider', '$urlRouterProvider', '$mdThemingProvider',
    function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {

        $stateProvider
            .state('home-abstract', {
                abstract: true,
                views: {
                    '@': {
                        templateUrl: "app/partials/home-abstract",
                        controller: "HomeController",
                        controllerAs: "homeCtrl"
                    }
                }


            })
            .state('home-abstract.center', {
                url: '/home',
                views: {
                    'welcome-view': {
                        templateUrl: "app/partials/center-view"
                    }

                }


            })
            .state('home-abstract.admin-dashboard', {
                url: '/admin',
                views: {
                    'admin-dashboard': {
                        templateUrl: "app/partials/admin-dashboard",
                        controller: "AdminController",
                        controllerAs: "adminCtrl"
                    }
                },
                resolve: {
                    initialUserData: function (UserService) {
                        return UserService.loadAllUsers();
                    },
                    initialIngredientData: function (IngredientService) {
                        return IngredientService.loadAllIngredients();
                    },
                    initialSymptomData: function (SymptomService) {
                        return SymptomService.loadAllSymptoms();
                    },
                    initialDiseaseData: function (DiseaseService) {
                        return DiseaseService.loadAllDiseases();
                    },
                    initialMedicineData: function (MedicineService) {
                        return MedicineService.loadAllMedicine();
                    }
                }
            })
            .state('home-abstract.new-user', {
                url: '/newUser',
                views: {
                    'new-user': {
                        templateUrl: 'app/partials/new-user',
                        controller: 'UserController',
                        controllerAs: 'userCtrl'
                    }

                }
            })
            .state('home-abstract.edit-user', {
                url: '/editUser',
                views: {
                    'edit-user': {
                        templateUrl: 'app/partials/edit-user',
                        controller: 'EditUserController',
                        controllerAs: 'editUserCtrl'
                    }

                },
                params: {
                    userData: null
                }
            })
            .state('home-abstract.new-ingredient', {
                url: '/newIngredient',
                views: {
                    'new-ingredient': {
                        templateUrl: 'app/partials/new-ingredient',
                        controller: 'IngredientController',
                        controllerAs: 'ingCtrl'
                    }

                }
            })
            .state('home-abstract.edit-ingredient', {
                url: '/editIngredient',
                views: {
                    'edit-ingredient': {
                        templateUrl: 'app/partials/edit-ingredient',
                        controller: 'EditIngredientController',
                        controllerAs: 'editIngCtrl'
                    }

                },
                params: {
                    ingredientData: null
                }
            })
            .state('home-abstract.new-symptom', {
                url: '/newSymptom',
                views: {
                    'new-symptom': {
                        templateUrl: 'app/partials/new-symptom',
                        controller: 'SymptomController',
                        controllerAs: 'symCtrl'
                    }

                }
            })
            .state('home-abstract.edit-symptom', {
                url: '/editSymptom',
                views: {
                    'edit-symptom': {
                        templateUrl: 'app/partials/edit-symptom',
                        controller: 'EditSymptomController',
                        controllerAs: 'editSymCtrl'
                    }

                },
                params: {
                    symptomData: null
                }
            })
            .state('home-abstract.new-disease', {
                url: '/newDisease',
                views: {
                    'new-disease': {
                        templateUrl: 'app/partials/new-disease',
                        controller: 'DiseaseController',
                        controllerAs: 'diseaseCtrl'
                    }

                }
            })
            .state('home-abstract.edit-disease', {
                url: '/editDisease',
                views: {
                    'edit-disease': {
                        templateUrl: 'app/partials/edit-disease',
                        controller: 'EditDiseaseController',
                        controllerAs: 'editDisCtrl'
                    }

                },
                params: {
                    diseaseData: null
                }
            })
            .state('home-abstract.new-medicine', {
                url: '/newMedicine',
                views: {
                    'new-medicine': {
                        templateUrl: 'app/partials/new-medicine',
                        controller: 'MedicineController',
                        controllerAs: 'medCtrl'
                    }

                }
            })
            .state('home-abstract.edit-medicine', {
                url: '/editMedicine',
                views: {
                    'edit-medicine': {
                        templateUrl: 'app/partials/edit-medicine',
                        controller: 'EditMedicineController',
                        controllerAs: 'editMedCtrl'
                    }

                },
                params: {
                    medicineData: null
                }
            })
            .state('home-abstract.doctor', {
                url: '/doctor',
                views: {
                    'doctor': {
                        templateUrl: 'app/partials/doctor',
                        controller: 'DoctorController',
                        controllerAs: 'doctorCtrl'
                    }
                },
                resolve: {
                    initialPatientData: function (PatientService) {
                        return PatientService.loadAllPatients();
                    },
                    initialDiagnosisData: function(DiagnosisService){
                        return DiagnosisService.loadAllUsersDiagnosis();
                    },
                    initialTherapyData: function(TherapyService){
                        return TherapyService.loadAllUsersTherapies();
                    }
                }

            })
            .state('home-abstract.new-patient', {
                url: '/newPatient',
                views: {
                    'new-patient': {
                        templateUrl: 'app/partials/new-patient',
                        controller: 'PatientController',
                        controllerAs: 'patientCtrl'
                    }

                }
            })
            .state('home-abstract.edit-patient', {
                url: '/editPatient',
                views: {
                    'edit-patient': {
                        templateUrl: 'app/partials/edit-patient',
                        controller: 'EditPatientController',
                        controllerAs: 'editPatCtrl'
                    }

                },
                params: {
                    patientData: null
                }
            })
            .state('home-abstract.add-allergies', {
                url: '/addAllergies/:id',
                views: {
                    'add-allergies': {
                        templateUrl: 'app/partials/add-allergies',
                        controller: 'AllergiesController',
                        controllerAs: 'allergiesCtrl'
                    }

                },
                resolve: {
                    initialAllergiesData: function (IngredientService) {
                        return IngredientService.loadAllIngredients();
                    },
                    initialPatientAllergiesData: ['$stateParams', 'AllergiesService', function ($stateParams, AllergiesService) {
                        return AllergiesService.loadAllPatientAllergies($stateParams.id);
                    }]
                }
            })
            .state('home-abstract.add-medicine-allergies', {
                url: '/addMedicineAllergies/:id',
                views: {
                    'add-medicine-allergies': {
                        templateUrl: 'app/partials/add-medicine-allergies',
                        controller: 'MedicineAllergyController',
                        controllerAs: 'medAllCtrl'
                    }

                },
                resolve: {
                    initialAllergiesData: function (MedicineService) {
                        return MedicineService.loadAllMedicine();
                    },
                    initialPatientAllergiesData: ['$stateParams', 'MedicineAllergiesService', function ($stateParams, MedicineAllergiesService) {
                        return MedicineAllergiesService.loadAllPatientAllergies($stateParams.id);
                    }]
                }
            })
            .state('home-abstract.add-diagnosis', {
                url: '/addDiagnosis/:id',
                views: {
                    'add-diagnosis': {
                        templateUrl: 'app/partials/add-diagnosis',
                        controller: 'DiagnosisController',
                        controllerAs: 'diagCtrl'
                    }

                },
                resolve: {
                    initialSymptomsData: function (SymptomService) {
                        return SymptomService.loadAllSymptoms();
                    }
                    // initialPatientAllergiesData: ['$stateParams', 'MedicineAllergiesService', function ($stateParams, MedicineAllergiesService) {
                    //     return MedicineAllergiesService.loadAllPatientAllergies($stateParams.id);
                    // }]
                }
            })
            .state('home-abstract.process-diagnosis-dialog',{
                url: '/processDiagnosisDialog',
                views: {
                    'process-diagnosis-dialog': {
                        templateUrl: 'app/partials/process-diagnosis-dialog',
                        controller: 'ProcessDiagnosisDialog',
                        controllerAs: 'pdCtrl'
                    }

                },
                params: {
                    diagData: null
                }
            }).state('home-abstract.choose-medicine',{
                url: '/chooseMedicine',
                views: {
                    'choose-medicine': {
                        templateUrl: 'app/partials/choose-medicine',
                        controller: 'ChooseMedicineController',
                        controllerAs: 'cmCtrl'
                    }

                },
                resolve: {
                    initialMedicineData: function (MedicineService) {
                        return MedicineService.loadAllMedicine();
                    }
                },
                params: {
                    idData: null
                }
            }).state('home-abstract.own-diagnosis',{
                url: '/ownDiagnosis',
                views: {
                    'own-diagnosis': {
                        templateUrl: 'app/partials/own-diagnosis',
                        controller: 'OwnDiagnosisController',
                        controllerAs: 'odCtrl'
                    }

                },
                resolve: {
                    initialDiseaseData: function (DiseaseService) {
                        return DiseaseService.loadAllDiseases();
                    }
                },
                params: {
                    idData: null
                }
            })
        $urlRouterProvider.otherwise('/home');

    }
]);