let current, num1, num2, operation, result=0;

//recuperation de l element courant
function handleChange(event) {
      current= parseInt(event.target.value);
}
//enregistrer l'opération et garder la première entrée en num1
function calculate(op) {
        num1 = current;
        document.getElementById("screenShow").value = null;
        operation = op;
      }
// recuperer la deuxième valeur entrée et faire l'operation suivant le choix du user  
      function afficher() {
        num2 = current;
        console.log(num2);
        
       switch(operation){
             case '+':
             result = ( num1 + num2 );
             document.getElementById("res").value = result;
             break;
             
              case '-':
             result = ( num1 - num2 );
             document.getElementById("res").value = result;
             break;
              case '*':
             result = ( num1 * num2 );
             document.getElementById("res").value = result;
             break;
              case '/':
             result = ( num1/num2 );
             document.getElementById("res").value = result;
             break;
             
             default:  ;
       }
      }