var opcion = parseInt(prompt("Escoja una opcion:\n" +"1.suma\n"+"2.resta\n"+"3.multiplicacion\n"+"4.division\n"+"5.residuo\n"+"6.relacion menor\n"+"7.relacion mayor\n"+"8.relacion mayor igual\n"+"9.relacion menor igual"));
var resultado 
if(opcion<=0 || opcion>=9){
document.write(" ");
}else{
  var numero1 = parseInt(prompt("Inggresa el # 1"))
  var numero2 = parseInt(prompt("Ingresa el # 2"))
}

switch(opcion){
  case 1:
       resultado = numero1 + numero2;
       document.write("la suma es " + resultado);
       break;
  case 2:
       resultado = numero1 - numero2;
       document.write("la resta es " + resultado);
       break;
  case 3 :
        resultado= numero1 * numero2;
       document.write("la multiplicacion es " + resultado);
       break; 
  case 4:
       resultado = numero1 / numero2;
       document.write("la division es " + resultado);
       break;
  case 5:
       resultado= numero1 % numero2;
       document.write("el residuo es " + resultado);
       break;  
  case 6 :
        resultado = (numero1< numero2 );
        if (resultado){
          document.write("el numero menor es " + numero1)
          }else{
          document.write(numero1 +"no es menor a " + numero2)
          }
        break;
  case 7 :
        resultado=  (numero1>numero2)
         if (resultado)
          document.write("el numero mayor es " + numero1)
          else
          document.write( numero1 + "no es mayor a " + numero2)
          
       break;  
  case 8 :
        resultado = (numero1 <= numero2 )
       if (resultado)
          document.write("el numero menor igual es " + numero1)
          else
          document.write( numero1 + "no es menor igual a" + numero2)
          
       break; 
  case 9 :
        resultado = (numero1 >= numero2) 
       if (resultado)
          document.write("el numero mayor igual es " + numero1)
          else
          document.write( numero1 +" no es mayor igual" + numero2)
       break;          
  default : document.write("no es valido")
        break;
  }                        