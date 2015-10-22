/*
 
 @autor Maik Basso
 @email maik@maikbasso.com.br
 @telefone (55) 9952-9459
 
 ================================================================================
 * MB ENGINE
 * =============================================================================
 * Esta game engine disponibiliza recursos para a renderização gráfica das
 * imagens e outros elementos do canvas, também disponibliliza recursos para
 * gerenciamento de arquivos por preload e, gerenciamento completo a sons.
 ================================================================================
 */

/* =============================================================================
 * Elementos gráficos
 * =============================================================================
 * esta classe dispõe de objetos que podem ser replicados para a criação de 
 * interfaces, tais objetos contém os métodos necessários para cada tipo de
 * elemento gráfico
 * ===========================================================================*/
function ElementosGraficos() {

    //recupera a altura da janela
    function getALtura() {
        return window.innerHeight;
    }

    //recupera a largura da janela
    function getLargura() {
        return window.innerWidth;
    }

    //calcula a proporção do objeto em relação a janela
    function porcentagem(total, proporcao) {
        return (proporcao * total) / 100;
    }

    //imagem (renderiza-se adaptando-se as dimenssões do canvas)
    this.imagem = {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        img: null,
        create: false,
        //seta a imagem
        setImagem: function (img) {
            this.img = img;
        },
        //criar um canvas independente
        canvas: document.createElement("canvas"),
        //renderizar o botao na tela
        renderizar: function (x, y, w, h) {
            this.x = porcentagem(getLargura(), x);
            this.y = porcentagem(getALtura(), y);
            this.w = porcentagem(getLargura(), w);
            this.h = porcentagem(getALtura(), h);

            //adiciona um canvas ao document
            if (this.create === false) {
                document.body.appendChild(this.canvas);
                this.create = true;
            }

            this.canvas.style.position = "fixed";
            this.canvas.height = this.h;
            this.canvas.width = this.w;
            this.canvas.style.top = this.y + "px";
            this.canvas.style.left = this.x + "px";

            var ctx = this.canvas.getContext("2d");

            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            ctx.drawImage(this.img, 0, 0, this.w, this.h);
        },
        //remover canvas
        remover: function () {
            document.body.removeChild(this.canvas);
        }
    };

    //imagem (se renderiza sobre o canvas mantendo suas dimenssoes originais)
    this.imagemAdaptavel = {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        img: null,
        create: false,
        //seta a imagem
        setImagem: function (img) {
            this.img = img;
        },
        //criar um canvas independente
        canvas: document.createElement("canvas"),
        //renderizar o botao na tela
        renderizar: function (x, y, w, h) {
            this.x = porcentagem(getLargura(), x);
            this.y = porcentagem(getALtura(), y);
            this.w = porcentagem(getLargura(), w);
            this.h = porcentagem(getALtura(), h);

            //adiciona um canvas ao document
            if (this.create === false) {
                document.body.appendChild(this.canvas);
                this.create = true;
            }

            this.canvas.style.position = "fixed";
            this.canvas.height = this.h;
            this.canvas.width = this.w;
            this.canvas.style.top = this.y + "px";
            this.canvas.style.left = this.x + "px";

            var ctx = this.canvas.getContext("2d");

            ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

            ctx.drawImage(this.img, 0, 0);
        },
        //remover canvas
        remover: function () {
            document.body.removeChild(this.canvas);
        }
    };

    //canvas retangular com background
    this.retangulo = {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        cor: "",
        borda: "",
        create: false,
        //seta as dimenssoes do botao
        setPropriedades: function (cor, borda) {
            this.cor = cor;
            this.borda = borda;
        },
        //criar um canvas independente
        canvas: document.createElement("canvas"),
        //renderizar o botao na tela
        renderizar: function (x, y, w, h) {
            //armazena as dimensoes
            this.x = porcentagem(getLargura(), x);
            this.y = porcentagem(getALtura(), y);
            this.w = porcentagem(getLargura(), w);
            this.h = porcentagem(getALtura(), h);

            //adiciona um canvas ao document
            if (this.create === false) {
                document.body.appendChild(this.canvas);
                this.create = true;
            }

            if (this.borda !== "") {
                this.canvas.style.border = this.borda;
            }

            this.canvas.style.position = "fixed";
            this.canvas.height = this.h;
            this.canvas.width = this.w;
            this.canvas.style.top = this.y + "px";
            this.canvas.style.left = this.x + "px";

            var ctx = this.canvas.getContext("2d");

            if (this.cor !== "") {
                ctx.fillStyle = this.cor;
            }

            if (this.cor !== "") {
                ctx.fillRect(0, 0, this.w, this.h);
            }
        },
        //remover canvas
        remover: function () {
            document.body.removeChild(this.canvas);
        }

    };

    //texto
    this.texto = {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        texto: "",
        cor: "",
        fonte: "",
        alinhamento: "",
        create: false,
        //seta as dimenssoes do botao
        setPropriedades: function (cor, fonte, alinhamento) {
            this.cor = cor;
            this.fonte = fonte;
            this.alinhamento = alinhamento;
        },
        //criar um canvas independente
        canvas: document.createElement("canvas"),
        //renderizar o botao na tela
        renderizar: function (texto, x, y, w, h) {

            //armazena o texto
            this.texto = texto;

            //armazena as dimensoes
            this.x = porcentagem(getLargura(), x);
            this.y = porcentagem(getALtura(), y);
            this.w = porcentagem(getLargura(), w);
            this.h = porcentagem(getALtura(), h);

            //adiciona um canvas ao document
            if (this.create === false) {
                document.body.appendChild(this.canvas);
                this.create = true;
            }

            this.canvas.style.position = "fixed";
            this.canvas.height = this.h;
            this.canvas.width = this.w;
            this.canvas.style.top = this.y + "px";
            this.canvas.style.left = this.x + "px";


            var ctx = this.canvas.getContext("2d");

            if (this.cor !== "") {
                ctx.fillStyle = this.cor;
            }

            if (this.fonte !== "") {
                ctx.font = this.fonte;
            }

            if (this.alinhamento !== "") {
                ctx.textAlign = this.alinhamento;
            }

            //centraliza verticalmente
            ctx.textBaseline = "middle";

            ctx.fillText(this.texto, this.w / 2, this.h / 2);

        },
        //remover canvas
        remover: function () {
            document.body.removeChild(this.canvas);
        }

    };

    //ElementosHtml
    this.html = {
        x: 0,
        y: 0,
        w: 0,
        h: 0,
        create: false,
        elemento: null,
        //seta o nome da tag html que se deseja criar
        criarElemento: function (nomeTag) {
            this.elemento = document.createElement(nomeTag);
        },
        //get no elemento
        get: function () {
            return this.elemento;
        },
        //renderizar o elemento na tela
        renderizar: function (x, y, w, h) {

            this.x = porcentagem(getLargura(), x);
            this.y = porcentagem(getALtura(), y);
            this.w = porcentagem(getLargura(), w);
            this.h = porcentagem(getALtura(), h);

            //adiciona um canvas ao document
            if (this.create === false) {
                document.body.appendChild(this.elemento);
                this.create = true;
            }

            //this.elemento.style.border = "1px solid #000";

            this.elemento.style.position = "fixed";
            this.elemento.style.height = this.h + "px";
            this.elemento.style.width = this.w + "px";
            this.elemento.style.top = this.y + "px";
            this.elemento.style.left = this.x + "px";

        },
        //remover o elemento da tela
        remover: function () {
            document.body.removeChild(this.elemento);
        }
    };
}

