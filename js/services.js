// Instancia o módulo de services
angular.module('Cars.services', [])
    .service("carService", [function () {

        // Base de veículos
        var bd = [
                    {
                        "combustivel" : "Flex",
                        "imagem" : null,
                        "marca" : "Volkswagen",
                        "modelo" : "Gol",
                        "placa" : "FFF­5498"
                    },
                    {
                        "combustivel" : "Gasolina", 
                        "imagem" : null,
                        "marca" : "Volkswagen",
                        "modelo" : "Fox",
                        "placa" : "FOX­4125"
                    },
                    {
                        "combustivel" : "Alcool",
                        "imagem" : "https://lh4.googleusercontent.com/­_AhcQKHf7rM/AAAAAAAAAAI/AAAAAAAAAAA/QM­pqL4NYaE/s48­c­k­no/photo.jpg",
                        "marca" : "Volkswagen",
                        "modelo" : "Fusca",
                        "placa" : "PAI­4121"
                    }
                ];


        /*
             Método para listar veículos
             @param string
             @return object
        */
        this.getCarList = function(Placa){

            // Objeto de logomarca do fabricante ("marca")
            var logo =  {
                            "Volkswagen" : "http://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Volkswagen_Logo.png/769px-Volkswagen_Logo.png",
                            "Fiat" : "http://upload.wikimedia.org/wikipedia/pt/7/70/Fiat_logo.jpg",
                            "Honda" : "http://autoclube.blog.br/wp-content/uploads/2011/03/Logo-da-Honda.jpg",
                            "Chevrolet" : "http://www.maxpressnet.com.br/e/gm/imagens/lg_chevrolet_new.gif",
                            "Toyota" : "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR_dEhxmQn3NFuDPYhWLotC6HQa7-vm-mfaU2Z0-nCKhuZEp2T8U0egm-M",
                            "BMW" : "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTt6oRSBDSDiCum0vU5KV28yIFX6LdKw_b81QeSsacatrVs4dYqqFLPsA",
                            "Mercedes Benz" : "http://3.bp.blogspot.com/-jmXLTGgzDGg/Ua3c7ARJf8I/AAAAAAAAB8c/kcQGlqROyq8/s1600/MERCEDEZ.jpg",
                            "Peugeot" : "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTJX9wCxIv336x377EymWYJU5l7im8pSp7wVXRLi-tjSUh897HaUvKpeA",
                            "Renault" : "data:image/jpeg;base64,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",
                        }

            for(i in bd) {
                // Verifica se o veículo tem imagem, caso não tenha
                // carrega a imagem do fabricante ("marca")
                if(bd[i].imagem == null || bd[i].imagem == ""){
                    if(logo.hasOwnProperty(bd[i].marca)){
                        bd[i].imagemMarca = logo[bd[i].marca];
                    }
                }

                // Verifica se veículo tem atributo cor, caso não tenha
                // seta cor como "vazio"
                if(!bd[i].hasOwnProperty("cor")){
                    bd[i].cor = "";
                }

                // Verifica se o parâmetro placa foi informado.
                // Caso tenha sido, trata-se de uma edição de veículo
                // retorna o objeto somente do veículo cuja placa corresponde
                if(Placa){
                    if(Placa.PlacaNum == bd[i].placa){
                        var itemSelected = bd[i];
                        return itemSelected;
                    }
                }

            }

            return bd;
        }

        /*
            // Método para salvar veículo
            @param object, bool
            @return object
        */
        this.save = function(data, update){

            // Valida se a ação é de edição, se 'FALSO' trata-se de uma adição
            if(!update){

                // Adiciona dados no objeto veículo
                bd.push(
                        {
                            placa : data.placa,
                            imagem : data.imagem,
                            marca : data.marca,
                            modelo : data.modelo,
                            combustivel : data.combustivel,
                            cor : data.cor
                        }
                    );
            }else{

                // Busca no objeto o veículo de placa correspondente,
                // modifica os dados e retorna o objeto alterado;
                for(i in bd) {
                    if(data.placa == bd[i].placa){
                        bd[i].imagem = data.imagem;
                        bd[i].marca = data.marca;
                        bd[i].modelo = data.modelo;
                        bd[i].combustivel = data.combustivel;
                        bd[i].cor = data.co;
                        return bd[i];
                    }
                }

            }

            var result = this.getCarList();
            return result;
        }

        /*
            // Método para excluir veículo
            @param object
            @return object
        */
        this.destroy = function(data){

            for(i in bd) {
                // Busca veículo com placa correspondente
                if(data.itemSelected.placa == bd[i].placa){
                    // remove vículo selecionado do objeto
                    bd.splice(i,1);
                }
            }

            var result = this.getCarList();
            return result;
        }

    }]);