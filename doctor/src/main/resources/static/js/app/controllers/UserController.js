(function () {
    'use strict';
 
    angular
        .module('docApp')
        .controller('UserController', UserController);
 
    UserController.$inject = ['$state', 'UserService'];
    function UserController($state, UserService) {
        var self = this;
        self.addUser = addUser;
        function addUser(){
            console.log("about to add a new user", self.newUser);
            if(self.newUser.userType === "doctor"){
                self.newUser.userType = 'D';
            }else{
                self.newUser.userType = 'A';
            }
            UserService.addUser(self.newUser).then(function(){
                console.log("New user successfully created!");

                $state.go('home-abstract.admin-dashboard');
            }, function(errorResponse){
                console.log("Error while adding new user");
            });
        }
       
    }

})();