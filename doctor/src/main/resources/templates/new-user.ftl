<br><br>
	<!-- Page Content -->
	<div class="container">
		<div class="container-page">
			<form>
				<div class="col-md-6">
					<h3 class="dark-grey">Create new user</h3>

					<div class="form-group col-lg-6">
						<label>Username:</label> <input type="text" ng-model="userCtrl.newUser.userUsername" class="form-control"
							id="newUsersername" maxlength="150">
					</div>

					<div class="form-group col-lg-6">
						<label>Name:</label> <input type="text" ng-model="userCtrl.newUser.userName" class="form-control"
							id="newUserName" maxlength="100">
					</div>

					<div class="form-group col-lg-6">
						<label>Surname:</label> <input type="text" ng-model="userCtrl.newUser.userSurname" class="form-control"
							id="newUserSurname" maxlength="200">
					</div>

					<div class="form-group col-lg-6">
						<label>Password:</label> <input type="password" ng-model="userCtrl.newUser.userPassword"
							class="form-control" id="newUserPassword">
					</div>

					<div class="form-group col-lg-6">
						<label>Type</label>
						<div class="radio">
							<label><input type="radio" name="optradio" ng-model="userCtrl.newUser.userType" id="newUserDoctor"
								value="doctor" checked>Doctor</label>
						</div>
						<div class="radio">
							<label><input type="radio" name="optradio" ng-model="userCtrl.newUser.userType" id="newUserAdmin"
								value="admin">Administrator</label>
						</div>
					</div>
				</div>
				<button ng-click="userCtrl.addUser()" class="btn btn-primary" >Create</button>
			</form>
		</div>
	</div>
	
