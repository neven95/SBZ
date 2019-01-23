(function(){
    'use strict';     
    angular.module('docApp').factory('UserService', UserService);
    UserService.$inject=['$http', '$q', 'urls'];
    function UserService($http, $q, urls){
        var service = {};         
        service.loadAllUsers = loadAllUsers;        
        service.addUser = addUser;
        service.deleteUser = deleteUser;
        service.editUser = editUser;
        return service; 

        function loadAllUsers(){
            var usersList = $http.get(urls.USERS_SERVICE_API)
                    .then(function(response) {
                        console.log("Users response", response.data);
                        return response.data;
                    }, function(error) {
                        console.log("Error occured while initializing list of all users!");
                    });
    
                return $q.all([usersList])
                    .then(function(results) {
                        return {   usersList: results[0] };        
                    });
        }
        function addUser(newUser){
            var response = $http.post(urls.USERS_SERVICE_API, newUser)
                    .then(function(response){
                        return response.data;
                    }, function(error){
                        console.log("Error occured while adding a new user!");
                    });
                    return $q.all([response])
                    .then(function(results) {
                        return {   response: results[0] };        
                    });
        }
        function deleteUser(id){
            var response = $http.delete(urls.USERS_SERVICE_API+id)
                                .then(function(){
                                    return response.data;
                                }, function(){
                                    console.log("Error occured while deleting user");
                                });
                    return $q.all([response])
                    .then(function(results) {
                        return {   response: results[0] };        
                    });
        }

        function editUser(user){
            var response = $http.put(urls.USERS_SERVICE_API, user)
                    .then(function(response){
                        return response.data;
                    }, function(error){
                        console.log("Error occured while editing an user!");
                    });
                    return $q.all([response])
                    .then(function(results) {
                        return {   response: results[0] };        
                    });
        }
    }
})();