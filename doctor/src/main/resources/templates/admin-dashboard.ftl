

<!-- User table -->
<div class="card">
  <h3 class="card-header text-center font-weight-bold text-uppercase py-4">Users list</h3>
  <div class="card-body">
    <div id="table" class="table-editable">
      <span class="table-add float-right mb-3 mr-2"><a ui-sref="home-abstract.new-user()" class="text-success"><i class="fas fa-plus fa-2x"
            aria-hidden="true" style="color:green;"></i></a></span>
      <table class="table table-bordered table-responsive-md table-striped text-center">
        <tr >
          <th class="text-center">Username</th>
          <th class="text-center">Name</th>
          <th class="text-center">Surname</th>
          <th class="text-center">Type</th>
          <th class="text-center"></th>
          <th class="text-center"></th>
        </tr>
        <tr ng-repeat="user in adminCtrl.usersList">
          <td class="pt-3-half" contenteditable="false">{{user.userUsername}}</td>
          <td class="pt-3-half" contenteditable="false">{{user.userName}}</td>
          <td class="pt-3-half" contenteditable="false">{{user.userSurname}}</td>
          <td class="pt-3-half" contenteditable="false">{{user.userType}}</td>
          
          <td>
            <span class="table-remove"><button type="button" ng-click="adminCtrl.editUser(user.userId)" class="btn btn-primary btn-rounded btn-sm my-0">Edit</button></span>
          </td>
          <td>
            <span class="table-remove"><button type="button" ng-click="adminCtrl.deleteUser(user.userId)" class="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
          </td>
        </tr>
        
      </table>
    </div>
  </div>
</div>
<!-- ingredients table -->
<br><br>
<div class="card">
  <h3 class="card-header text-center font-weight-bold text-uppercase py-4">Ingredients list</h3>
  <div class="card-body">
    <div id="table" class="table-editable">
      <span class="table-add float-right mb-3 mr-2"><a ui-sref="home-abstract.new-ingredient()" class="text-success"><i class="fas fa-plus fa-2x"
            aria-hidden="true" style="color:green;"></i></a></span>
      <table class="table table-bordered table-responsive-md table-striped text-center">
        <tr >
          <th class="text-center">Ingredient name</th>
          <th class="text-center"></th>
          <th class="text-center"></th>
        </tr>
        <tr ng-repeat="ingredient in adminCtrl.ingredientsList">
          <td class="pt-3-half" contenteditable="false">{{ingredient.ingredientName}}</td>
          <td>
            <span class="table-remove"><button type="button" ng-click="adminCtrl.editIngredient(ingredient.ingredientId)" class="btn btn-primary btn-rounded btn-sm my-0">Edit</button></span>
          </td>
          <td>
            <span class="table-remove"><button type="button" ng-click="adminCtrl.deleteIngredient(ingredient.ingredientId)" class="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
          </td>
        </tr>
        
      </table>
    </div>
  </div>
</div>

<!-- symptoms table -->

<br><br>
<div class="card">
  <h3 class="card-header text-center font-weight-bold text-uppercase py-4">Symptoms list</h3>
  <div class="card-body">
    <div id="table" class="table-editable">
      <span class="table-add float-right mb-3 mr-2"><a ui-sref="home-abstract.new-symptom()" class="text-success"><i class="fas fa-plus fa-2x"
            aria-hidden="true" style="color:green;"></i></a></span>
      <table class="table table-bordered table-responsive-md table-striped text-center">
        <tr >
          <th class="text-center">Symptom description</th>
          <th class="text-center"></th>
          <th class="text-center"></th>
        </tr>
        <tr ng-repeat="symptom in adminCtrl.symptomsList">
          <td class="pt-3-half" contenteditable="false">{{symptom.symDesc}}</td>
          <td>
            <span class="table-remove"><button type="button" ng-click="adminCtrl.editSymptom(symptom.symId)" class="btn btn-primary btn-rounded btn-sm my-0">Edit</button></span>
          </td>
          <td>
            <span class="table-remove"><button type="button" ng-click="adminCtrl.deleteSymptom(symptom.symId)" class="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
          </td>
        </tr>
        
      </table>
    </div>
  </div>
