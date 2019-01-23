<br><br>
	<!-- Page Content -->
	<div class="container">
		<div class="container-page">
			<form>
				<div class="col-md-6">
					<h3 class="dark-grey">Edit patient</h3>

					
					<div class="form-group col-lg-6">
						<label>Name:</label> <input type="text" ng-model="editPatCtrl.patient.patientName" class="form-control"
							id="patientName" maxlength="100">
					</div>

					<div class="form-group col-lg-6">
						<label>Surname:</label> <input type="text" ng-model="editPatCtrl.patient.patientSurname" class="form-control"
							id="patientSurname" maxlength="200">
					</div>

					
				</div>
				<button ng-click="editPatCtrl.editPatient()" class="btn btn-primary" >Save</button>
			</form>
		</div>
	</div>
	
