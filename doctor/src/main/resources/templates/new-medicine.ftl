<br><br>
	<!-- Page Content -->
	<div class="container">
		<div class="container-page">
			<form>
				<div class="col-md-6">
					<h3 class="dark-grey">Create new medicine</h3>

					<div class="form-group col-lg-6">
						<label>Name:</label> <input type="text" ng-model="medCtrl.newMedicine.medicineName" class="form-control"
							maxlength="150">
					</div>
                    <div class="form-group col-lg-6">
						<label>Type</label>
						<div class="radio">
							<label><input type="radio" name="optradio" ng-model="medCtrl.newMedicine.medicineType" 
								value="Antibiotic" checked>Antibiotic</label>
						</div>
                        <div class="radio">
							<label><input type="radio" name="optradio" ng-model="medCtrl.newMedicine.medicineType" 
								value="Painkiller" checked>Painkiller</label>
						</div>
						<div class="radio">
							<label><input type="radio" name="optradio" ng-model="medCtrl.newMedicine.medicineType" 
								value="Other">Other</label>
						</div>
					</div>
				</div>
				<button ng-click="medCtrl.addMedicine()" class="btn btn-primary" >Create</button>
			</form>
		</div>
	</div>
	
