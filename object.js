//Ejercicio carros

var carros=[];
function objcarro(marca,modelo, annio){
    this.marca = marca;
    this.momdelo = modelo;
    this.annio = annio;
    this.cabina = "Cabina "+i;
}
for(var i=0; i<30; i++){
    carros.push(new objcarro("Marca "+i,"Modelo "+i, "Año "+i)); 
    console.log(carros[i]);
}
// Filter arreglo de objetos foltrado con condiciones
var articulos = [
    { nombre : "Bici", costo: 3000},
    { nombre : "tv", costo:2500},
    { nombre : "Libro", costo: 320},
    { nombre : "Celular", costo: 10000},
    { nombre : "Laptop", costo: 20000},
    { nombre : "Teclado", costo: 500},
    { nombre : "Audifonos", costo: 1700}
];
 var articulosFiltrados = articulos.filter(function(articulos){
    return articulos.costo <= 500;
 });

 // MAp genera un nuevo arreglo filtranndo

 var nombreArticulos = articulos.map(function(articulos){
    return articulos.nombre;
 });

 //Find  genera un nuevo arreglo
var encuentraArticulo = articulos.find(function(articulos){
    return articulos.nombre === "Laptop";
});

//foreach 
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

// some regresa validacion true false
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
 });
