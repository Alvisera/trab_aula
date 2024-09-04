/*HTML*/

particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      }
    },
    "retina_detect": true
  });


document.addEventListener('DOMContentLoaded', function() {
    const link = document.getElementById('link');

    if (link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 

            document.body.classList.add('zooming');

            setTimeout(() => {
                window.location.href = link.href;
            }, 600); 
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
  const link = document.getElementById('link');

  if (link) {
      link.addEventListener('click', function(e) {
          e.preventDefault(); // Previne o comportamento padrão do link

          // Adiciona a classe de animação de saída
          document.body.classList.add('zooming-out');

          // Espera a animação terminar antes de mudar de página
          setTimeout(() => {
              window.location.href = link.href;
          }, 50); // O tempo deve corresponder ao tempo da animação CSS
      });
  }
});

/*CALCULO DO IMC*/

function calculateIMC() {
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    if (height > 0 && weight > 0) {
        const imc = (weight / (height * height)).toFixed(2);
        let classification = "";

        if (imc < 18.5) {
            classification = "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            classification = "Peso normal";
        } else if (imc >= 25 && imc < 29.9) {
            classification = "Sobrepeso";
        } else if (imc >= 30 && imc < 34.9) {
            classification = "Obesidade grau 1";
        } else if (imc >= 35 && imc < 39.9) {
            classification = "Obesidade grau 2";
        } else {
            classification = "Obesidade grau 3";
        }

        document.getElementById('result').innerHTML = `Seu IMC é ${imc} (${classification}).`;
    } else {
        document.getElementById('result').innerHTML = "Por favor, insira valores válidos.";
    }
}

