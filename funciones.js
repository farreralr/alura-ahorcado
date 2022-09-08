var Palabras = ["HTML", "ALURA", "LATAM", "ORACLE", "CSS", "JAVA", "JAVASCRIPT", "CLIPPER", "NODEJS", "PYTHON", "NET"];
var Letra = "";
var PalabraError = "";
var PalabraKey = "";
var Palabra = "";
var Grosor = 4;

function isNull(objItem) {
    if (objItem == undefined) return true;
    if (objItem == null) return true;
    return false;
}

function getElement(txtId) {
    return document.getElementById(txtId);
}

function setHtml(txtId, htmlCode) {
    var itm = getElement(txtId);
    if (isNull(itm)) return;
    itm.innerHTML = htmlCode;
}

function addWord(txtWord) {
    txtWord = txtWord.toUpperCase();
    if (Palabras.includes(txtWord)) return;
    Palabras.push(txtWord);
}

function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getNewWord() {
    var index = getRandom(1, Palabras.length) - 1;
    return Palabras[index];
}

function setFocus(txtId) {
    var itm = getElement(txtId);
    if (isNull(itm)) return;
    itm.focus();
}

function setValue(txtId, txtValue) {
    var itm = getElement(txtId);
    if (isNull(itm)) return;
    itm.value = txtValue;
}

function main() {
    setOffKey();
    var htmlCode = '';
    htmlCode += '<div class="btnInicio">';
    htmlCode += '<button class="btn-primary" type="button" onclick="newHtmlGame()">Iniciar Juego</button>';
    htmlCode += '<button class="btn-secondary" type="button" onclick="addHtmlWord()">Agregar nueva palabra</button>';
    htmlCode += '</div>';
    setHtml("id-right", htmlCode);

}

//624x312
function LineaBase() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.lineWidth = Grosor;
    pincel.fillStyle = "#0a3871";
    pincel.beginPath();
    var constanteH = Math.floor(pantalla.width * 0.25);
    var iniCenterH = Math.floor(pantalla.width / 2) - constanteH;
    pincel.moveTo(iniCenterH, pantalla.height - 2);
    pincel.lineTo(iniCenterH + (constanteH * 2), pantalla.height - 2);
    pincel.stroke();
}

function LineaVertical() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.lineWidth = Grosor;
    pincel.fillStyle = "#0a3871";
    pincel.beginPath();
    var iniCenterH = Math.floor(pantalla.width / 2);
    pincel.moveTo(iniCenterH, pantalla.height - 2);
    pincel.lineTo(iniCenterH, 0);
    pincel.stroke();
}

function LineaViga() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.lineWidth = Grosor;
    pincel.fillStyle = "#0a3871";
    pincel.beginPath();
    var iniCenterH = Math.floor(pantalla.width / 2);
    var constanteH = Math.floor(pantalla.width * 0.70);
    pincel.moveTo(iniCenterH, 2);
    pincel.lineTo(constanteH, 2);
    pincel.stroke();
}

function LineaSoga() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.lineWidth = Grosor;
    pincel.fillStyle = "#0a3871";
    pincel.beginPath();
    var constanteH = Math.floor(pantalla.width * 0.70);
    var constanteV = Math.floor(pantalla.height * 0.20);
    pincel.moveTo(constanteH, 0);
    pincel.lineTo(constanteH, constanteV);
    pincel.stroke();
}

function LineaCabeza() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.lineWidth = Grosor;
    pincel.fillStyle = "#0a3871";
    pincel.beginPath();
    var constanteH = Math.floor(pantalla.width * 0.70);
    var constanteV = Math.floor(pantalla.height * 0.27);
    var radio = Math.floor(constanteV * 0.25);
    pincel.arc(constanteH, constanteV, radio, 0, Math.PI * 2, false);
    pincel.stroke();
}

function LineaCuerpo() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.lineWidth = Grosor;
    pincel.fillStyle = "#0a3871";
    pincel.beginPath();
    var constanteH = Math.floor(pantalla.width * 0.70);
    var constanteV = Math.floor(pantalla.height * 0.32);
    pincel.moveTo(constanteH, constanteV);
    pincel.lineTo(constanteH, constanteV * 2);
    pincel.stroke();
}

function LineaPieIzquierdo() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.lineWidth = Grosor;
    pincel.fillStyle = "#0a3871";
    pincel.beginPath();
    var constanteH = Math.floor(pantalla.width * 0.70);
    var constanteV = Math.floor(pantalla.height * 0.32);
    pincel.moveTo(constanteH, constanteV * 1.99);
    pincel.lineTo(constanteH - 20, constanteV * 2.5);
    pincel.stroke();

}

function LineaPieDerecho() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.lineWidth = Grosor;
    pincel.fillStyle = "#0a3871";
    pincel.beginPath();
    var constanteH = Math.floor(pantalla.width * 0.70);
    var constanteV = Math.floor(pantalla.height * 0.32);
    pincel.moveTo(constanteH, constanteV * 1.99);
    pincel.lineTo(constanteH + 20, constanteV * 2.5);
    pincel.stroke();
}

