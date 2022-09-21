var nombreUsuario = prompt("Ingresa tu nombre, por favor");
document.getElementById("nombre").innerHTML = nombreUsuario + " ";

const si = document.querySelector('#si')
si.addEventListener('click', () => {
  alert('Sos pija de alcoholico ' + nombreUsuario + ', tendremos que tomarlos unas seis caguamas para explicarte que no todo es beber. Cristo te ama')
})

const no = document.querySelector('#no')
no.addEventListener('mouseover', () => {
  const randomX = Math.random() * 100
  const randomy = Math.random() * 100
  no.style.position = 'absolute'
  no.style.top = randomy + '%'
  no.style.left = randomX + '%'
  no.style.transform = 'traslate(-${randomy}%)'
})