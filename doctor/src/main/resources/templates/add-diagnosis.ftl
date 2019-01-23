<br><br>
<div class="alert alert-danger" ng-if="diagCtrl.alertMsg" role="alert">
  {{diagCtrl.alertMsg}}
</div>
<div class="container">
	<h1>Enter symptoms</h1><br>
	
        <label class="customcheck" ng-repeat="symptom in diagCtrl.symptomList">{{symptom.symDesc}}
          <input type="checkbox" value="{{symptom.symId}}" check-list='diagCtrl.checkedSymptoms'>
          <span class="checkmark"></span>
        </label>
<br>
<button type="button" class="btn btn-primary" ng-disable="!diagCtrl.isEnabled()" ng-click="diagCtrl.processSymptoms()">Process diagnosis</button>
<button type="button" class="btn btn-secondary" ng-disable="!diagCtrl.isEnabled()" ng-click="diagCtrl.analyzeSymptoms()">Diagnosis assumption</button>
<button type="button" class="btn btn-secondary" ui-sref="home-abstract.own-diagnosis({idData: diagCtrl.patID})">Add your own diagnosis</button>

</div>

<div ng-repeat = "x in diagCtrl.analyzeList">
    <h4>{{x.name}} <span class="label label-default">{{x.value}}</span></h4>
</div>

{{diagCtrl.analyzeListValues}}