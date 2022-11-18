let x = 0;
let y = 0;
let largura = 0;
let comprimento = 0;
let direcao = 'N';

const tamanhoGrid = () => {
    const inputLargura = document.querySelector("#inputLargura")
    const inputComprimento = document.querySelector("#inputComprimento")
    largura = inputLargura.value
    comprimento = inputComprimento.value

    let larguraGrid = document.getElementById('largura').innerHTML = 'Largura: ' + largura;
    let comprimentoGrid = document.getElementById('comprimento').innerHTML = 'Comprimento: ' + comprimento;
}

const andarFrente = (frente) => {
    if (frente) {
        switch (direcao) {
            case 'N': 
                if (y == comprimento) {
                    y = comprimento;
                }
                else {
                    y += 1;
                }
            break;
            
            case 'L': 
                if (x == largura) {
                    x = largura
                }
                else {
                    x += 1;
                }
            break;
            
            case 'S': 
                if (y == 0) {
                    y = 0;
                }
                else {
                    y -= 1;
                }
            break;
            
            case 'O':
                if (x == 0) {
                    x = 0;
                }
                else {
                    x -= 1;
                }
            break;
        }
    }
    else {
        switch (direcao) {
            case 'N': 
                if (y == 0) {
                    y = 0;
                }
                else {
                    y -= 1;
                }
            break;
            
            case 'L': 
                if (x == 0) {
                    x = 0;
                }
                else {
                    x -= 1;
                }
            break;
            
            case 'S': 
                if (y == comprimento) {
                    y = comprimento;
                }
                else {
                    y += 1;
                }
            break;
            
            case 'O':
                if (x == largura) {
                    x = largura;
                }
                else {
                    x += 1;
                }
            break;
        }
    }
}

const andar = () => {
    const inputComando = document.querySelector("#inputComando")
    const value = inputComando.value.toUpperCase()


    for (let i = 0; i < value.length; i++) {
        switch (value[i]) {
            case 'F':
                andarFrente(true)
            break;

            case 'T':
                andarFrente(false)
            break;

            case 'D': 
                if (direcao == 'N') {
                    direcao = 'L'
                    break;
                }
                if (direcao == 'L') {
                    direcao = 'S'
                    break;
                }
                if (direcao == 'S') {
                    direcao = 'O'
                    break;
                }
                if (direcao == 'O') {
                    direcao = 'N'
                    break;
                }
            break;

            case 'E': 
                if (direcao == 'N') {
                    direcao = 'O'
                    break;
                }
                if (direcao == 'O') {
                    direcao = 'S'
                    break;
                }
                if (direcao == 'S') {
                    direcao = 'L'
                    break;
                }
                if (direcao == 'L') {
                    direcao = 'N'
                    break;
                }
            break;
            default:
                alert("Comandos inválidos")
                x = 0;
                y = 0;
                direcao = 'N';
        }
    }
    const moveX = document.getElementById('x').innerHTML = "X: " + x;
    const moveY = document.getElementById('y').innerHTML = "Y: " + y;
    const direcaoAtual = document.getElementById('direcaoAtual').innerHTML = "Direção atual: " + direcao;
}

const resetar = () => {
    alert ("Tudo foi resetado!")
    document.location.reload()
}