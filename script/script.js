var hackatonMeli = angular.module('hackatonMeli',['ngRoute']);

hackatonMeli.config(function($routeProvider){
  $routeProvider

  .when('/items',{
    templateUrl: 'views/items.html'
  })

  .when('/buscar',{
    templateUrl: 'views/buscar.html'
  })

  .when('/ayuda',{
    templateUrl: 'views/ayuda.html'
  });
});

