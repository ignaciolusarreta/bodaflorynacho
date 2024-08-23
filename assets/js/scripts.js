// Instagram parallax
$('.parallax-instagram').parallax({
  imageSrc: 'assets/img/instagram.jpg'

});

// Portada parallax
$('.parallax-portada').parallax({
  imageSrc: 'assets/img/portada2.jpg'
});

// ----------------------



// Cuenta Regresiva:

// Set the date we're counting down to
// var countDownDate = new Date(fechaCuentaRegresiva).getTime();

// // Update the count down every 1 second
// var x = setInterval(function () {

//   // Get today's date and time
//   var now = new Date().getTime();

//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("reloj").innerHTML = days + " días " + hours + "hs " +
//     minutes + "m " + seconds + "s ";

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("reloj").innerHTML = "¡LLEGO EL GRAN DÍA!";
//     $('#reloj').prev('p').html('Listo...');
//   }
// }, 1000);



// ----------------------


// Cuenta regresiva
var fechaInicio = new Date().getTime();
var fechaFin = new Date(fechaCuentaRegresiva).getTime();
var diff = (fechaFin - fechaInicio) / 1000;



// Config countdown
$('.countdown').ClassyCountdown({

  theme: "black",

  labelsOptions: {
    style: 'font-size: 15px;font-family: \'Montserrat 27px\', sans-serif;'
  },

  style: {
    // textResponsive: 0.6,
    secondsElement: {
      gauge: {
        fgColor: "#F00"
      }
    },

    days: {
      gauge: {
        thickness: 0.01,
        fgColor: colorCirculosCuentaRegresiva
      },
      textCSS: 'color:' + colorTextoCuentaRegresiva + ';font-size: 30px !important;font-family: \'Montserrat 27px\', sans-serif;'
    },


    hours: {
      gauge: {
        thickness: 0.01,
        fgColor: colorCirculosCuentaRegresiva
      },
      textCSS: 'color:' + colorTextoCuentaRegresiva + ';font-size: 30px !important;font-family: \'Montserrat 27px\', sans-serif;'
    },


    minutes: {
      gauge: {
        thickness: 0.01,
        fgColor: colorCirculosCuentaRegresiva
      },
      textCSS: 'color:' + colorTextoCuentaRegresiva + ';font-size: 30px !important;font-family: \'Montserrat 27px\', sans-serif;'
    },


    seconds: {
      gauge: {
        thickness: 0.01,
        fgColor: colorCirculosCuentaRegresiva
      },
      textCSS: 'color:' + colorTextoCuentaRegresiva + ';font-size: 30px !important;font-family: \'Montserrat 27px\', sans-serif;'
    }


  },

  // Fecha finalizacion
  end: $.now() + diff,

  // Al finalizar
  onEndCallback: function () {
    // $('.cuenta-regresiva').hide();
  }

});