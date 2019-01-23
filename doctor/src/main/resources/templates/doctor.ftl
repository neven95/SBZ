<br><br>
<div class="card">
  <h3 class="card-header text-center font-weight-bold text-uppercase py-4">Pacient list</h3>
  <div class="card-body">
    <div id="table" class="table-editable">
      <span class="table-add float-right mb-3 mr-2"><a ui-sref="home-abstract.new-patient()" class="text-success"><i class="fas fa-plus fa-2x"
            aria-hidden="true" style="color:green;"></i></a></span>
      <table class="table table-bordered table-responsive-md table-striped text-center">
        <tr >          
          <th class="text-center">Name</th>
          <th class="text-center">Surname</th>
          <th class="text-center"></th>          
          <th class="text-center"></th>
          <th class="text-center"></th>
          <th class="text-center"></th>
          <th class="text-center"></th>

        </tr>
        <tr ng-repeat="patient in doctorCtrl.patientsList">
          <td class="pt-3-half" contenteditable="false">{{patient.patientName}}</td>
          <td class="pt-3-half" contenteditable="false">{{patient.patientSurname}}</td>  

          <td>
            <span class="table-remove"><button type="button" ui-sref="home-abstract.add-allergies({id: patient.patientId})" class="btn btn-primary btn-rounded btn-sm my-0">Ingredients allergies</button></span>
          </td>
          
           <td>
            <span class="table-remove"><button type="button" ui-sref="home-abstract.add-medicine-allergies({id: patient.patientId})" class="btn btn-primary btn-rounded btn-sm my-0">Medicine allergies</button></span>
          </td>
          
           <td>
            <span class="table-remove"><button type="button" ui-sref="home-abstract.add-diagnosis({id: patient.patientId})" class="btn btn-success btn-rounded btn-sm my-0">Add diagnosis</button></span>
          </td>
          <td>
            <span class="table-remove"><button type="button" ng-click="doctorCtrl.editPatient(patient.patientId)" class="btn btn-primary btn-rounded btn-sm my-0">Edit</button></span>
          </td>
          <td>
            <span class="table-remove"><button type="button" ng-click="doctorCtrl.deletePatient(patient.patientId)" class="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
          </td>
        </tr>
        
      </table>
    </div>
  </div>
</div>
<div class="card">
  <h3 class="card-header text-center font-weight-bold text-uppercase py-4">Diagnosis list</h3>
  <div class="card-body">
    <div id="table" class="table-editable">
      
      <table class="table table-bordered table-responsive-md table-striped text-center">
        <tr >          
          <th class="text-center">Patient</th>
          <th class="text-center">Disease</th>
          <th class="text-center">Date</th>
          <th class="text-center"></th>
          <th class="text-center"></th>

        </tr>
        <tr ng-repeat="diagnosis in doctorCtrl.diagnosisList">
          <td class="pt-3-half" contenteditable="false">{{diagnosis.patient}}</td>
          <td class="pt-3-half" contenteditable="false">{{diagnosis.disease}}</td>  
          <td class="pt-3-half" contenteditable="false">{{diagnosis.date}}</td>  

         
          <td>
            <span class="table-remove"><button type="button" ng-click="doctorCtrl.deletePatient(patient.patientId)" class="btn btn-primary btn-rounded btn-sm my-0">Edit</button></span>
          </td>
           <td>
            <span class="table-remove"><button type="button" ng-click="doctorCtrl.deletePatient(patient.patientId)" class="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
          </td>
        </tr>
        
      </table>
    </div>
  </div>
</div>

<div class="card">
  <h3 class="card-header text-center font-weight-bold text-uppercase py-4">Treatment list</h3>
  <div class="card-body">
    <div id="table" class="table-editable">
      
      <table class="table table-bordered table-responsive-md table-striped text-center">
        <tr >          
          <th class="text-center">Patient</th>
          <th class="text-center">Disease</th>
          <th class="text-center">Medicine</th>
          <th class="text-center">Date</th>
          <th class="text-center"></th>

        </tr>
        <tr ng-repeat="treatment in doctorCtrl.therapyList">
          <td class="pt-3-half" contenteditable="false">{{treatment.patientName}}</td>
          <td class="pt-3-half" contenteditable="false">{{treatment.diseaseName}}</td> 
          <td class="pt-3-half" contenteditable="false">{{treatment.medicineName}}</td>  
 
          <td class="pt-3-half" contenteditable="false">{{treatment.therapyDate}}</td>  
           <td>
            <span class="table-remove"><button type="button" ng-click="doctorCtrl.deletePatient(patient.patientId)" class="btn btn-danger btn-rounded btn-sm my-0">Remove</button></span>
          </td>
        </tr>
        
      </table>
    </div>
  </div>
</div>