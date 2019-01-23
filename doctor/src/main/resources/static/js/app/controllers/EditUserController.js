(function () {
    'use strict';
 
    angular
        .module('docApp')
        .controller('EditUserController', EditUserController);
 
    EditUserController.$inject = ['$state', '$stateParams', 'UserService'];
    function EditUserController($state, $stateParams, UserService) {
        var self = this;
        self.user = JSON.parse($stateParams.userData);
        console.log(self.user);
        self.editUser = editUser;
        function editUser(){
            console.log("about to edit user", self.newUser);
            if(self.user.userType === "doctor"){
                self.user.userType = 'D';
            }else{
                self.user.userType = 'A';
            }
            UserService.editUser(self.user).then(function(){
                console.log("User successfully edited!");
                $state.go('home-abstract.admin-dashboard');
            }, function(errorResponse){
                console.log("Error while editing user");
            });
        }
       
    }

})();