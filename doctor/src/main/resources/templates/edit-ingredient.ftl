<br><br>
	<!-- Page Content -->
	<div class="container">
		<div class="container-page">
			<form>
				<div class="col-md-6">
					<h3 class="dark-grey">Edit ingredient</h3>

					<div class="form-group col-lg-6">
						<label>Ingredient name:</label> <input type="text" ng-model="editIngCtrl.ingredient.ingredientName" class="form-control"
							maxlength="150">
					</div>

				</div>
				<button ng-click="editIngCtrl.editIngredient()" class="btn btn-primary" >Save</button>
			</form>
		</div>
	</div>
	
