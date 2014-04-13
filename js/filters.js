// Instancia módulo de filters
angular.module ('Cars.filters', []).
    filter ('search', function () {
        // Retorna uma função com as regras de filtros
        return function (arr, searchTextMarca, searchTextCor) {
            // Valida se termos de busca foi passado
            if (!searchTextMarca && !searchTextCor) {
                return arr;
            }

            var result = [];

            if(searchTextMarca)
                searchTextMarca = searchTextMarca.toLowerCase();
            else
                searchTextMarca = "";

            if(searchTextCor)
                searchTextCor = searchTextCor.toLowerCase();
            else
                searchTextCor = "";

            // Busca o termo nos respectivos campos
            angular.forEach (arr, function (item) {

                if(searchTextMarca != "" && searchTextCor != ""){

                    if (item.marca.toLowerCase().indexOf(searchTextMarca) !== -1
                        && item.cor.toLowerCase().indexOf(searchTextCor) !== -1){
                        result.push(item);
                    }

                }else if(searchTextMarca != ""){

                    if (item.marca.toLowerCase().indexOf(searchTextMarca) !== -1){
                        result.push(item);
                    }

                }else if(searchTextCor != ""){

                    if(item.cor.toLowerCase().indexOf(searchTextCor) !== -1) {
                        result.push(item);
                    }

                }

            });

            return result;
    };

});