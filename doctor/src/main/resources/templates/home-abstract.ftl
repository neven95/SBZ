<header class="default-header">
		<div class="container">
			<div class="header-wrap">
				<div class="header-top d-flex justify-content-between align-items-center">
					<div class="logo">
						<a href="#home"><img src="img/logo.png" alt=""></a>
					</div>
					<div class="main-menubar d-flex align-items-center md-padding" id="popupContainer" ng-cloak>
						<nav >
							<a ui-sref="home-abstract.center()">Home</a>
							<a href ng-click="homeCtrl.showConfirm($event)">Services</a>
							<a href ng-if="globals.currentUser != null && globals.currentUser.userType == 'A' " ui-sref="home-abstract.admin-dashboard()">Workspace</a>
              <a href ng-if="globals.currentUser != null && globals.currentUser.userType == 'D' " ui-sref="home-abstract.doctor()">Workspace</a>
							<a href data-toggle="modal" ng-if="globals.currentUser == null" data-target="#loginModal">Login</a>
              <a href  ng-if="globals.currentUser != null" ng-click="homeCtrl.logOut()" >Logout</a>        
						</nav>
						
					</div>
				</div>
			</div>
		</div>
	</header>
  <section><br><br></section>
  <!-- start modal login -->
	
  <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Login</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <form name="form" ng-submit="homeCtrl.login()" role="form">
      <div class="modal-body">
        <div class="alert alert-danger" role="alert" ng-if="homeCtrl.errorMessage">{{homeCtrl.errorMessage}}</div>
        <div class="col-md-6 col-md-offset-3">


          <div class="form-group" ng-class="{ 'has-error': form.username.$dirty && form.username.$error.required }">
            <label for="username">Username</label>
            <input type="text" name="username" id="username" class="form-control" ng-model="homeCtrl.username" required />
            <span ng-show="form.username.$dirty && form.username.$error.required" class="help-block">Username is
              required</span>
          </div>
          <div class="form-group" ng-class="{ 'has-error': form.password.$dirty && form.password.$error.required }">
            <label for="password">Password</label>
            <input type="password" name="password" id="password" class="form-control" ng-model="homeCtrl.password"
              required />
            <span ng-show="form.password.$dirty && form.password.$error.required" class="help-block">Password is
              required</span>
          </div>
          <div class="form-actions">

          </div>

        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" ng-disabled="form.$invalid || homeCtrl.dataLoading" class="btn btn-primary">Login</button>
        <!-- <div ng-if="homeCtrl.dataLoading" class="loader"></div> -->
        <img ng-if="homeCtrl.dataLoading" style="width: 60px; height:60px;" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
      </div>
      </form>
    </div>
  </div>
</div>

<script>
  $('#loginModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget) // Button that triggered the modal
    var recipient = button.data('whatever') // Extract info from data-* attributes
    // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
    // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
    var modal = $(this)

  })
  
</script>
<div ui-view = 'welcome-view'></div>
<div ui-view = 'admin-dashboard'></div>
<div ui-view = 'new-user'></div>
<div ui-view = 'edit-user'></div>
<div ui-view = 'new-ingredient'></div>
<div ui-view = 'edit-ingredient'></div>
<div ui-view = 'new-symptom'></div>
<div ui-view = 'edit-symptom'></div>
<div ui-view = 'new-disease'></div>
<div ui-view = 'edit-disease'></div>
<div ui-view = 'new-medicine'></div>
<div ui-view = 'edit-medicine'></div>
<div ui-view = 'doctor'></div>
<div ui-view = 'new-patient'></div>
<div ui-view = 'edit-patient'></div>
<div ui-view = 'add-allergies'></div>
<div ui-view = 'add-medicine-allergies'></div>
<div ui-view = 'add-diagnosis'></div>
<div ui-view = 'process-diagnosis-dialog'></div>
<div ui-view = 'choose-medicine'></div>
<div ui-view = 'own-diagnosis'></div>