/* =============================================================================
 * Elementos sonoros
 * =============================================================================
 * esta classe dispõe de objetos que podem ser replicados para a ciação de
 * efeitos sonoros, tais objetos contém os métodos necessários
 * ===========================================================================*/
function ElementosSonoros() {

    //botões com imagem
    this.ogg = {
        status: false,
        audio: null,
        //seta o audio
        setAudio: function (audio) {
            this.audio = audio;
        },
        //define se o audio terá replay ou não
        replay: function () {
            this.audio.loop = "loop";
        },
        //play
        play: function () {
            this.status = true;
            this.audio.play();
        },
        //pause
        pause: function () {
            this.status = false;
            this.audio.pause();
        },
        //stop
        stop: function () {
            this.status = false;
            this.audio.currentTime = 0;
            this.audio.pause();
        },
        //pula a reprodução para o tempo especificado
        setTempoAtual: function (segundos) {
            this.audio.currentTime = segundos;
        },
        //regula o volume do audio
        setVolume : function (nivel) {
            this.audio.volume = nivel;
        },
        //retorna o tempo total em segundos
        getTempoTotal : function () {
            return this.audio.duration;
        },
        //retorna o tempo total reproduzido pelo usuario em segundos
        getTempoDeReproducao : function () {
            return this.audio.currentTime;
        }
    };
}

