'use strict'

const botaoMostrarNumeros = document.getElementById('botao-mostrar-numeros')
const botaoMostrarNumerosPares = document.getElementById('botao-mostrar-numeros-pares')
const botaoMostrarNumerosDobro=document.getElementById('botao-mostrar-numeros-dobro')
const botaoMostrarNumerosProximoPar=document.getElementById('botao-mostrar-numeros-proximo-par')
const botaoMostrarNumerosMultiplos=document.getElementById('botao-mostrar-numeros-multiplos')
const botaoMostrarNumerosMultiplos2=document.getElementById('botao-mostrar-numeros-multiplos2')
const botaoMostrarNumerosPrimos=document.getElementById('botao-mostrar-numeros-primos')

function mostrarNumeros() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros')

    const ultimoIndice = numeros.length
    container.replaceChildren('')
    for (let contador = 0; contador < ultimoIndice; contador++) {
        const novoSpan = document.createElement('span')
        novoSpan.textContent = numeros[contador]
        container.appendChild(novoSpan)
    }
}

function mostrarNumerosPares() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros-pares')

    const ultimoIndice = numeros.length
    container.replaceChildren('')
    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 2 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }
    }
}

function mostrarNumerosDobro() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros-dobro')

    const ultimoIndice = numeros.length
    container.replaceChildren('')
    for (let contador = 0; contador < ultimoIndice; contador++) {
        const novoSpan = document.createElement('span')
        novoSpan.textContent = Number(numeros[contador]) * 2
        container.appendChild(novoSpan)
    }
}

function mostrarNumerosProximoPar() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros-proximo-par')

    const ultimoIndice = numeros.length
    container.replaceChildren('')
    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 2 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = Number(numeros[contador]) + 2
            container.appendChild(novoSpan)
        }else {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = Number(numeros[contador]) + 1
            container.appendChild(novoSpan)
        }
    }
}

function mostrarNumerosMultiplos() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros-multiplos')

    const ultimoIndice = numeros.length
    container.replaceChildren('')
    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 3 == 0 && numeros[contador] % 5 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }
    }
}

function mostrarNumerosMultiplos2(){
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros-multiplos2')

    const ultimoIndice = numeros.length
    container.replaceChildren('')
    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 3 == 0 || numeros[contador] % 5 == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }
    }
}

function mostrarNumerosPrimos() {
    const numeros = document.getElementById('numeros').value.split(',')
    const container = document.getElementById('container-mostrar-numeros-primos')

    const ultimoIndice = numeros.length
    container.replaceChildren('')
    for (let contador = 0; contador < ultimoIndice; contador++) {
        if (numeros[contador] % 1 == 0 || numeros[contador] % numeros[contador] == 0) {
            const novoSpan = document.createElement('span')
            novoSpan.textContent = numeros[contador]
            container.appendChild(novoSpan)
        }
    }
}

botaoMostrarNumeros.addEventListener('click', mostrarNumeros)
botaoMostrarNumerosPares.addEventListener('click', mostrarNumerosPares)
botaoMostrarNumerosDobro.addEventListener('click', mostrarNumerosDobro)
botaoMostrarNumerosProximoPar.addEventListener('click', mostrarNumerosProximoPar)
botaoMostrarNumerosMultiplos.addEventListener('click', mostrarNumerosMultiplos)
botaoMostrarNumerosMultiplos2.addEventListener('click', mostrarNumerosMultiplos2)
botaoMostrarNumerosPrimos.addEventListener('click', mostrarNumerosPrimos)