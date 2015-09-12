/*

    @autor Maik Basso
    @email maik@maikbasso.com.br
    @telefone (55) 9952-9459

================================================================================
 * Este é um game que está sendo produzido com a utilização da MB ENGINE.
================================================================================
*/

function Principal(jogo){
	
    //variaveis da interface
    var altura;
    var largura;
    
    //classes usadas na interface
    var mat = jogo.mat;
    
    //definição dos elementos da interface
    var imagem = new ElementosGraficos().imagem;
    imagem.setImagem(jogo.imagens["icone"]);
    
    //esse é o construtor da interface na engine
    this.renderizar = function (){
        altura = window.innerHeight;
        largura = window.innerWidth;
        
        imagem.renderizar(
            mat.regraDeTres(largura, 0),
            mat.regraDeTres(altura, 0),
            mat.regraDeTres(largura, 100),
            mat.regraDeTres(altura, 100)
        );
        
		imagem.canvas.onclick = function(){
            var sobre = new Sobre(jogo);
			jogo.interfaceAtual = sobre;
			jogo.interfaceAtual.renderizar();
			destruir();
        };

    };  
    
    //método padrao de uma interface que remove a interface e seus elementos por completo
    function destruir(){
        imagem.remover();
    }
    //para ser acessado de fora da interface
    this.destruir = function (){
        destruir();
    };
}

function Sobre(jogo){
    //variaveis da interface
    var altura;
    var largura;
    
    //classes usadas na interface
    var mat = jogo.mat;
    
    //esse é o construtor da interface na engine
    this.renderizar = function (){
    	alert("Tela sobre renderizada!");
	};  
    
    //remove a interface
    function destruir(){
    	
    }
    
    this.destruir = function (){
        destruir();
    };
}