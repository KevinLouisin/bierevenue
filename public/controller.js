var beers = angular.module('beers', [])

function beerController($scope, $http) {
  $scope.formData = {};

  $http.get('/api/beers')
    .success(function(beers) {
      $scope.beers = beers
    })
    .error(function(error) {
      console.log(error)
      $scope.beers = {}
    })

  $scope.deleteBeer = function(name) {
    $http.delete('/api/beers/' + name)
      .success(function() {
        $http.get('/api/beers')
          .success(function(beers) {
            $scope.beers = beers
          })
          .error(function(error) {
            console.log(error)
            $scope.beers = {}
          })
      })
      .error(function(error) {
          console.log(error)
      })
  }

  $scope.createBeer = function() {
    if ($scope.formData.name && $scope.formData.type && $scope.formData.degree) {
      $http.post('/api/beers', $scope.formData)
        .success(function(data) {
          $scope.formData = {}
        })
        .error(function(error) {
          console.log(error)
        })
      }
  }
}
