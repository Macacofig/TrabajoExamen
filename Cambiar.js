// Esperar a que la pagina esté completamente cargada
document.addEventListener("DOMContentLoaded", () => 
{ 
    // Seleccionar el botón con la clase "boton-prin"
    const boton = document.querySelector(".boton-prin");
    
    // Añadir el evento de clic al botón
    boton.addEventListener("click", () => 
    {
        // Obtener elementos del recuadro-container
        const contenedores = document.querySelectorAll(".recuadros-container");
        
        //arrayl para contener los recuadros
        let todos = [];
        
        // Recorrer cada contenedor y añadir los contenedores a [todos]
        contenedores.forEach(c => 
        {
            todos.push(...Array.from(c.children));
        });

        // Invertir los recuadros
        todos.reverse();

        //Eliminar el contenido de los contenedores del html
        contenedores[0].innerHTML = "";
        contenedores[1].innerHTML = "";

        // Añadir en el nuevo orden los recuadros a los contenedores
        todos.forEach((div, i) => 
        {
            if (i < 3) {
                contenedores[0].appendChild(div);
            } else {
                contenedores[1].appendChild(div);
            }
        });
    });
});