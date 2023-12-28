const cambiarMes = (mes) => {
    var imagen = document.getElementById("imagenMes");

    switch (mes) {
        case 'Enero':
            imagen.src = 'img/gato1.jpeg';
            break;
        case 'Febrero':
            imagen.src = 'img/gato2.jpeg';
            break;
        case 'Marzo':
            imagen.src = 'img/gato3.jpeg';
            break;
        case 'Abril':
            imagen.src = 'img/gato4.jpeg';
            break;
        case 'Mayo':
            imagen.src = 'img/gato5.jpeg';
            break;
        case 'Junio':
            imagen.src = 'img/gato6.jpeg';
            break;
        case 'Julio':
            imagen.src = 'img/gato7.jpeg';
            break;
        case 'Agosto':
            imagen.src = 'img/gato8.jpeg';
            break;
        case 'Septimbre':
            imagen.src = 'img/gato9.jpeg';
            break;
        case 'Octubre':
            imagen.src = 'img/gato10.jpeg';
            break;
        case 'Noviembre':
            imagen.src = 'img/gato11.jpeg';
            break;
        case 'Diciembre':
            imagen.src = 'img/gato12.jpeg';
            break;
        default:
            imagen.src = 'img/gato1.jpeg';
            break;
    }
};