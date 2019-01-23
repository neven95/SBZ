(function () {
    'use strict';

    angular
        .module('docApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = [ 'LoginService', '$state'];

    function HomeController( LoginService, $state) {
        var vm = this;

        vm.login = login;
        vm.logOut = logOut;

        
        function logOut() {
            LoginService.ClearCredentials();
            $state.go('home-abstract.center');
        }

        function login() {
            (function initController() {
                // reset login status
                LoginService.ClearCredentials();
            })();
            vm.dataLoading = true;
            LoginService.Login(vm.username, vm.password, function (response) {
                if (response.status == 200) {
                    console.log('trebalo bi ovde da udje');
                    console.log(response);
                    console.log("a ovo je data od response");
                    console.log(response.data);
                    LoginService.SetCredentials(vm.username, vm.password, response.data.type);

                    if (response.data.type === 'A') {
                        $state.go("home-abstract.admin-dashboard");

                    } else if (response.data.type === 'D') {
                        $state.go("home-abstract.doctor");
                    }
                    vm.dataLoading = false;
                } else {
                    console.log('Ovo je poruka o gresci ' + response.data.errorMessage);
                    vm.errorMessage = response.data.errorMessage;
                    vm.dataLoading = false;
                }
            });
        };
    }

})();