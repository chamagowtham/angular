'use strict';

angular.module('myApp').controller('dashboardCtrl', ['$scope', '$http', '$rootScope', '$state', '$controller', 'responseUtility',
    function($scope, $http, $rootScope, $state, $controller, responseUtility) {
      console.log('cool, now inside dashboard controller');
    }
  ]);