/* =============================================================================
 * Efeitos gráficos
 * =============================================================================
 * esta classe dispõe de métodos utilizados para compor as animações do jogo
 * ===========================================================================*/
function EfeitosGraficos(){
    
    this.Fade = {
        In : function (elemento, tempo) {
                var inicial = 0;
                var final = 100;
                var incremento = 0;

                if (inicial === 0) {
                    incremento = 2;
                    elemento.style.display = "block";
                }
                else {
                    incremento = -2;
                }

                var opacidade = inicial;

                var intervalo = null;

                intervalo = setInterval(function () {
                    if (opacidade === final) {
                        if (final === 0) {
                            elemento.style.display = "none";
                        }
                        clearInterval(intervalo);
                    }
                    else {
                        opacidade += incremento;
                        elemento.style.opacity = opacidade / 100;
                        elemento.style.filter = "alpha(opacity=" + opacidade + ")";
                    }
                }, tempo * 10);
        },
        Out : function (elemento, tempo) {
                var inicial = 100;
                var final = 0;
                var incremento = 0;

                if (inicial === 0) {
                    incremento = 2;
                    elemento.style.display = "block";
                }
                else {
                    incremento = -2;
                }

                var opacidade = inicial;

                var intervalo = null;

                intervalo = setInterval(function () {
                    if (opacidade === final) {
                        if (final === 0) {
                            elemento.style.display = "none";
                        }
                        clearInterval(intervalo);
                    }
                    else {
                        opacidade += incremento;
                        elemento.style.opacity = opacidade / 100;
                        elemento.style.filter = "alpha(opacity=" + opacidade + ")";
                    }
                }, tempo * 10);
        }
    };
    
    this.Move = function (elemento, x, y, duracao) {
        var velocidade = 0.1;
        
        if(x < 0){
            x = x * (-1); //muda o sinal
            left();
        }
        else if(x > 0){
            right();
        }
        
        if(y < 0){
            y = y * (-1); //muda o sinal
            top();
        }
        else if(y > 0){
            bottom();
        }
        
        function left(){
            var valor = (parseFloat(elemento.style.left)/window.innerWidth)*100;
            var dl = setInterval(function (){
                valor-=velocidade;
                x-=velocidade;
                elemento.style.left = (valor * window.innerWidth) / 100 + "px";
                if (x <= 0)
                    clearInterval(dl);
            }, duracao);
        }
        function right(){
            var valor = (parseFloat(elemento.style.left)/window.innerWidth)*100;
            var dr = setInterval(function (){
                valor+=velocidade;
                x-=velocidade;
                elemento.style.left = (valor * window.innerWidth) / 100 + "px";
                if (x <= 0)
                    clearInterval(dr);
            }, duracao);
        }
        function top(){
            var valor = (parseFloat(elemento.style.top)/window.innerHeight)*100;
            var dt = setInterval(function (){
                valor-=velocidade;
                y-=velocidade;
                elemento.style.top = (valor * window.innerHeight) / 100 + "px";
                if (y <= 0)
                    clearInterval(dt);
            }, duracao);
        }
        function bottom(){
            var valor = (parseFloat(elemento.style.top)/window.innerHeight)*100;
            var db = setInterval(function (){
                valor+=velocidade;
                y-=velocidade;
                elemento.style.top = (valor * window.innerHeight) / 100 + "px";
                if (y <= 0)
                    clearInterval(db);
            }, duracao);
        }
    };
    
    this.MoveRecursivo = function (elemento, x, y, duracao) {
        var velocidade = 0.1;
        var wInicial = elemento.style.left;
        var hInicial = elemento.style.top;
        var xInicial = x;
        var yInicial = y;
        
        if(x < 0){
            x = x * (-1); //muda o sinal
            xInicial = x;
            left();
        }
        else if(x > 0){
            right();
        }
        
        if(y < 0){
            y = y * (-1); //muda o sinal
            yInicial = y;
            top();
        }
        else if(y > 0){
            bottom();
        }
        
        function left(){
            var valor = (parseFloat(elemento.style.left)/window.innerWidth)*100;
            var valorInicial = valor;
            var dr = setInterval(function (){
                valor-=velocidade;
                x-=velocidade;
                elemento.style.left = (valor * window.innerWidth) / 100 + "px";
                if (x <= 0){
                    valor = valorInicial;
                    x = xInicial;
                    elemento.style.left = wInicial;
                }
            }, duracao);
        }
        function right(){
            var valor = (parseFloat(elemento.style.left)/window.innerWidth)*100;
            var valorInicial = valor;
            var dr = setInterval(function (){
                valor+=velocidade;
                x-=velocidade;
                elemento.style.left = (valor * window.innerWidth) / 100 + "px";
                if (x <= 0){
                    valor = valorInicial;
                    x = xInicial;
                    elemento.style.left = wInicial;
                }
            }, duracao);
        }
        function top(){
            var valor = (parseFloat(elemento.style.top)/window.innerHeight)*100;
            var valorInicial = valor;
            var dt = setInterval(function (){
                valor-=velocidade;
                y-=velocidade;
                elemento.style.top = (valor * window.innerHeight) / 100 + "px";
                if (y <= 0){
                    valor = valorInicial;
                    y = yInicial;
                    elemento.style.top = hInicial;
                }
            }, duracao);
        }
        function bottom(){
            var valor = (parseFloat(elemento.style.top)/window.innerHeight)*100;
            var valorInicial = valor;
            var db = setInterval(function (){
                valor+=velocidade;
                y-=velocidade;
                elemento.style.top = (valor * window.innerHeight) / 100 + "px";
                if (y <= 0){
                    valor = valorInicial;
                    y = yInicial;
                    elemento.style.top = hInicial;
                }
            }, duracao);
        }
    };
}

