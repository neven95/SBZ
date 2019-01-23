<div class="card">
  <h3 class="card-header text-center font-weight-bold text-uppercase py-4">Medicine allergies</h3>
  <div class="card-body">
    <div id="table" class="table-editable">
      
      <table class="table table-bordered table-responsive-md table-striped text-center">
        <tr >          
          <th class="text-center">Medicine name</th>
          <th class="text-center"></th>
          <th class="text-center"></th>
        </tr>
        <tr ng-repeat="allergy in medAllCtrl.allergiesList">
          <td class="pt-3-half" contenteditable="false">{{allergy.medicineName}}</td>
          <td>
            <span class="table-remove"><button type="button" ng-disabled="!medAllCtrl.allergyExists(allergy.medicineId)" ng-click="medAllCtrl.addAllergy(allergy.medicineId)" class="btn btn-success btn-rounded btn-sm my-0">Add medicine</button></span>
          </td>
          <td>
            <span class="table-remove"><button type="button" ng-if="!medAllCtrl.allergyExists(allergy.medicineId)" ng-click="medAllCtrl.removeAllergies(allergy.medicineId)" class="btn btn-danger btn-rounded btn-sm my-0">Remove medicine</button></span>
          </td>
        </tr>
        
      </table>
    </div>
  </div>
</div>