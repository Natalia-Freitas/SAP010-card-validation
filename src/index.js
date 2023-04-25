import validator from './validator.js';

console.log(validator);


const recebeNum = document.querySelectorAll("#recebe")


function recebeNumero(){
  const creditCardNumber = document.getElementById("creditCardNumber").value;
  alert("Você digitou "+ creditCardNumber);
  if (creditCardNumber.length > 16 || creditCardNumber[0]===0 || creditCardNumber === ''|| creditCardNumber.length<13){
    alert("Numeração incorreta, é necessário ter entre 13 e 16 dígitos");
  } else{
    validator.isValid(creditCardNumber);
    const cardMaskify = validator.maskify(creditCardNumber);
    console.log(cardMaskify);
    document.getElementById("conteudo").innerHTML = cardMaskify
  }
  
}

  
recebeNum.forEach( function(recebe){
  recebe.addEventListener("click", recebeNumero) // função para quando clicar no botão 
    
   
});