</div>

<!-- Disease table -->

<br><br>
<div class="card">
  <h3 class="card-header text-center font-weight-bold text-uppercase py-4">Disease list</h3>
  <div class="card-body">
    <div id="table" class="table-editable">
      <span class="table-add float-right mb-3 mr-2"><a ui-sref="home-abstract.new-disease()" class="text-success"><i class="fas fa-plus fa-2x"
            aria-hidden="true" style="color:green;"></i></a></span>
      <table class="table table-bordered table-responsive-md table-striped text-center">
        <tr>
          <th class="text-center">Name</th>
          <th class="text-center"></th>
          <th class="text-center"></th>
          <th class="text-center"></th>
          <th class="text-center"></th>
        </tr>
        <tr ng-repeat="disease in adminCtrl.diseasesList">
          <td class="pt-3-half" contenteditable="false">{{disease.diseaseName}}</td>
          <td>
            <span class="table-remove"><button type="button" ng-click="adminCtrl.editSymptom(symptom.symId)" class="btn btn-success btn-rounded btn-sm my-0">Add symptoms</button></span>
          </td>
          <td>
            <span class="table-remove"><button type="button" ng-click="adminCtrl.deleteSymptom(symptom.symId)" class="btn btn-danger btn-rounded btn-sm my-0">Remove symptoms</button></span>
          </td>
          <td>
            <span class="table-remove"><button type="button" ng-click="adminCtrl.editDisease(disease.diseaseId)" class="btn btn-primary btn-rounded btn-sm my-0">Edit</button></span>
          </td>
          <td>
            <span class="table-remove"><button type="button" ng-click="adminCtrl.deleteDisease(disease.diseaseId)" class="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
          </td>
        </tr>
        
      </table>
    </div>
  </div>
</div>

<!-- Medicine table -->

<br><br>
<div class="card">
  <h3 class="card-header text-center font-weight-bold text-uppercase py-4">Medicine list</h3>
  <div class="card-body">
    <div id="table" class="table-editable">
      <span class="table-add float-right mb-3 mr-2"><a ui-sref="home-abstract.new-medicine()" class="text-success"><i class="fas fa-plus fa-2x"
            aria-hidden="true" style="color:green;"></i></a></span>
      <table class="table table-bordered table-responsive-md table-striped text-center">
        <tr>
          <th class="text-center">Name</th>
          <th class="text-center">Type</th>
          <th class="text-center"></th>
          <th class="text-center"></th>
          <th class="text-center"></th>
          <th class="text-center"></th>

        </tr>
        <tr ng-repeat="medicine in adminCtrl.medicineList">
          <td class="pt-3-half" contenteditable="false">{{medicine.medicineName}}</td>
          <td class="pt-3-half" contenteditable="false">{{medicine.medicineType}}</td>

          <td>
            <span class="table-remove"><button type="button" ng-click="adminCtrl.editSymptom(symptom.symId)" class="btn btn-success btn-rounded btn-sm my-0">Add ingredient</button></span>
          </td>
          <td>
            <span class="table-remove"><button type="button" ng-click="adminCtrl.deleteSymptom(symptom.symId)" class="btn btn-danger btn-rounded btn-sm my-0">Remove ingredient</button></span>
          </td>
          <td>
            <span class="table-remove"><button type="button" ng-click="adminCtrl.editMedicine(medicine.medicineId)" class="btn btn-primary btn-rounded btn-sm my-0">Edit</button></span>
          </td>
          <td>
            <span class="table-remove"><button type="button" ng-click="adminCtrl.deleteMedicine(medicine.medicineId)" class="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
          </td>
        </tr>
        
      </table>
    </div>
  </div>
</div>