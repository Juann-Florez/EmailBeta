function Toastr() {
    toastr.options = {
       "closeButton": false,
       "debug": false,
       "newestOnTop": false,
       "progressBar": true,
       "positionClass": "toast-top-right",
       "preventDuplicates": false,
       "onclick": null,
       "showDuration": "300",
       "hideDuration": "1000",
       "timeOut": "5000",
       "extendedTimeOut": "1000",
       "showEasing": "swing",
       "hideEasing": "linear",
       "showMethod": "fadeIn",
       "hideMethod": "fadeOut"
    }
 }

 function EmailBeta() {
   /* Verificación de campos vacíos */
   Toastr();
   vector = ["email"];
   total = vector.length;
   for (i = 0; i < total; i++) {
       if (document.getElementById(vector[i]).value == "") {
          toastr["error"]("El " + vector[i] + " es necesario ");
          document.getElementById(vector[i]).focus();
          return;
       }
    }

   let Email = document.getElementById("email").value;

   /* Verificación del dominio del correo electrónico */
   const validDomains = ["@ghtcorp.com", "@software-ps.com", "@softgic.co"]; /* Lista de dominios permitidos */
   const modal = document.getElementById("customModal");
   const modalMessage = document.getElementById("modalMessage");
   const progressBar = document.getElementById("progressBar");

   const isValidDomain = validDomains.some(domain => Email.endsWith(domain));

   if (isValidDomain) {
       /* Cambiar el botón y agregar la clase solo si el dominio es válido */
       $("#BtnSendEmail").append("<span class='after-submit'>Gracias por suscribirse email Beta!</span>");
       document.querySelector('.subscription').classList.add('done');

       modalMessage.textContent = "Dominio aceptado. ¡Gracias por suscribirte!";
   } else {
       modalMessage.textContent = "Dominio no permitido para suscribirse. Por favor, ponte en contacto en el equipo DevOps.";
   }

   modal.style.display = "block";
   progressBar.style.animation = "progress 3s linear forwards";

   /* Cerrar el modal automáticamente después de 3 segundos */
   setTimeout(() => {
       modal.style.display = "none";
   }, 3000);

   /* Solo enviar el email si el dominio es válido */
   if (isValidDomain) {
       Email = $("#email").val(); 

       let myHeaders = new Headers();
       myHeaders.append("Content-Type", "application/json");

       let raw = JSON.stringify({
           "emial": Email
       });

       let requestOptions = {
           method: 'POST',
           headers: myHeaders,
           body: raw,
           redirect: 'follow'
       };

       fetch("https://prod-113.westus.logic.azure.com:443/workflows/00ef046091834445b4b249a6a883010a/triggers/manual/paths/invoke?api-version=2016-06-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=kmCMHllCYlOHx2c2EPgp1uxnVLOrn3C9F3lEBpAaO08", requestOptions)
       .then(response => response.text())
       .then(result => console.log(result))
       .catch(error => console.log('error', error));
   }
}

document.querySelector('.submit-email').addEventListener('mousedown', (e) => {
   e.preventDefault();
   // document.querySelector('.subscription').classList.add('done');
});

document.getElementById("BtnSendEmail").onclick = EmailBeta;
  


//agregado nuevo
function cambiarFondo() {
   document.body.style.backgroundColor = colores[indiceColor];
   indiceColor = (indiceColor + 1) % colores.length;

   // Cambiar el color del texto fuera del contenedor
   var Letrafuera = document.getElementById('Letrafuera');
   if (indiceColor === 0) {
      Letrafuera.style.color = 'black'; // Cambia el color del texto a negro si el fondo es oscuro
   } else {
      Letrafuera.style.color = 'white'; // Cambia el color del texto a blanco si el fondo es claro
   }
   var Letrafuera2 = document.getElementById('Letrafuera2');
   if (indiceColor === 0) {
      Letrafuera2.style.color = 'black'; // Cambia el color del texto a negro si el fondo es oscuro
   } else {
      Letrafuera2.style.color = 'white'; // Cambia el color del texto a blanco si el fondo es claro
   }
}

function mostrarPantallaDeCarga() { //Boton SitioLe
   // Mostrar la pantalla de carga
   document.getElementById('pantallaDeCarga').style.display = 'block';
   // Esperar un breve período de tiempo (por ejemplo, 2 segundos)
   setTimeout(function() {
       // Redirigir a la nueva página
       window.location.href = 'apile.html';
   }, 2000); // 2000 milisegundos = 2 segundos
}

function mostrarPantallaDeCarga2() { //Boton regresar
   document.getElementById('pantallaDeCarga').style.display = 'block';
   setTimeout(function() {
       window.location.href = 'index.html';
   }, 1000);
}

function mostrarPantallaDeCarga3() { //Boton Cosmos bd
   document.getElementById('pantallaDeCarga').style.display = 'block';
   setTimeout(function() {
       window.location.href = 'servicebusesb.html';
   }, 1000);
}

function mostrarPantallaDeCarga4() { //Boton Cosmos bd
   document.getElementById('pantallaDeCarga').style.display = 'block';
   setTimeout(function() {
       window.location.href = 'servicebusglobostudio.html';
   }, 1000);
}

function mostrarPantallaDeCarga5() { //Boton Cosmos bd
   document.getElementById('pantallaDeCarga').style.display = 'block';
   setTimeout(function() {
       window.location.href = 'frontdoor.html';
   }, 1000);
}

function mostrarPantallaDeCarga6() { //Boton Cosmos bd
   document.getElementById('pantallaDeCarga').style.display = 'block';
   setTimeout(function() {
       window.location.href = 'cosmosbd.html';
   }, 1000);
}