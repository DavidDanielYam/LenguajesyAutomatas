const saludar = () => {
    return "Hola a todos";
}

let persona = {
    nombre: "Juan",
    apellido : "Perez",
    edad : 25,
    peso : 60.5,
    hobbies : ["musica","futbol","internet"],
    saludar
};

persona.apellido = "Perez Sosa";
console.log(persona.nombre + " "+persona.apellido);
console.log(persona.hobbies);
console.log(persona.saludar());

//Arreglo Objetos
let frutas = [
    {
        nombre: "Grosella",
        familia: "Saxifragaceas",
        calorias: 29.3
    },
    {
        nombre: "Limon",
        familia: "Rutaceas",
        calorias: 40.2
    },
    {
        nombre: "Piña",
        familia: "Bromeliaceas",
        calorias: 46
    }
];

for (let i=0; i<frutas.length; i+=1){
    console.log(frutas[i]);
}