function LineaManoIzquierda() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.lineWidth = Grosor;
    pincel.fillStyle = "#0a3871";
    pincel.beginPath();
    var constanteH = Math.floor(pantalla.width * 0.70);
    var constanteV = Math.floor(pantalla.height * 0.32);
    pincel.moveTo(constanteH, constanteV + 10);
    pincel.lineTo(constanteH - 15, constanteV * 1.7);
    pincel.stroke();
}

function LineaManoDerecha() {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");
    pincel.lineWidth = Grosor;
    pincel.fillStyle = "#0a3871";
    pincel.beginPath();
    var constanteH = Math.floor(pantalla.width * 0.70);
    var constanteV = Math.floor(pantalla.height * 0.32);
    pincel.moveTo(constanteH, constanteV + 10);
    pincel.lineTo(constanteH + 15, constanteV * 1.7);
    pincel.stroke();
}

function createInput() {
    PalabraError = "";
    PalabraKey = getNewWord();
    Palabra = PalabraKey;
    var htmlCode = '';
    htmlCode += '<canvas></canvas><br>';
    for (var i = 0; i < PalabraKey.length; i++) {
        htmlCode += '<input id="id-letra-' + i + '" class="letra-hide" type="text" value="" disabled>';
    }
    return htmlCode;
}

function newHtmlGame() {
    setOnKey();
    var htmlCode = '';
    htmlCode += createInput() + "<br>";
    htmlCode += '<p id="id-word-error" class="word-error">' + PalabraError + '</p>';
    htmlCode += '<button class="btn-primary" type="button" onclick="newHtmlGame()">Nuevo Juego</button>';
    htmlCode += '<button class="btn-secondary ml-btn-w" type="button" onclick="main()">Desitir</button>';
    setHtml("id-right", htmlCode);
    setHtml("id-msg", "");
    LineaBase();
}

function addHtmlWord() {
    var htmlCode = '';
    htmlCode += '<label class="lbl-newword" for="id-word">Ingrese una palabra</label><br>';
    htmlCode += '<input class="txt-newword" type="text" id="id-word"></input><br>';
    htmlCode += '';
    htmlCode += '';
    htmlCode += '<button type="button" class="btn-primary" onclick="htmlAddWordAndNewGame()">Guardar y empezar</button>';
    htmlCode += '<button type="button" class="btn-secondary ml-btn-w" onclick="main()">Cancelar</button>';
    setHtml("id-right", htmlCode);
    setFocus("id-word");
}

function setGano() {
    var itm = getElement("id-msg");
    itm.style.color = "green";
    itm.innerHTML = "Ganaste<br>¡¡¡ Felicidades !!!";
}

function setPerdio() {
    var itm = getElement("id-msg");
    itm.style.color = "red";
    itm.innerHTML = "Ahorcado<br>Fin del Juego<br><br>Palabra:<br>" + PalabraKey;
}

function htmlAddWordAndNewGame() {
    var itm = getElement("id-word").value.trim();

    if (itm.length <= 0) {
        alert("Se esperaba una palabra");
        return
    }

    if (itm.indexOf(" ") >= 0) {
        alert("La palabra no debe tener espacios");
        return
    }

    addWord(itm);
    newHtmlGame();
}

function removeByIndex(str, index) {
    return str.slice(0, index) + str.slice(index + 1);
}

function keyLog(e) {
    var charCode = e.keyCode;
    if ((charCode >= 64 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode == 209 || charCode == 241) {
        Letra = e.key.toUpperCase();
        //alert(Letra);

        var Existe = false;
        for (var i = 0; i < PalabraKey.length; i++) {
            if (Letra == PalabraKey[i]) {
                setValue("id-letra-" + i, Letra);
                Palabra = Palabra.replaceAll(Letra, "");
                Existe = true;
            }
        }

        if (Existe) {
            if (Palabra.length == 0) {
                setOffKey();
                setGano();
            }
        }
        else {
            if (PalabraError.indexOf(Letra) < 0) {
                PalabraError += Letra;
                setHtml("id-word-error", PalabraError);
                Pintar(PalabraError.length);
                if (PalabraError.length >= 9) {
                    setOffKey();
                    setPerdio();
                    return;
                }
            }
        }
    }
}

function Pintar(index) {
    switch (index) {
        case 1:
            LineaVertical();
            break;
        case 2:
            LineaViga();
            break;
        case 3:
            LineaSoga();
            break;
        case 4:
            LineaCabeza();
            break;
        case 5:
            LineaCuerpo();
            break;
        case 6:
            LineaPieIzquierdo();
            break;
        case 7:
            LineaPieDerecho();
            break;
        case 8:
            LineaManoIzquierda();
            break;
        case 9:
            LineaManoDerecha();
            break;
    }
}

function setOnKey() {
    const itm = document.querySelector("body");
    itm.addEventListener("keypress", keyLog);
}

function setOffKey() {
    const itm = document.querySelector("body");
    itm.removeEventListener("keypress", keyLog, false);
}