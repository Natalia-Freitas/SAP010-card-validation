import validator from './validator.js';

console.log(validator);


const recebeNum = document.querySelectorAll("#recebe")


function recebeNumero(event){
  let creditCardNumber = document.getElementById("creditCardNumber").value;
    alert("Você digitou "+ creditCardNumber);
    if (creditCardNumber.length > 16 || creditCardNumber[0]==0 || creditCardNumber == ''){
      alert("Número de cartão inválido, é necessário ter entre 13 e 16 dígitos");
    }
}


recebeNum.forEach( function(recebe){
    recebe.addEventListener("click", recebeNumero) // função para quando clicar no botão mostrar o alert
    recebe.addEventListener("click", function(){
        console.log(validator.isValid());
    });
    
   
    });