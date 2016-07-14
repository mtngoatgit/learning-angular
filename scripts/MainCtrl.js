angular
    .module('avengersApp')
    .controller('MainCtrl', function($scope, dataService) {
        // the parameters of the above function will be where you house all your services, without limit
        // the only thing that is accessible on the service is that which is on the "this" object
        
        $scope.getHeroes = function() {
            $scope.avengers = dataService.avengers();
        }
        // scope isnt gonna get run until getHeroes gets invoked

        

}); //end main control

