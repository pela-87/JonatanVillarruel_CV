document.getElementById('ico-persona').addEventListener('click',function() {
    RemoverClassSeleccionada ();
    AgregarClassBasica ();
    AgregarClassSelect("ico-persona");
       
});

document.getElementById('ico-mail').addEventListener('click',function() {
    
    RemoverClassSeleccionada ();
    AgregarClassBasica ();
    AgregarClassSelect("ico-mail");
});

document.getElementById('ico-fecha').addEventListener('click',function() {
    
    RemoverClassSeleccionada ();
    AgregarClassBasica ();
    AgregarClassSelect("ico-fecha");
});

document.getElementById('ico-direccion').addEventListener('click',function() {
    
    RemoverClassSeleccionada ();
    AgregarClassBasica ();
    AgregarClassSelect("ico-direccion");
});

document.getElementById('ico-telefono').addEventListener('click',function() {
    
    RemoverClassSeleccionada ();
    AgregarClassBasica ();
    AgregarClassSelect("ico-telefono");
});


function AgregarClassSelect (opcion_click){
    var elemento = document.getElementById(opcion_click);
    var titulo = document.getElementById('titulo-info');
    var descrip = document.getElementById('descripcion-info');
        
    elemento.classList.remove('fa-light');
    elemento.classList.add('fa-duotone');

    switch (opcion_click){
        case 'ico-persona':
            titulo.innerHTML='Hola, mi nombre es';
            descrip.innerHTML='Jonatan Santiago Villarruel';
            break;
        case 'ico-mail':
            titulo.innerHTML='Mi correo electronico es';
            descrip.innerHTML='jonatanvillarruel@yahoo.com.ar';
            break;
        case 'ico-fecha':
            titulo.innerHTML='Mi fecha de nacimiento es';
            descrip.innerHTML='15 de Enero de 1987';
            break;
        case 'ico-direccion':
            titulo.innerHTML='Mi dirección es';
            descrip.innerHTML='San Martin 787, Bahía Blanca';
            break;
        case 'ico-telefono':
            titulo.innerHTML='Mi teléfono es';
            descrip.innerHTML='(0291) - 154130108';
            break;

    }

    
}

function RemoverClassSeleccionada (){
    var persona = document.getElementById('ico-persona');
    var mail = document.getElementById('ico-mail');
    var fecha = document.getElementById('ico-fecha');
    var direccion = document.getElementById('ico-direccion');
    var telefono = document.getElementById('ico-telefono');

    persona.classList.remove('fa-duotone');
    mail.classList.remove('fa-duotone');
    fecha.classList.remove('fa-duotone');
    direccion.classList.remove('fa-duotone');
    telefono.classList.remove('fa-duotone');
}

function AgregarClassBasica (){
    var persona = document.getElementById('ico-persona');
    var mail = document.getElementById('ico-mail');
    var fecha = document.getElementById('ico-fecha');
    var direccion = document.getElementById('ico-direccion');
    var telefono = document.getElementById('ico-telefono');

    persona.classList.add('fa-light');
    mail.classList.add('fa-light');
    fecha.classList.add('fa-light');
    direccion.classList.add('fa-light');
    telefono.classList.add('fa-light');
}


history.pushState(null, '', 'index.html');


document.addEventListener("load", function () {
    loaded();        
});

function loaded() {
    window.scrollTo(0, 0);
}