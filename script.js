//--------------------------------------------------------------
//pegando dados do json
fetch('texto.json')
.then(colhidos => colhidos.json())
.then(dados => {
//// - - - - - //// - - - - - //// - - - - - //// - - - - - ////

//--------------------------------------------------------------
//anotando quantos indices tem, ou seja \/
//indices = elementos - 1
let indices = dados.length - 1;
//// - - - - - //// - - - - - //// - - - - - //// - - - - - ////

//--------------------------------------------------------------
//gerar aleatorio
let aleatorio = Math.floor(Math.random() * indices);
//// - - - - - //// - - - - - //// - - - - - //// - - - - - ////

//--------------------------------------------------------------
//cria pergunta_atual
//adiciona o indice alealorio na pergunta_atual, ou seja\/
//a pergunta_atual fica com o objeto de 1 unica pergunta\/
//com alternativas.
let pergunta_e_respostas = dados[aleatorio];
//// - - - - - //// - - - - - //// - - - - - //// - - - - - ////

//--------------------------------------------------------------
//imprimir na tela, quadro de pergunta e alternativas
document.getElementById('id_pergunta').innerText = pergunta_e_respostas[0];

    document.getElementById('id_alternativa_1').innerText = pergunta_e_respostas[1];
    document.getElementById('id_alternativa_2').innerText = pergunta_e_respostas[2];
    document.getElementById('id_alternativa_3').innerText = pergunta_e_respostas[3];
    document.getElementById('id_alternativa_4').innerText = pergunta_e_respostas[4];
    let resposta_certa = pergunta_e_respostas[5];

    let escolha;
    let resultado;
    document.getElementById('id_alternativa_1').addEventListener('click', function(){
        let esta_certo_disso = confirm("Você tem certeza de que deseja continuar?");
        escolha = pergunta_e_respostas[1];
        console.log(escolha);
        
        if(escolha === resposta_certa){
            resultado = true;
            alert("Certa Resposta!");
            document.querySelector("#proxima").style.display = "flex";
        }else{
            resultado = false;
            alert("Infelizmente você errou!");
            document.querySelector("#proxima").style.display = "flex";
        }
        console.log(resultado);
    });
    
    document.getElementById('id_alternativa_2').addEventListener('click', function(){
        let esta_certo_disso = confirm("Você tem certeza de que deseja continuar?");
        escolha = pergunta_e_respostas[2];
        console.log(escolha);
    
        
        if(escolha === resposta_certa){
            resultado = true;
            alert("Certa Resposta!");
            document.querySelector("#proxima").style.display = "flex";
        }else{
            resultado = false;
            alert("Infelizmente você errou!");
            document.querySelector("#proxima").style.display = "flex";
        }
        console.log(resultado);
    });
    document.getElementById('id_alternativa_3').addEventListener('click', function(){
        let esta_certo_disso = confirm("Você tem certeza de que deseja continuar?");
        escolha = pergunta_e_respostas[3];
        console.log(escolha);
    
        
        if(escolha === resposta_certa){
            resultado = true;
            alert("Certa Resposta!");
            document.querySelector("#proxima").style.display = "flex";
        }else{
            resultado = false;
            alert("Infelizmente você errou!");
            document.querySelector("#proxima").style.display = "flex";
        }
        console.log(resultado);
    });
    document.getElementById('id_alternativa_4').addEventListener('click', function(){
        let esta_certo_disso = confirm("Você tem certeza de que deseja continuar?");
        escolha = pergunta_e_respostas[4];
        console.log(escolha);
    
        if(escolha === resposta_certa){
            resultado = true;
            alert("Certa Resposta!");
            document.querySelector("#proxima").style.display = "flex";
        }else{
            resultado = false;
            alert("Infelizmente você errou!");
            document.querySelector("#proxima").style.display = "flex";
    }
    console.log(resultado);
    });
    
    document.getElementById("proxima").addEventListener('click', function(){
alert();
    });

    });