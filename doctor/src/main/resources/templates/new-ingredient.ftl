<br><br>
	<!-- Page Content -->
	<div class="container">
		<div class="container-page">
			<form>
				<div class="col-md-6">
					<h3 class="dark-grey">Create new ingredient</h3>

					<div class="form-group col-lg-6">
						<label>Ingredient name:</label> <input type="text" ng-model="ingCtrl.newIngredient.ingredientName" class="form-control"
							maxlength="150">
					</div>

				</div>
				<button ng-click="ingCtrl.addIngredient()" class="btn btn-primary" >Create</button>
			</form>
		</div>
	</div>
	