/* =============================================================================
 * Evento onload
 * =============================================================================
 * inicia a execução do jogo assim que a página terminar de carregar
 * ===========================================================================*/
window.onload = function () {

    //criar um novo jogo
    var jogo = new Jogo();

    //criar a interface de carregamento
    var carregando = new Carregando(jogo);
    
    //renderiza a interface de carregamento
    carregando.renderizar();

    //define a interface a ser renderizada
    jogo.setInterface(carregando);
    
};

/* =============================================================================
 * Jogo
 * =============================================================================
 * Classe pai, guarda todos os dados do jogo.
 * ===========================================================================*/
function Jogo() {
    
    //define um fundo preto 
    document.body.style.backgroundColor="#000000";
    
    //representa a função Arquivos() contendo os vetores de imagens e sons
    this.arquivos = null;
    
    //verifica se existe a classe de arquivos no jogo se existir cria um objeto
    if (typeof Arquivos === 'function') {
        this.arquivos = new Arquivos();
    }

    /* Conteúdo carregado pela engine
     * no dispositivo do cliente
     * ================================ */
    //armazena todas as imagens do jogo
    this.imagens = new Array();
    //armazena todos os sons do jogo
    this.sons = new Array();
    /* ================================ */

    //armazena a interface atual em execução no jogo
    var interfaceAtual = null;
    //seta uma interface
    this.setInterface = function (interface){
        //faz com que a interface atual seja renderizada no envento onload
        window.onresize = interface.renderizar;
        interfaceAtual = interface;
    };
    //obtem uma interface
    this.getInterface = function (){
        return interfaceAtual;
    };
    //renderiza a interface que esta no contexto do jogo
    this.renderizarInterface = function (){
        interfaceAtual.renderizar();
    };
    //destroi a interface no contexto de jogo
    this.destruirInterface = function (){
        interfaceAtual.destruir();
    };

    //armazena dados do jogo
    //exemplo : placar => jogo.conteudo["placar"] = 222;
    this.conteudo = new Array();

}

/* =============================================================================
 * Carregando
 * =============================================================================
 * Realiza o preload de arquivos e também exibe o processo ao usuário
 * quando o processo de carregamento terminar, é disparada a execução da
 * interface principal
 * ===========================================================================*/
