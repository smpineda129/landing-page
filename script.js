const jsSelector = document.getElementById('js');
const codeJsSection = document.querySelector('.code-js-section');
const cssSelector = document.getElementById('css3');
const codeCssSection = document.querySelector('.code-css-section');
const htmlSelector = document.getElementById('html5');
const codeHtmlSection = document.querySelector('.code-html-section');

jsSelector.addEventListener('click', function() {
    document.getElementById("js-explain").style.backgroundColor = "blueviolet";
    if ((codeHtmlSection.style.display = "block") || (codeCssSection.style.display = "block")){
        codeCssSection.style.display = 'none';
        codeHtmlSection.style.display = 'none';
        codeJsSection.style.display = 'block';
    } else {
        codeJsSection.style.display = 'block';
    }
});

cssSelector.addEventListener('click', function() {
    if ((codeHtmlSection.style.display = "block") || (codeJsSection.style.display = "block")){
        codeCssSection.style.display = 'block';
        codeHtmlSection.style.display = 'none';
        codeJsSection.style.display = 'none';
    } else {
        codeCssSection.style.display = 'block';
    }
});

htmlSelector.addEventListener('click', function() {
    if ((codeJsSection.style.display = "block") || (codeCssSection.style.display = "block")){
        codeCssSection.style.display = 'none';
        codeHtmlSection.style.display = 'block';
        codeJsSection.style.display = 'none';
    } else {
        codeHtmlSection.style.display = 'block';
    }
});



document.getElementById("js-explain").addEventListener("click", function(){

    document.getElementById("js-explain").style.backgroundColor = "blueviolet";
    document.getElementById("Front-end").style.backgroundColor = "blue";
    document.getElementById("Back-end").style.backgroundColor = "blue";
    document.getElementById("Full-stack").style.backgroundColor = "blue";

    document.getElementById("explain").textContent = "JavaScript (JS) es un lenguaje de programación utilizado para crear interactividad y dinamismo en una página web. JS permite a los desarrolladores web crear efectos visuales y animaciones, validar formularios, cargar datos dinámicamente, etc. Además, JS también se puede utilizar para interactuar con el usuario a través de eventos, como clics del mouse, desplazamientos de la página y pulsaciones de teclas.";
})

document.getElementById("Front-end").addEventListener("click", function(){

    document.getElementById("js-explain").style.backgroundColor = "blue";
    document.getElementById("Front-end").style.backgroundColor = "blueviolet";
    document.getElementById("Back-end").style.backgroundColor = "blue";
    document.getElementById("Full-stack").style.backgroundColor = "blue";

    document.getElementById("explain").textContent = "El front-end de JS se refiere a la programación del lado del cliente en una aplicación web. Los desarrolladores front-end utilizan JS para crear interactividad, dinamismo y efectos visuales en la página web. Esto incluye la manipulación del DOM (Document Object Model), la validación de formularios, la creación de animaciones y efectos visuales, y la carga de contenido dinámicamente. Los frameworks populares para el front-end de JS incluyen React, Angular y Vue.";
})

document.getElementById("Back-end").addEventListener("click", function(){

    document.getElementById("js-explain").style.backgroundColor = "blue";
    document.getElementById("Front-end").style.backgroundColor = "blue";
    document.getElementById("Back-end").style.backgroundColor = "blueviolet";
    document.getElementById("Full-stack").style.backgroundColor = "blue";

    document.getElementById("explain").textContent = "El back-end de JS se refiere a la programación del lado del servidor en una aplicación web. Los desarrolladores back-end utilizan JS para crear la lógica de negocios, manejar bases de datos, y enviar y recibir datos desde el cliente. Esto incluye la creación de APIs (Application Programming Interface), el manejo de solicitudes HTTP, y la autenticación y autorización de usuarios. Los frameworks populares para el back-end de JS incluyen Node.js, Express y NestJS.";
})

document.getElementById("Full-stack").addEventListener("click", function(){

    document.getElementById("js-explain").style.backgroundColor = "blue";
    document.getElementById("Front-end").style.backgroundColor = "blue";
    document.getElementById("Back-end").style.backgroundColor = "blue";
    document.getElementById("Full-stack").style.backgroundColor = "blueviolet";

    document.getElementById("explain").textContent = "Los desarrolladores full-stack utilizan JS tanto en el front-end como en el back-end de una aplicación web. Esto significa que son capaces de manejar todas las tareas necesarias para crear una aplicación web completa, desde el diseño de la interfaz de usuario hasta la creación de la lógica de negocios y la comunicación con la base de datos. Los desarrolladores full-stack suelen utilizar una combinación de frameworks para el front-end y el back-end, dependiendo de las necesidades del proyecto.";
})

