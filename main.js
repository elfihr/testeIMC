const inputPeso = document.querySelector('#inputPeso')
const inputAltura = document.querySelector('#inputAltura')
const print = document.querySelector('#print')
const calcular = document.querySelector('#calcular')

function isNumber(n){
    if(isNaN(n)){
        return NaN; 
    }else{
        return  n
    }
}


calcular.addEventListener('click',(event) => {

    event.preventDefault();

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)
    

    if(!isNumber(peso) && !isNumber(altura)){
        print.innerHTML = 'Entre com peso e alturas validos'
        print.style.color = 'red'
        peso.value=''
        altura.value=''
    }else if(isNumber(peso) && !isNumber(altura)){
        print.innerHTML = 'Entre com uma altura valida'
        print.style.color = 'red'
        peso.value=''
        altura.value=''
    }else if(!isNumber(peso) && isNumber(altura)){
        print.innerHTML ='Entre com um peso valida'
        print.style.color = 'red'
        peso.value=''
        altura.value=''
    }else{
        
        const alturaQuadrado = altura * 2
        const imc = peso/alturaQuadrado

        print.innerHTML += `O seu IMC é ${imc.toFixed(2)}</br>`
        if(imc < 18.5){
            print.innerHTML += `Abaixo do Peso`
        }else if( imc >= 18.5 && imc < 25){
            print.innerHTML += `Peso Normal`
        }else if( imc >= 25 && imc < 30){
            print.innerHTML += `Sobrepeso`
        }else if( imc >= 30 && imc < 35){
            print.innerHTML = `Obsedidade grau 1`
        }else if( imc >= 35 && imc < 40){
            print.innerHTML += `Obsedidade grau 2`
        }else if( imc >= 40){
            print.innerHTML = `Obsedidade grau 3`
        }
    }
    peso.value=''
    altura.value=''
})

