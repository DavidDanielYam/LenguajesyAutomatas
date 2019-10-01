  //reemplaza todas la vocales ne la palabra correcaminos 

  
        //reeemplaza la ultima letra cuando no es una vocal 
  //let mensaje= "correcaminos";
  //let newMensaje= mensaje.replace(/[^aeiou]$/g,"*");
        //reemplaza la ultima letra de la palabra que sea vocal 
  /*let mensaje= "zoologico";
  let newMensaje= mensaje.replace(/[aeiou]$/g,"*");
   
 //[] los corchetes significa conjunto o un grupo 
  console.log(newMensaje);*/

  let mensaje2= "el 20 de enero de 2019 se dio inicio a la 3 semana nacional de tecnologia";
  //sustituye los numeros en la oracion 
  //let newMensaje2=mensaje2.replace(/[0-9]/g,"0");
  //sustituye los numeros de 2 a 4
  //let newMensaje2=mensaje2.replace(/[0-9]{2,4}/g,"0");
  //elimina todos los numero en la oracion 
  //let newMensaje2=mensaje2.replace(/[0-9]/g,"");
  //elimina las palabras que tengan 5 letras 
   let newMensaje2=mensaje2.replace(/[a-z]{5,}/g,"");
  
  console.log(newMensaje2);