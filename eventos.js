document.addEventListener('DOMContentLoaded', function() {
    const contenedor = document.querySelector('.contenedor');
    
    contenedor.addEventListener('click', function() {
        alert('Hola! Soy el div');
    });
    const boton = document.querySelector('.contenedor button');
    
 boton.addEventListener('click', function(event) {
        event.stopPropagation();
        alert('Hola!');
    });
});
