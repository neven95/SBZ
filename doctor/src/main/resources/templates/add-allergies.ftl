<div class="card">
  <h3 class="card-header text-center font-weight-bold text-uppercase py-4">Ingredient allergies</h3>
  <div class="card-body">
    <div id="table" class="table-editable">
      
      <table class="table table-bordered table-responsive-md table-striped text-center">
        <tr >          
          <th class="text-center">Ingredient name</th>
          <th class="text-center"></th>
          <th class="text-center"></th>
        </tr>
        <tr ng-repeat="allergy in allergiesCtrl.allergiesList">
          <td class="pt-3-half" contenteditable="false">{{allergy.ingredientName}}</td>
          <td>
            <span class="table-remove"><button type="button" ng-disabled="!allergiesCtrl.allergyExists(allergy.ingredientId)" ng-click="allergiesCtrl.addAllergy(allergy.ingredientId)" class="btn btn-success btn-rounded btn-sm my-0">Add ingredient</button></span>
          </td>
          <td>
            <span class="table-remove"><button type="button" ng-if="!allergiesCtrl.allergyExists(allergy.ingredientId)" ng-click="allergiesCtrl.removeAllergies(allergy.ingredientId)" class="btn btn-danger btn-rounded btn-sm my-0">Remove ingredient</button></span>
          </td>
        </tr>
        
      </table>
    </div>
  </div>
</div>