

const modal = document.getElementsByClassName("modalTrat")

for (const element of modal) {
    element.addEventListener ("click", e => {
        e.preventDefault();
        crear_modal(element.id)
})}


function crear_modal (id) {
    const modal_tratamientos = document.getElementById("modal_tratamientos")

    let titulo, precio, texto, duracion;

    switch (id) {
        case "modal1":
        case "splide1":
            titulo = "Masaje descontracturante"
            precio = 30
            texto = "El masaje descontracturante es un masaje pensado y aplicado para la zona dorsal o posterior del cuerpo, es decir la espalda. Este masaje libera tensiones acumuladas mayormente en la zona escapular y dorsal espinal. <br> Tambien logra liberar dolores de cabeza y cervicales producto de contracturas localizadas en las zonas anteriomente mencionadas."
            duracion = 45
            break;

        case "modal2":
        case "splide2":
            titulo = "Masaje relajante"
            precio = 30
            texto = "El masaje relajante es una técnica de relax que aplica para todas las personas cualquiera sea su edad que estén sobrellevando un nivel de estés que no les permita continuar con su rutina diaria.<br> Lo que buscamos con este masaje es equilibrar la mente y el cuerpo para lograr la máxima relajación."
            duracion = 45
            break;

        case "modal3":
        case "splide3":
            titulo = "Sesión de masajes"
            precio = 45
            texto = "Con una sesión completa de masajes podremos hacer que un paciente experimente una terapia corporal general. En ésta misma haremos un masaje de pies a cabeza y el paciente podrá elegir dónde desea mayor atención.<br>Una experiencia personalizada del masaje que le permitirá al paciente descansar totalmente."
            duracion = 90
            break;

        case "modal4":
        case "splide4":
            titulo = "Masaje pre y post deportivo"
            precio = 20
            texto = "El masaje deportivo es una técnica que utilizamos para activar o relajar el músculo que es sometido regularmente a actividades físicas y deportivas muy intensas.<br>Este masaje es ideal para evitar lesiones graves durante la ejercitación, y asi lograr que la evolución de la musculatura sea más eficiente gracias a la eliminación adecuada del ácido láctico."
            duracion = 30
            break;

        case "modal5":
        case "splide5":
            titulo = "Drenaje linfático"
            precio = 30
            texto = "El masaje con drenaje linfático es un tratamiento de mediano a largo plazo en donde, mediante una técnica ascendente de masaje, lograremos activar nuestro sistema linfático para liberar las toxinas del cuerpo.<br>Éstos tienen diferentes fines terapéuticos: el más común de todos es la eliminación de retención de líquidos."
            duracion = 45
            break;

        case "modal6":
        case "splide6":
            titulo = "Masaje complementario"
            precio = 15
            texto = "Dentro de los masajes complementarios agrupamos a el masaje capilar, el masaje facial, el masaje de manos, el masaje de pies y el masaje de silla. Éstos mismos ayudan al paciente a optimizar al máximo su experiencia con los masajes.<br>Podremos elegir uno entre todos ellos o solicitarlos todos juntos a gusto propio."
            duracion = 45
            break;

        default:
            break;
    }
    
    modal_tratamientos.innerHTML = ""
    modal_tratamientos.innerHTML = `<div class="modal-content modal-header card modalFormat d-flex justify-content-center mt-0">
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        <div class="modal-body p-0">
                                            <h3 class="modal_title">${titulo}</h3>
                                            <h3 class="modal_price">€${precio}</h3>
                                            <h5 class="modal_text">${texto}</h5>
                                            <h4 class="modal_duration">Duracion: ${duracion} minutos</h4>
                                            <div class="text-center pt-3">
                                                <img src="./assets/media/whatsapp_2.png" class="modal_img" alt="">
                                                <a class="btn modal_button" type="button" href="#">Pedir Cita</a>
                                            </div>
                                        </div>
                                    </div>`
}



