'use strict';

//hook up controller to trip api
angular.module('wanderApp')
  .controller('NewCtrl', function ($scope, $http, socket) {
  	    $scope.newTrip = '';
        $scope.trips = [];

 
    // Grab the initial set of available trips
    $http.get('/api/trips').success(function(trips) {
      $scope.trips = trips;
 
      // Update array with any new or deleted items pushed from the socket
      socket.syncUpdates('trip', $scope.trips, function(event, trip, trips) {
        // This callback is fired after the trips array is updated by the socket listeners
        console.log(trips);
        // sort the array every time its modified
        trips.sort(function(a, b) {
          a = new Date(a.date);
          b = new Date(b.date);
          return a>b ? -1 : a<b ? 1 : 0;
        });
      });
    });
 
    // Clean up listeners when the controller is destroyed
    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('trip');
    });
 
    // Use our rest api to post a new trip
    $scope.addTrip = function() {
      $http.post('/api/trips', {  
        country: $scope.newTrip.country,   
        region: $scope.newTrip.region,
        duration: $scope.newTrip.duration,
        info: $scope.newTrip.info 
      });
      $scope.newTrip = '';
    };
    $scope.deleteTrip = function(trip){
      $http.delete('/api/trips/' + trip._id);
    };

  });