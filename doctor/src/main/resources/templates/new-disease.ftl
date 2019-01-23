<br><br>
	<!-- Page Content -->
	<div class="container">
		<div class="container-page">
			<form>
				<div class="col-md-6">
					<h3 class="dark-grey">Create new disease</h3>

					<div class="form-group col-lg-6">
						<label>Name:</label> <input type="text" ng-model="diseaseCtrl.newDisease.diseaseName" class="form-control"
							maxlength="150">
					</div>
                    <div class="form-group col-lg-6">
						<label>Disease code:</label> <input type="text" ng-model="diseaseCtrl.newDisease.diseaseCode" class="form-control"
							maxlength="150">
					</div>
				</div>
				<button ng-click="diseaseCtrl.addDisease()" class="btn btn-primary" >Create</button>
			</form>
		</div>
	</div>
	
