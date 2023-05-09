var btnCripto = document.querySelector('.btn-criptografar');
var btnDescripto = document.querySelector('.btn-descriptografar');
var textInput = document.querySelector('#input-texto');
var outInput = document.querySelector('#output');

function criptografar(){
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = '<textarea readOnly id="outinput-text">' + resultCripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

btnCripto.onclick = criptografar;

function descriptografar(){
    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    document.getElementById('output').innerHTML = '<textarea readOnly id="outinput-text">' + resultDescripto + '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

btnDescripto.onclick = descriptografar;

function copiar(){
    var Cop = document.getElementById('outinput-text');

    Cop.select();
    document.execCommand("copy");
    alert("Texto Copiado");
}