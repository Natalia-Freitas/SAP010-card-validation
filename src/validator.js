const validator = {
  isValid: function(creditCardNumber){
  
    const numeroArray = creditCardNumber.split('');
    let dig;
    const arr = [];
    let total = 0;
    
    for (let i = 0; i < numeroArray.length; i++){
      if ((i + 1) % 2 !== 0){ // Verifica se a posição é ímpar
        dig = numeroArray[i] * 2; // Multiplica os números por 2
        
        if (dig > 9) { // Se o número multiplicado for maior que 9, realiza a subtração abaixo
          arr[i] = dig - 9;
        } else{ // Aqui ele pega o número que não precisou realizar a subtração
          arr[i] = dig;
        }
      } else { // Verifica a posição par
        arr[i] = Number(creditCardNumber[i]); // Converte para número e guarda no array
      }
      
      total += arr[i]; // soma 
    }
    
    console.log(total); // Mostra o total da soma
    if(total % 10 === 0){
      alert("Cartão válido");
    } else{
      alert("Cartão Inválido");
    }
  },
  maskify: function(creditCardNumber){
    if (creditCardNumber.length >=4){
      return"#".repeat(creditCardNumber.length - 4) + creditCardNumber.slice(-4);  // repete o #, menos os 4 últimos digitos
    } else{
      return creditCardNumber;
    }
  
  
  }
  
  
  
};

export default validator;


