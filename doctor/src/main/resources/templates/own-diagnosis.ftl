<br><br>
<div class="alert alert-danger" ng-if="cmCtrl.alertMsg" role="alert">
  {{cmCtrl.alertMsg}}
</div>
<div class="alert alert-danger" ng-if="cmCtrl.alertMsg2" role="alert">
  {{cmCtrl.alertMsg2}}
</div>
<div class="container">
	<h1>Choose diagnosis</h1><br>
	
    <div class="funkyradio col-md-6">
       
        <div class="funkyradio-primary" ng-repeat = "disease in odCtrl.diseaseList">
            <input type="radio" value="{{disease.diseaseCode}}" ng-model="odCtrl.selectedDisease" name="radio" id="{{disease.diseaseName}}"/>
            <label for="{{disease.diseaseName}}">{{disease.diseaseName}}</label>
        </div>
       
    </div>
    <br>
    <button type="button" class="btn btn-primary " ng-disable="!odCtrl.isEnabled()" ng-click="odCtrl.addDiagnosis()"> Add treatment</button>

</div>
<br>

</div>

{{odCtrl.selectedDisease}}