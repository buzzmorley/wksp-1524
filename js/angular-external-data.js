function TimetableCtrl($scope, $http) {
    $http.get('../data/items.json')
      .success(function(data) {$scope.sessions=data.sessions;})
      .error(function(data) {console.log('error')});
      // 'error' could be friendly message
    }