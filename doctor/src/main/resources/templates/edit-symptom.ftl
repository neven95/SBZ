<br><br>
	<!-- Page Content -->
	<div class="container">
		<div class="container-page">
			<form>
				<div class="col-md-6">
					<h3 class="dark-grey">Edit symptom</h3>

					<div class="form-group col-lg-6">
						<label>Symptom description:</label> <input type="text" ng-model="editSymCtrl.symptom.symDesc" class="form-control"
							maxlength="150">
					</div>
                    <div class="form-group col-lg-6">
						<label>Symptom code:</label> <input type="text" ng-model="editSymCtrl.symptom.symCode" class="form-control"
							maxlength="150">
					</div>
				</div>
				<button ng-click="editSymCtrl.editSymptom()" class="btn btn-primary" >Save</button>
			</form>
		</div>
	</div>
	
