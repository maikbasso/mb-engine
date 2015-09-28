/*

    @autor Maik Basso
    @email maik@maikbasso.com.br
    @telefone (55) 9952-9459

================================================================================
 * Este é um game que está sendo produzido com a utilização da MB ENGINE.
================================================================================
*/
function Principal(jogo){

	//definição dos elementos da interface
	var imagem = new ElementosGraficos().imagem;
	imagem.setImagem(jogo.imagens["logoMBEngine"]); //referencia da imagem declarada em MeuJogo.file.js

	//esse é o construtor da interface na engine
	this.renderizar = function (){

		imagem.renderizar(0, 0, 100, 100);

		imagem.canvas.onclick = function(){
			destruir();
			var sobre = new Sobre(jogo);
			jogo.setInterface(sobre);
			jogo.renderizar();
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