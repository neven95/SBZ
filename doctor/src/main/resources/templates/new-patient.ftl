<br><br>
	<!-- Page Content -->
	<div class="container">
		<div class="container-page">
			<form>
				<div class="col-md-6">
					<h3 class="dark-grey">Create new patient</h3>

					
					<div class="form-group col-lg-6">
						<label>Name:</label> <input type="text" ng-model="patientCtrl.newPatient.patientName" class="form-control"
							id="newPatientName" maxlength="100">
					</div>

					<div class="form-group col-lg-6">
						<label>Surname:</label> <input type="text" ng-model="patientCtrl.newPatient.patientSurname" class="form-control"
							id="newPatientSurname" maxlength="200">
					</div>

					
				</div>
				<button ng-click="patientCtrl.addPatient()" class="btn btn-primary" >Create</button>
			</form>
		</div>
	</div>
	
