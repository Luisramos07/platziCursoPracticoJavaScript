//CODIGO CUADRADO
console.group("Cuadrado"); //sirve para agrupar

function perimetroCuadrado(lado){
    return lado * 4 ;
}

function areaCuadrado(lado){
    return lado * lado;
}
console.groupEnd(); //CIERRA EL AGRUPAMIENTO

//CODIGO TRIANGULO
console.group("Triangulo");

function perimetroTriangulo(lado1, lado2, base){
    return (lado1 + lado2 + base);
}

function areaTriangulo(base, altura){
    return base * altura;
}
console.groupEnd();

//CODIGO CIRCULO
console.group("Circulo");

function Diametro(radio){
    return radio * 2;
}

const PI = Math.PI; //PI NO NECESITA FUNCION
console.log("PI es: " + PI + "cm");

function perimetroCirculo(radio){
    //LLAMAMOS A LA FUNCION DIAMETRO
    perimetro = Diametro(radio);
    return perimetro * PI;
}

function areaCirculo(radio){
    return radio * radio * PI;
}
console.groupEnd();

function calcularPerimetroCuadrado(){
    //para conseguir el valor que el usuario escribio en el input
    const input = document.getElementById("inputCuadrado")
    //para obtener el valor 
    const value = input.value;

    //Llamar a la funcion en js y colocar como argumento el valor que se obtuvo
    //hasta aqui el valor ya esta en la CONSOLE-INSPECCIONAR
    const perimetro = perimetroCuadrado(value);
    //para mostrar en la alerta
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado")
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("inputTriangulo1")
    const input2 = document.getElementById("inputTriangulo2")
    const input3 = document.getElementById("inputTriangulo3")
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;
    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const input2 = document.getElementById("inputTriangulo2")
    const input3 = document.getElementById("inputTriangulo3")
    const value2 = input2.value;
    const value3 = input3.value;
    const area = areaTriangulo(value2, value3);
    alert(area);
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("inputCirculo")
    const value = input.value;
    const perimetro = perimetroCirculo(value);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById("inputCirculo")
    const value = input.value;
    const area = areaCirculo(value);
    alert(area);s   
}
