/*

    @autor Maik Basso
    @email maik@maikbasso.com.br
    @telefone (55) 9952-9459

*/

/* =============================================================================
 * Pre-load de arquivos
 * =============================================================================
 * Atualmente esta classe tem suporte a imagens e a sons para preload dos
 * arquivos na tela de carregando.
 * =============================================================================
 * As imagens podem ser convertidas para Data:Uri no link abaixo:
 *  http://duri.me/
 *  
 * A MB Engine suporta data:uri :)
 * 
 * usar o prefixo:
 * 
 * data:image/png;base64,...
 * ===========================================================================*/
function Arquivos(){
    
	 // os indice serão usados para recuperar os arquivos no decorrer da construção do jogo 
	
    //imagens
    this.imagens = new Array();
  	//exemplo
	this.imagens["logoMBEngine"] = "arquivos/imagens/MBEngine-logo.png";
	
    //Sons
    this.sons = new Array();
	//Exemplo de audio
    //this.sons["trilhaSonora"] = "arquivos/sons/trilhaSonora.ogg";
    
}