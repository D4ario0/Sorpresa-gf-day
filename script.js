document.addEventListener('DOMContentLoaded', function () {
    const cancelBtn = document.getElementById('troll');
    const acceptBtn = document.getElementById('accept');
    const buttonBox = document.getElementById('btn-box');
    const flower = document.getElementById('flower');
    const titulo = document.querySelector(".titulo");
    let hoverCount = 0;


    cancelBtn.addEventListener('mouseover', moveTrollButton);
    cancelBtn.addEventListener('click', disappearButton);
    acceptBtn.addEventListener('click', accept);

    function moveTrollButton() {
        const currentTop = parseInt(getComputedStyle(cancelBtn).top) || 0;
        let newTop;

        if (hoverCount === 0) {
            newTop = currentTop - 80;
        } else if (hoverCount === 1) {
            newTop = currentTop + 150;
        } else {
            newTop = 0;
            hoverCount = -1;
        }

        cancelBtn.style.top = `${newTop}px`;
        hoverCount++;
    }

    function disappearButton() {
        cancelBtn.style.display = 'none';
    }

    function accept() {
        buttonBox.style.display = 'none';
        const currentLeft = parseInt(getComputedStyle(flower).left) || 0;

        flower.style.left = `${currentLeft - 400}px`;

        const message = document.createElement('p')
        message.textContent = `Gracias por estar ahí, cuando las cosas van bien y cuando van mal.
        Gracias por ser la piedra de apoyo para que yo pueda salir adelante.\n Gracias por escucharme soñar despierto. 
        Gracias por entender, porque... tu siempre entiendes.

        Te amo, ¿cómo lo sé? cada día que pasa no es un día más que sin verte, sino un día menos para volver a verte.
        Te amo porque sin querer he puesto tu bien por delante del mío.
        Si no soy cariñoso o meloso todo el tiempo, no es porque no te quiero, es porque quiero que sea un momento muy especial.
        
        En fin, gracias por todo.`;
        message.style.whiteSpace = "pre-line";

        titulo.append(message)

        setTimeout(() => {
            message.classList.add('show');
        }, 10);

        setTimeout(() => {
            window.location.href = 'https://www.youtube.com/watch?v=ooCnP_s0K6s';
        }, 600000);
    }
});