function Carregando(jogo) {

    //processamento local
    var statusCarregamento = false;
    var progressoAtual = 0;

    //definição dos elementos da interface
    var background = new ElementosGraficos().retangulo;
    background.canvas.style.background = "#000000"; /* Old browsers */
    background.canvas.style.background = "-moz-radial-gradient(center, ellipse cover,  #000000 0%, #2989d8 0%, #000000 100%)"; /* FF3.6+ */
    background.canvas.style.background = "-webkit-gradient(radial, center center, 0px, center center, 100%, color-stop(0%,#000000), color-stop(0%,#2989d8), color-stop(100%,#000000))"; /* Chrome,Safari4+ */
    background.canvas.style.background = "-webkit-radial-gradient(center, ellipse cover,  #000000 0%,#2989d8 0%,#000000 100%)"; /* Chrome10+,Safari5.1+ */
    background.canvas.style.background = "-o-radial-gradient(center, ellipse cover,  #000000 0%,#2989d8 0%,#000000 100%)"; /* Opera 12+ */
    background.canvas.style.background = "-ms-radial-gradient(center, ellipse cover,  #000000 0%,#2989d8 0%,#000000 100%)"; /* IE10+ */
    background.canvas.style.background = "radial-gradient(ellipse at center,  #000000 0%,#2989d8 0%,#000000 100%)"; /* W3C */
    background.canvas.style.filter = "progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#000000',GradientType=1 )"; /* IE6-9 fallback on horizontal gradient */

    
    var logoMBEngine = new ElementosGraficos().imagem;
    var imagemLogo = new Image();
    //background personalizado da MB engine
    imagemLogo.src = "data:image/png;base64,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";
    logoMBEngine.setImagem(imagemLogo);

    var barra = new ElementosGraficos().retangulo;
    barra.setPropriedades("#969696", "");

    var barraProgresso = new ElementosGraficos().retangulo;
    barraProgresso.setPropriedades("#ffffff", "");

    var textoCarregando = new ElementosGraficos().texto;
    textoCarregando.setPropriedades("#000000", "1em arial", "center");

    //armazena o numero de elementos ja carregados
    var numElementosCarregados = 0;

    //numero total de elementos à carregar
    var numTotalElementos = 0;

    //controla o progresso de carregamento
    function progresso() {

        //incrementa as imagens carregadas
        numElementosCarregados++;

        progressoAtual = Math.round(numElementosCarregados * 100 / numTotalElementos);

        barraProgresso.renderizar(5, 90, progressoAtual - 10, 5);
        textoCarregando.renderizar("Carregando... (" + progressoAtual + "%)", 5, 87.5, 90, 10);

        //verifica se o progresso esta em 100%
        if (numElementosCarregados === numTotalElementos) {
            //inicia a tela principal do jogo
            var principal = new Principal(jogo);
            jogo.setInterface(principal);
            jogo.renderizarInterface();
            //remove a tela de carregando
            destruir();
        }
    }

    //inicia o carregamento dos arquivos
    function iniciarCarregamento() {

        //conta elementos
        for (var i in jogo.arquivos.imagens) {
            numTotalElementos++;
        }
        for (var i in jogo.arquivos.sons) {
            numTotalElementos++;
        }

        //cria as imagens        
        for (var i in jogo.arquivos.imagens) {
            var imagem = new Image();
            imagem.onload = progresso;
            imagem.src = jogo.arquivos.imagens[i];
            jogo.imagens[i] = imagem;
        }

        //cria os sons        
        for (var i in jogo.arquivos.sons) {
            var audio = new Audio();
            audio.src = jogo.arquivos.sons[i];
            audio.preload = "auto";
            audio.load();

            audio.addEventListener('canplay', function () {
                progresso();
            });

            //cria o controlador de som da engine e armazena o novo som
            jogo.sons[i] = new ElementosSonoros().ogg;
            jogo.sons[i].setAudio(audio);

        }

    }

    //esse é o construtor da interface na engine
    this.renderizar = function () {
        background.renderizar(0, 0, 100, 100);
        logoMBEngine.renderizar(25, 25, 50, 50);
        
        barra.renderizar(5, 90, 90, 5);

        if (statusCarregamento === false) {
            statusCarregamento = true;
            //correção para aparecer a imagem da engine
            imagemLogo.onload = function () {
                iniciarCarregamento();
            };
        }
        else {
            textoCarregando.renderizar("Carregando... (" + progressoAtual + "%)", 5, 87.5, 90, 10);
            barraProgresso.renderizar(5, 90, progressoAtual - 10, 5);
        }
        
    };

    //método padrao de uma interface que remove a interface e seus elementos por completo
    function destruir() {
        logoMBEngine.remover();
        textoCarregando.remover();
        barraProgresso.remover();
        barra.remover();
    }
}