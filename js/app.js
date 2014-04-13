// Instanciando módulo Cars e rotas da aplicação
angular.module('Cars', [
  'ngRoute',
  'Cars.filters',
  'Cars.controllers',
  'Cars.services',
  'ngTable',
  'ngAnimate'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {templateUrl: 'partials/list.html', controller: 'ListCars'});
  $routeProvider.when('/create', {templateUrl: 'partials/data.html', controller: 'CreateCars'});
  $routeProvider.when('/update/:PlacaNum', {templateUrl: 'partials/data.html', controller: 'EditCars'});
  $routeProvider.otherwise({redirectTo: '/list'});
}]);