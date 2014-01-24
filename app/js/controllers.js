'use strict';

/* Controllers */
var histoApp = angular.module('histoApp', []);
histoApp.controller('NodeCtrl', function($scope) { 
    $scope.nodes = [ 
      {'node1' : '1234'}, 
      {'node2' : '1432'}, 
      {'node3' : '999'}   
        ];
  });
      

  

