<!DOCTYPE html>
<html lang="zxx" class="no-js" ng-app="docApp">

<head>
	<!-- Mobile Specific Meta -->
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<!-- Favicon-->
	<link rel="shortcut icon" href="img/fav.png">
	<!-- Author Meta -->
	<meta name="author" content="Colorlib">
	<!-- Meta Description -->
	<meta name="description" content="">
	<!-- Meta Keyword -->
	<meta name="keywords" content="">
	<!-- meta character set -->
	<meta charset="UTF-8">
	<!-- Site Title -->
	<title>Medical</title>

	<link href="https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700" rel="stylesheet">
	<!--
			CSS
			============================================= -->
	<link rel="stylesheet" href="css/linearicons.css">
	<link rel="stylesheet" href="css/app.css">

	<link rel="stylesheet" href="css/font-awesome.min.css">
	<link rel="stylesheet" href="css/magnific-popup.css">
	<link rel="stylesheet" href="css/nice-select.css">
	<link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
 	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossorigin="anonymous">	<link rel="stylesheet" href="css/main.css">
</head>

<body>
	

	<!-- Modal is starting here-->

  

 
	

	<#--  <script src="js-medical-colorlib/js/vendor/jquery-2.2.4.min.js"></script>  -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4"
	 crossorigin="anonymous"></script>
	<script src="js-medical-colorlib/js/vendor/bootstrap.min.js"></script>
	<script src="js-medical-colorlib/js/jquery.ajaxchimp.min.js"></script>
	<script src="js-medical-colorlib/js/jquery.nice-select.min.js"></script>
	<script src="js-medical-colorlib/js/jquery.sticky.js"></script>
	<script src="js-medical-colorlib/js/parallax.min.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script src="js-medical-colorlib/js/jquery.magnific-popup.min.js"></script>
	<script src="js-medical-colorlib/js/waypoints.min.js"></script>
	<script src="js-medical-colorlib/js/jquery.counterup.min.js"></script>
	<script src="js-medical-colorlib/js/main.js"></script>

	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
	<script src="//unpkg.com/@uirouter/angularjs/release/angular-ui-router.min.js"></script>
	<script src="https://code.angularjs.org/1.6.9/angular-cookies.min.js"></script>
	<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
	 crossorigin="anonymous">
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-animate.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-aria.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-messages.min.js"></script>
	<!-- <script src="js/lib/angular-ui-router.min.js" ></script> -->
	<script src="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.8/angular-material.min.js"></script>
	<script src="js/app/modules/app.js"></script>
	<script src="js/lib/SweetAlert.min.js"> </script>
	<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>

	 <script src="https://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.6.0.js" type="text/javascript"></script>
    <script src="https://m-e-conroy.github.io/angular-dialog-service/javascripts/dialogs.min.js" type="text/javascript"></script>
	<!-- Directives -->
	<script src="js/app/directives/checkbox.directive.js"></script>

	<!-- Services -->
	<script src="js/app/services/login.service.js"></script>
	<script src="js/app/services/user.service.js"></script>
	<script src="js/app/services/ingredient.service.js"></script>
	<script src="js/app/services/symptom.service.js"></script>
	<script src="js/app/services/disease.service.js"></script>
	<script src="js/app/services/medicine.service.js"></script>
	<script src="js/app/services/patient.service.js"></script>
	<script src="js/app/services/allergies.service.js"></script>
	<script src="js/app/services/medicineAllergy.service.js"></script>
	<script src="js/app/services/diagnosis.service.js"></script>
	<script src="js/app/services/therapy.service.js"></script>

	<!-- Controllers -->
	<script src="js/app/controllers/HomeController.js"></script>
	<script src="js/app/controllers/AdminController.js"></script>
	<script src="js/app/controllers/UserController.js"></script>
	<script src="js/app/controllers/EditUserController.js"></script>
	<script src="js/app/controllers/IngredientController.js"></script>
	<script src="js/app/controllers/EditIngredientController.js"></script>
	<script src="js/app/controllers/SymptomController.js"></script>
	<script src="js/app/controllers/EditSymptomController.js"></script>
	<script src="js/app/controllers/DiseaseController.js"></script>
	<script src="js/app/controllers/EditDiseaseController.js"></script>
	<script src="js/app/controllers/MedicineController.js"></script>
	<script src="js/app/controllers/EditMedicineController.js"></script>
	<script src="js/app/controllers/DoctorController.js"></script>
	<script src="js/app/controllers/PatientController.js"></script>
	<script src="js/app/controllers/EditPatientController.js"></script>
	<script src="js/app/controllers/AllergiesController.js"></script>
	<script src="js/app/controllers/MedicineAllergyController.js"></script>
	<script src="js/app/controllers/DiagnosisController.js"></script>
	<script src="js/app/controllers/ProcessDiagnosisController.js"></script>
	<script src="js/app/controllers/ChooseMedicineController.js"></script>
	<script src="js/app/controllers/OwnDiagnosisController.js"></script>


<div ui-view></div>
</body>
 
</html>