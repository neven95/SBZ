<br><br>
	<!-- Page Content -->
	<div class="container">
		<div class="container-page">
			<form>
				<div class="col-md-6">
					<h3 class="dark-grey">Edit User</h3>

					<div class="form-group col-lg-6">
						<label>Username:</label> <input type="text" ng-model="editUserCtrl.user.userUsername" class="form-control"
							 maxlength="150">
					</div>

					<div class="form-group col-lg-6">
						<label>Name:</label> <input type="text" ng-model="editUserCtrl.user.userName" class="form-control"
							 maxlength="100">
					</div>

					<div class="form-group col-lg-6">
						<label>Surname:</label> <input type="text" ng-model="editUserCtrl.user.userSurname" class="form-control"
							 maxlength="200">
					</div>

					<div class="form-group col-lg-6">
						<label>Password:</label> <input type="password" ng-model="editUserCtrl.user.userPassword"
							class="form-control" >
					</div>

					<div class="form-group col-lg-6">
						<label>Type</label>
						<div class="radio">
							<label><input type="radio" name="optradio" ng-model="editUserCtrl.user.userType" 
								value="doctor" checked>Doctor</label>
						</div>
						<div class="radio">
							<label><input type="radio" name="optradio" ng-model="editUserCtrl.user.userType" 
								value="admin">Administrator</label>
						</div>
					</div>
				</div>
				<button ng-click="editUserCtrl.editUser()" class="btn btn-primary" >Save</button>
			</form>
		</div>
	</div>
	
