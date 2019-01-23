<br><br>
<div class="alert alert-danger" ng-if="cmCtrl.alertMsg" role="alert">
  {{cmCtrl.alertMsg}}
</div>
<div class="alert alert-danger" ng-if="cmCtrl.alertMsg2" role="alert">
  {{cmCtrl.alertMsg2}}
</div>
<div class="container">
	<h1>Choose medicine treatment</h1><br>
	
        <label class="customcheck" ng-repeat="medicine in cmCtrl.medicineList">{{medicine.medicineName}}
          <input type="checkbox" value="{{medicine.medicineId}}" check-list='cmCtrl.checkedMedicine'>
          <span class="checkmark"></span>
        </label>
<br>
<button type="button" class="btn btn-primary" ng-disable="!cmCtrl.isEnabled()" ng-click="cmCtrl.addTherapy()"> Add treatment</button>

</div>

{{cmCtrl.checkedMedicine}}