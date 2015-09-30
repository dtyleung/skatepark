(function(){
  'use strict';
  var module = angular.module('app', ['onsen', 'service']);

  module.controller('AppController', function($scope, $data) {
    $scope.doSomething = function() {
      setTimeout(function() {
        ons.notification.alert({ message: 'tapped' });
      }, 100);
    };
  });

  module.controller('DetailController', function($scope, $data) {
    $scope.item = $data.selectedItem;
      console.log($scope.item);
      

  });

  module.controller('MasterController', function($scope, $data, ParseService) {
    //$scope.items = $data.items;
      
    setImmediate(function() {
      console.log(carousel.getActiveCarouselItemIndex());
    });
      
    $scope.showDetail = function(index) {
      var selectedItem = $scope.items[index];
      $data.selectedItem = selectedItem;
      $scope.navi.pushPage('detail.html', {title : selectedItem.title});
    };
      
    ParseService.getParks(function(results) {
      $scope.$apply(function() {
        $scope.items = results;
      });
    });      
      

        
  });
    
    

  module.factory('$data', function() {
      var data = {};

      data.items = [
          {
              title: 'Strathcona',
              location: '884 Prior Street, Vancouver, BC',
              lights: 'No',
              inout: 'Outdoor',
              desc: 'Asphalt & Concrete'
          },
          {
              title: 'Hastings',
              location: '175 Renfrew St, Vancouver, BC',
              lights: 'No',
              inout: 'Outdoor',
              desc: 'Concrete'
          },
          {
              title: 'China Creek',
              location: '175 Renfrew St, Vancouver, BC',
              lights: 'No',
              inout: 'Outdoor',
              desc: 'Concrete, Asphalt, Wood'
          },
      ];

      return data;
  });
})();

