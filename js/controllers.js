// Instanciando módulo de controllers
angular.module('Cars.controllers', [])

    // Controller para listar veículos
    .controller('ListCars', ['$scope', 'carService', 'ngTableParams', function ($scope, carService, ngTableParams) {

        // Busca lista de veículos
        var List = carService.getCarList(false);

        // Objeto de configurações da tabela de veículos
        var tableParams  = new ngTableParams({
                page: 1,
                count: 5
            },
            {
                // Total de veículos a ser listado
                total: List.length,

                // Configuração da paginação
                getData: function($defer, params) {

                    $defer.resolve(List.slice(
                                            (params.page() - 1) * params.count(),
                                            params.page() * params.count()
                                        )
                    )
                }
            });

        // Seta escopo com a lista de veículos
        $scope.tableParams = tableParams;
    }])

    // Controller para adição de veículos
    .controller('CreateCars', ['$scope', 'carService', function ($scope, carService) {

        // Método para adicionar veículo
        $scope.add = function() {

            // Método para salvar dados do veículo
            $scope.tableParams = carService.save($scope.itemSelected, false);

            // Atributo para carregar informações de adição na view
            $scope.add = true;

            // Redirect para a lista de veículos
            location.href = "#/list";
        }

    }])

    // Controller para edição de veículos
    .controller('EditCars', ['$scope', 'carService', '$route', function($scope, carService, $route) {

        // Parametro de identificação para carregar os dado do veículo
        // a ser editado
        var Placa = $route.current.params;

        // Busca veículo a ser editado
        $scope.itemSelected = carService.getCarList(Placa);

        // Atributo para acionar botão de 'delete' na view
        $scope.remove = true;

        // Método para salvar modificações
        $scope.save = function() {
          $scope.tableParams = carService.save($scope, true);

          // Redirect para a lista de veículos
          location.href = "#/list";
        };

        // Método para excluir veículo
        $scope.destroy = function() {
          $scope.tableParams = carService.destroy($scope);

          // Redirect para a lista de veículos
          location.href = "#/list";
        };

    }]);

