<br>
<div class="jumbotron">
  <h1 class="display-4">We got your diagnosis: {{pdCtrl.diagData.disease}}</h1>
  <p class="lead">Due to these symptoms it is most likely that you have: {{pdCtrl.diagData.disease}}</p>
  <hr class="my-4">
  <p>If accept our diagnosis click Accept diagnosis, if not click Back.</p>
  <p class="lead">
    <a class="btn btn-primary btn-lg" href ng-click="pdCtrl.saveDiagnosis()" role="button">Accept diagnosis</a>
    <a class="btn btn-secondary btn-lg" ui-sref="home-abstract.add-diagnosis({id: pdCtrl.diagData.patientId})" role="button">Back</a>

  </p>
</div>