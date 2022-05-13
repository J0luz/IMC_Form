const form = document.querySelector('#formulario')
form.addEventListener('submit', function (e) {
  e.preventDefault()

  const inputPeso = document.querySelector('#peso')
  const inputAltura = document.querySelector('#altura')

  // para pegar somento o valor e mudar ele para number, faça uma nova variável
  peso = Number(inputPeso.value)
  altura = Number(inputAltura.value)
  if (!peso && !altura) {
    setResultado('Peso e Altura inválidos', false)
    inputPeso.classList.add('error-input')

    inputAltura.classList.add('error-input')
    return
  }
  if (!altura) {
    setResultado('Altura Inválida', false)
    inputAltura.classList.add('error-input')
    return
  }
  if (!peso) {
    setResultado('Peso Inválido', false)
    inputPeso.classList.add('error-input')
    return
  }

  inputAltura.classList.remove('error-input')
  inputPeso.classList.remove('error-input')
  const imc = getIMC(peso, altura)
  const nivelImc = getNivelImc(imc)
  const msg = `Seu IMC é: ${imc} <br> (${nivelImc})`

  setResultado(msg, true)
  console.log(imc, nivelImc)
})

function getIMC(peso, altura) {
  const imc = peso / (altura * altura)
  return imc.toFixed(2)

  // Criar a função para pegar o IMC e o seu calculo.
}

function criaP() {
  // "createElement cria uma tag html, colocando o P ele cria um paragrafo"
  const p = document.createElement('p')
  return p
}

function setResultado(msg, isValid) {
  const resultado = document.querySelector('#resultado')
  resultado.innerHTML = ''

  const p = criaP()
  p.innerHTML = msg
  if (isValid) {
    p.classList.add('paragrafo-resultado')
  } else {
    p.classList.add('bad')
  }
  // "AppendChild → adiciona um filho no fim da caixa pai"
  resultado.appendChild(p)
  // classList.add → adiciona um classe para o elemento p.
  // p.classList.add('paragrafo-resultado')
}

function getNivelImc(imc) {
  const nivel = [
    'Abaixo do peso',
    'Peso Normal',
    'Sobrepeso',
    'Obesidade Grau 1',
    'Obesidade grau 2',
    'Obesidade grau 3'
  ]
  if (imc >= 39.9) return nivel[5]
  if (imc >= 34.9) return nivel[4]
  if (imc >= 39.9) return nivel[3]
  if (imc >= 24.9) return nivel[2]
  if (imc >= 18.5) return nivel[1]
  if (imc < 18.5) return nivel[0]
}
// const inputPeso = Number(document.querySelector('#peso'))
// const inputAltura = Number(document.querySelector('#altura'))
// form.addEventListener('submit', function (e) {
//   alert(inputPeso.value)
// })
// function calculaIMC() {
//   const inputPeso = e.target.querySelector('#peso')
//   const inputAltura = e.target.querySelector('#altura')

//   // para pegar somento o valor e mudar ele para number, faça uma nova variável
//   peso = Number(inputPeso.value)
//   altura = Number(inputAltura.value)

//   const IMC = (peso / altura) * altura
//   return IMC
// }
